import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AdminLoginForm } from "./admin-login-form";

export const metadata: Metadata = {
  title: "Admin Login | Vortex Academia",
  description: "Sign in to the Vortex Academia administration area.",
};

export default function AdminLoginPage() {
  return (
    <main
      id="main-content"
      data-page="admin-login"
      className="grid min-h-svh lg:grid-cols-[minmax(28rem,0.9fr)_minmax(0,1.1fr)]"
    >
      <section className="flex min-h-svh flex-col px-[var(--gutter-mobile)] py-6 lg:px-[var(--gutter-desktop)] lg:py-8">
        <Link
          href="/"
          aria-label="Vortex Academia home"
          className="inline-flex min-h-11 w-fit items-center gap-3 font-heading text-xl font-extrabold uppercase leading-none tracking-[-0.02em]"
        >
          <Image
            src="/images/logo-dark.png"
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0 object-contain"
            preload
          />
          Vortex Academia
        </Link>

        <div className="flex flex-1 items-center py-12 lg:py-16">
          <AdminLoginForm />
        </div>
      </section>

      <aside className="relative hidden min-h-svh overflow-hidden border-l border-border lg:block">
        <Image
          src="/images/team-photo-5.jpeg"
          alt="Vortex Academia football squad gathered on the pitch after a match."
          fill
          sizes="(min-width: 1024px) 55vw, 0px"
          className="object-cover object-[54%_center]"
          preload
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-background/40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1 bg-primary/80"
        />
      </aside>
    </main>
  );
}
