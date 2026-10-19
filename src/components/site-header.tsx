"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationLinkClassName =
  "flex min-h-11 items-center rounded-md px-4 text-sm font-semibold transition-colors duration-fast hover:bg-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const mobileNavigationLinkClassName =
  "flex min-h-12 w-full items-center rounded-md px-4 text-base font-bold transition-colors duration-fast hover:bg-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="relative z-20 bg-card">
      <a
        href="#main-content"
        className="sr-only rounded-md bg-primary px-4 py-3 font-semibold text-primary-foreground focus:not-sr-only focus:absolute focus:left-6 focus:top-4"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-20 w-full max-w-[var(--content-max)] items-center justify-between px-[var(--gutter-mobile)] lg:px-[var(--gutter-desktop)]">
        <Link
          href="/"
          aria-label="Vortex Academia home"
          className="inline-flex items-center gap-2.5 font-heading text-xl font-semibold leading-none"
        >
          <Image
            src="/images/logo-dark.png"
            alt=""
            width={36}
            height={36}
            className="size-9 shrink-0 object-contain"
            priority
          />
          Vortex Academia
        </Link>

        <NavigationMenu
          aria-label="Primary navigation"
          className="hidden md:flex"
          align="end"
        >
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "min-h-11 rounded-md px-4 font-semibold",
                  (pathname === "/football" || pathname === "/running") &&
                    "text-primary",
                )}
              >
                Squad
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-48 p-1">
                <NavigationMenuLink
                  render={
                    <Link
                      href="/football"
                      aria-current={pathname === "/football" ? "page" : undefined}
                    />
                  }
                  className={cn(navigationLinkClassName, pathname === "/football" && "text-primary")}
                >
                  Football
                </NavigationMenuLink>
                <NavigationMenuLink
                  render={
                    <Link
                      href="/running"
                      aria-current={pathname === "/running" ? "page" : undefined}
                    />
                  }
                  className={cn(navigationLinkClassName, pathname === "/running" && "text-primary")}
                >
                  Running
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                render={
                  <Link
                    href="/gallery"
                    aria-current={pathname === "/gallery" ? "page" : undefined}
                  />
                }
                className={cn(navigationLinkClassName, pathname === "/gallery" && "text-primary")}
              >
                Gallery
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <button
                  type="button"
                  aria-label="Open navigation menu"
                  className="flex size-11 items-center justify-center rounded-md bg-secondary transition-colors duration-fast hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                />
              }
            >
              <Menu aria-hidden="true" className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[min(88vw,22rem)] gap-0 border-0 bg-card p-0"
            >
              <SheetHeader className="px-6 py-6 text-left">
                <SheetTitle className="flex items-center gap-3 font-heading text-xl font-semibold">
                  <Image
                    src="/images/logo-dark.png"
                    alt=""
                    width={36}
                    height={36}
                    className="size-9 shrink-0 object-contain"
                  />
                  Vortex Academia
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate to a Vortex Academia squad or the gallery.
                </SheetDescription>
              </SheetHeader>

              <nav
                aria-label="Mobile navigation"
                className="flex flex-col gap-1 px-4 py-6"
              >
                <Collapsible>
                  <CollapsibleTrigger
                    className={cn(
                      "group/squad flex min-h-14 w-full items-center justify-between rounded-md px-4 font-heading text-2xl font-semibold transition-colors duration-fast hover:bg-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                      (pathname === "/football" || pathname === "/running") &&
                        "text-primary",
                    )}
                  >
                    Squad
                    <ChevronDown
                      aria-hidden="true"
                      className="size-5 transition-transform duration-fast group-data-panel-open/squad:rotate-180"
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="ml-4 pl-2 data-ending-style:animate-out data-ending-style:fade-out data-starting-style:animate-in data-starting-style:fade-in">
                    <SheetClose
                      nativeButton={false}
                      render={
                        <Link
                          href="/football"
                          aria-current={pathname === "/football" ? "page" : undefined}
                          className={cn(
                            mobileNavigationLinkClassName,
                            pathname === "/football" && "text-primary",
                          )}
                        />
                      }
                    >
                      Football
                    </SheetClose>
                    <SheetClose
                      nativeButton={false}
                      render={
                        <Link
                          href="/running"
                          aria-current={pathname === "/running" ? "page" : undefined}
                          className={cn(
                            mobileNavigationLinkClassName,
                            pathname === "/running" && "text-primary",
                          )}
                        />
                      }
                    >
                      Running
                    </SheetClose>
                  </CollapsibleContent>
                </Collapsible>
                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href="/gallery"
                      aria-current={pathname === "/gallery" ? "page" : undefined}
                      className={cn(
                        "flex min-h-14 w-full items-center rounded-md px-4 font-heading text-2xl font-semibold transition-colors duration-fast hover:bg-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                        pathname === "/gallery" && "text-primary",
                      )}
                    />
                  }
                >
                  Gallery
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
