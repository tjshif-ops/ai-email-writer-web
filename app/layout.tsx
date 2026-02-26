import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SunnyDay AI Email Writer - Smart Reply for Gmail | Chrome Extension",
  description:
    "Generate professional email replies instantly with AI, right inside Gmail. 4 tone options, one-click insert, privacy first. Free to use.",
  keywords: [
    "SunnyDay AI Email Writer",
    "Gmail AI reply",
    "email assistant",
    "Chrome extension",
    "AI email generator",
    "smart email reply",
  ],
  openGraph: {
    title: "SunnyDay AI Email Writer - Write Perfect Emails in Seconds",
    description:
      "AI-powered email replies right inside Gmail. Choose your tone, generate a reply, and send -- all in one click.",
    type: "website",
    url: "https://aiemailwriter.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "SunnyDay AI Email Writer - Write Perfect Emails in Seconds",
    description:
      "AI-powered email replies right inside Gmail. Free Chrome extension.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
