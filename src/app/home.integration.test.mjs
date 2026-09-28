import assert from "node:assert/strict";
import { readFile, rm } from "node:fs/promises";
import { createServer } from "node:http";
import test from "node:test";
import next from "next";

const distDir = `.next-test-${process.pid}`;

async function getExistingDevOrigin() {
  try {
    const lock = JSON.parse(await readFile(".next/dev/lock", "utf8"));
    const response = await fetch(lock.appUrl);

    return response.ok ? lock.appUrl : null;
  } catch {
    return null;
  }
}

test("home page uses the supplied activity photos and primary navigation", async (t) => {
  let origin = await getExistingDevOrigin();

  if (!origin) {
    const app = next({
      dev: true,
      dir: process.cwd(),
      conf: { distDir },
    });

    await app.prepare();

    const server = createServer(app.getRequestHandler());
    await new Promise((resolve, reject) => {
      server.once("error", reject);
      server.listen(0, "127.0.0.1", resolve);
    });

    const address = server.address();
    assert.ok(address && typeof address === "object");
    origin = `http://127.0.0.1:${address.port}`;

    t.after(async () => {
      await new Promise((resolve) => server.close(resolve));
      await app.close();
      await rm(distDir, { force: true, recursive: true });
    });
  }

  const response = await fetch(origin);
  assert.equal(response.status, 200);

  const html = (await response.text()).replaceAll("%2F", "/");
  const heroSection = html.match(
    /<section\b[^>]*aria-labelledby="hero-heading"[^>]*>[\s\S]*?<\/section>/,
  )?.[0];
  const activitySection = html.match(
    /<section\b[^>]*id="activities"[^>]*>[\s\S]*?<\/section>/,
  )?.[0];

  assert.ok(heroSection, "expected the page to render the hero section");
  assert.ok(activitySection, "expected the page to render the activity section");

  const heroImages = [...heroSection.matchAll(/<img\b[^>]*>/g)].map(
    ([image]) => image,
  );
  const activityImages = [...activitySection.matchAll(/<img\b[^>]*>/g)].map(
    ([image]) => image,
  );

  assert.equal(
    heroImages.filter((image) => image.includes("/images/hero/handshake.JPG"))
      .length,
    1,
  );
  assert.equal(
    activityImages.filter((image) =>
      image.includes("/images/team-photo-6.jpeg"),
    ).length,
    1,
  );
  assert.equal(
    heroImages.filter((image) => image.includes("/images/apiz-running.jpeg"))
      .length,
    1,
  );
  assert.equal(
    activityImages.filter((image) =>
      image.includes("/images/apiz-running.jpeg"),
    ).length,
    1,
  );

  for (const imagePath of [
    "/images/hero/handshake.JPG",
    "/images/team-photo-6.jpeg",
    "/images/apiz-running.jpeg",
  ]) {
    const imageResponse = await fetch(new URL(imagePath, origin));
    assert.equal(imageResponse.status, 200, `${imagePath} should be available`);
  }

  const header = html.match(/<header\b[\s\S]*?<\/header>/)?.[0];
  assert.ok(header, "expected the page to render a header");

  assert.match(header, /<nav\b[^>]*aria-label="Primary navigation"/);
  assert.match(header, />Squad</);
  assert.match(header, /href="\/gallery"/);
  assert.match(
    header,
    /<button\b[^>]*aria-label="Open navigation menu"[^>]*>/,
  );
  assert.doesNotMatch(
    header,
    /href="https:\/\/www\.instagram\.com\/vortexacademia_\/"/,
  );

  for (const [route, heading] of [
    ["/football", "Football"],
    ["/running", "Running"],
    ["/gallery", "Gallery"],
  ]) {
    const routeResponse = await fetch(new URL(route, origin));
    assert.equal(routeResponse.status, 200, `${route} should be available`);

    const routeHtml = await routeResponse.text();
    assert.match(routeHtml, new RegExp(`<h1[^>]*>${heading}<\\/h1>`));
    assert.match(routeHtml, /Coming soon/);
    assert.match(routeHtml, /href="\/"/);
    assert.equal(
      [...routeHtml.matchAll(/<header\b/g)].length,
      1,
      `${route} should render one shared header`,
    );
    assert.equal(
      [...routeHtml.matchAll(/<footer\b/g)].length,
      1,
      `${route} should render one shared footer`,
    );
  }

  const adminLoginResponse = await fetch(new URL("/admin/login", origin));
  assert.equal(adminLoginResponse.status, 200);

  const adminLoginHtml = (await adminLoginResponse.text()).replaceAll(
    "%2F",
    "/",
  );
  assert.match(
    adminLoginHtml,
    /<main\b[^>]*data-page="admin-login"[^>]*>/,
  );
  assert.equal([...adminLoginHtml.matchAll(/<header\b/g)].length, 0);
  assert.equal([...adminLoginHtml.matchAll(/<footer\b/g)].length, 0);
  assert.match(adminLoginHtml, /<form\b[^>]*>/);
  assert.match(
    adminLoginHtml,
    /<input\b(?=[^>]*name="email")(?=[^>]*autocomplete="email")[^>]*>/i,
  );
  assert.match(
    adminLoginHtml,
    /<input\b(?=[^>]*name="password")(?=[^>]*autocomplete="current-password")[^>]*>/i,
  );
  assert.match(adminLoginHtml, /<label\b[^>]*for="email"[^>]*>Email<\/label>/);
  assert.match(
    adminLoginHtml,
    /<label\b[^>]*for="password"[^>]*>Password<\/label>/,
  );
  assert.match(
    adminLoginHtml,
    /<button\b(?=[^>]*type="button")(?=[^>]*aria-label="Show password")[^>]*>/,
  );
  assert.match(
    adminLoginHtml,
    /<button\b[^>]*type="submit"[^>]*>Sign in<\/button>/,
  );
  assert.match(
    adminLoginHtml,
    /<[^>]+(?=[^>]*role="status")(?=[^>]*aria-live="polite")[^>]*>/,
  );
  assert.match(adminLoginHtml, />Vortex Academia</);
  assert.match(adminLoginHtml, />Admin Access</);
  assert.match(adminLoginHtml, />Welcome back</);
  assert.match(adminLoginHtml, /<a\b[^>]*href="\/"[^>]*>Back to website<\/a>/);
  assert.match(
    adminLoginHtml,
    /<img\b(?=[^>]*src="[^"]*\/images\/team-photo-5\.jpeg)(?=[^>]*alt="Vortex Academia football squad gathered on the pitch after a match\.")[^>]*>/,
  );
  assert.doesNotMatch(adminLoginHtml, /Forgot password|Create account/);
});
