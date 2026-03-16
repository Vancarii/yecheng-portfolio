import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "@/components/navbar";
import Bottombar from "@/components/bottombar";
import SnowEffect from "@/components/snow-effect";

export const metadata: Metadata = {
  title: "Yecheng Wang",
  description: "A Portfolio Website for Yecheng Wang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <SnowEffect />
          <Navbar />
          <Bottombar />
          <main className="overflow-x-hidden">{children}</main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
