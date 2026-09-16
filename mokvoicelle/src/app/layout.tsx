import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientOnlyPreloader from "@/components/ClientOnlyPreloader";
import ClientOnlyWhatsApp from "@/components/ClientOnlyWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOK Voicelle",
  description: "High-impact web design, voiceovers, and media production.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientOnlyPreloader />
        {children}
        <ClientOnlyWhatsApp />
      </body>
    </html>
  );
}