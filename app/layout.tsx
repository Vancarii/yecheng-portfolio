import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "@/components/navbar";
import Bottombar from "@/components/bottombar";

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
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Bottombar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
