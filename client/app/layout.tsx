import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "@/vendor/PrelineScript";
import Navbar from "@/components/Universal/Navbar";
import Footer from "@/components/Universal/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apex Imaginary",
  description: "An imaginary company for outsourcing jobs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <PrelineScript />
      </body>
    </html>
  );
}
