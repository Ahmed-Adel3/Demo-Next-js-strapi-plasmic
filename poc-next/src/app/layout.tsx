// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApolloWrapper } from "@/lib/client"; //Importing the ApolloWrapper Provider
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/header";


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
          <Header />
          {/* Header */}
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}