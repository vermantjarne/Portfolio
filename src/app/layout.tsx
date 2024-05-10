import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Jarne Vermant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="relative flex flex-grow justify-center min-h-full py-8 px-4" style={{backgroundColor: "#FFFFF7"}}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
