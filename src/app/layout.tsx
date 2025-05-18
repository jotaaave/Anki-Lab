import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css"
import { Providers } from "./providers";

const interBase = Inter({
  weight: "300",
})

export const metadata: Metadata = {
  title: "Anki Lab",
  description: "A new future for learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${interBase.className}`}>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
  );
}
