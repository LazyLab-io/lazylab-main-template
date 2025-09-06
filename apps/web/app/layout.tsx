import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lazy form",
  description: "Test REST API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <header className={"bg-amber-600"}>
            <div className="flex flex-wrap items-start">
              <h2 className="text-xl font-bold m-5 text-center">
                <Link href="/">Home</Link>
              </h2>
              <h2 className="text-xl font-bold m-5 text-center">
                <Link href="/users">Users</Link>
              </h2>
            </div>
          </header>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <footer>
            <div>
              <Link href={"https://www.lazylab.io"}>
                <h4>LazyLab.io mbartos - orezek</h4>
              </Link>
            </div>
          </footer>
        </body>
      </html>
    </>
  );
}
