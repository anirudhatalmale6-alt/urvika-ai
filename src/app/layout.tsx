import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Urvika.ai — AI Agents for Healthcare Calls",
  description:
    "Urvika.ai uses voice AI to automate clinical and administrative healthcare phone calls, saving hundreds of thousands of hours annually while improving patient outcomes.",
  keywords: [
    "healthcare AI",
    "voice AI",
    "medical automation",
    "clinical calls",
    "healthcare technology",
    "AI agents",
    "patient engagement",
    "benefits verification",
    "prior authorization",
  ],
  openGraph: {
    title: "Urvika.ai — AI Agents for Healthcare Calls",
    description:
      "Voice AI platform automating clinical and administrative healthcare calls at scale.",
    type: "website",
    url: "https://urvika.ai",
    siteName: "Urvika.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urvika.ai — AI Agents for Healthcare Calls",
    description:
      "Voice AI platform automating clinical and administrative healthcare calls at scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
