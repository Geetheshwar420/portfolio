import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Geetheshwar — Full-Stack Developer & AI Engineer",
  description:
    "Portfolio of Geetheshwar Sri Ranga Sai Gadamsetty — Full-Stack Developer and AI Engineer specialising in TypeScript, Python, Flutter, and quantum-safe systems.",
  openGraph: {
    title: "Geetheshwar — Full-Stack Developer & AI Engineer",
    description:
      "Building intelligent systems, secure applications, and AI-powered products.",
    url: "https://geetheshwar.dev",
    siteName: "Geetheshwar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geetheshwar — Full-Stack Developer & AI Engineer",
    description: "Full-Stack Developer & AI Engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
