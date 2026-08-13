import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { rootMetadata } from "@/lib/metadata";

import "./globals.css";

export const metadata = rootMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl" className="h-full scroll-smooth">
      <body className="min-h-full bg-white text-[var(--color-text)] antialiased">
        <a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:shadow-md" href="#content">
          Ga naar inhoud
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1" id="content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
