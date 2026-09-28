import type { Metadata } from "next";
import { Barlow_Condensed, Geist_Mono, Inter } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const instagramHref = "https://www.instagram.com/vortexacademia_/";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vortex Academia",
  description:
    "A Kuala Lumpur sports community for football, running, mutual support, and staying healthy together.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${barlowCondensed.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background">
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter instagramHref={instagramHref} />
      </body>
    </html>
  );
}
