import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../styles/globals.css";
import { siteConfig } from "@/config/site";

const outfit = Outfit({
  variable: "--font-outfit-sans",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: "icons/favicon/favicon.ico",
    shortcut: "icons/favicon/favicon-16x16.png",
    apple: "icons/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
