import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import "./globals.css";

const fontSans = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fontMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
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
        className={`${fontSans.variable} ${fontMono.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
