import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "lswp-aid.local";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const siteUrl = `${protocol}://${host}`;
  const title = "LSWP Aid | Lasallian Student Welfare Program";
  const description = "Support for currently enrolled Lasallian students facing urgent welfare needs.";

  return {
    title,
    description,
    openGraph: {
      title: "LSWP Aid",
      description,
      url: siteUrl,
      type: "website",
      images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "LSWP Aid" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "LSWP Aid",
      description,
      images: [`${siteUrl}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${fraunces.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
