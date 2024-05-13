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
          <main className="relative flex flex-grow justify-center min-h-full py-8 px-4" style={{backgroundColor: "#E2FFF1"}}>
            <img
              src="/images/jarne-vermant.png"
              alt="Background"
              className="absolute inset-0 z-0 opacity-5 object-cover w-full h-full animate-leftToRight"
            />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
