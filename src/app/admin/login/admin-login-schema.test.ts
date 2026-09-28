import assert from "node:assert/strict";
import test from "node:test";

import { adminLoginSchema } from "./admin-login-schema.ts";

test("rejects empty admin login credentials with required messages", () => {
  const result = adminLoginSchema.safeParse({ email: "", password: "" });

  assert.equal(result.success, false);
  if (result.success) return;

  assert.deepEqual(
    result.error.issues
      .filter((issue) => issue.path[0] === "email")
      .map((issue) => issue.message),
    ["Enter your email address."],
  );
  assert.deepEqual(
    result.error.issues
      .filter((issue) => issue.path[0] === "password")
      .map((issue) => issue.message),
    ["Enter your password."],
  );
});

test("rejects a malformed admin email address", () => {
  const result = adminLoginSchema.safeParse({
    email: "not-an-email",
    password: "secret",
  });

  assert.equal(result.success, false);
  if (result.success) return;

  assert.deepEqual(
    result.error.issues
      .filter((issue) => issue.path[0] === "email")
      .map((issue) => issue.message),
    ["Enter a valid email address."],
  );
});

test("accepts a one-character password without inventing a length policy", () => {
  const result = adminLoginSchema.safeParse({
    email: "admin@example.com",
    password: "x",
  });

  assert.equal(result.success, true);
});
