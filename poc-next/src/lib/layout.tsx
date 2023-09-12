// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApolloWrapper } from "@/lib/client"; //Importing the ApolloWrapper Provider
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "POC APP",
  description: "FOR POC .....",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ApolloWrapper>
          {/* Wrapping the React.ReactNode*/}
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}