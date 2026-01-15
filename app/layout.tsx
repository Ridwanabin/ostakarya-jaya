import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ostakarya Jaya | Interior Design & Construction",
  description:
    "Ostakarya Jaya is a trusted interior design and construction company with over 25 years of experience in corporate and commercial projects.",
  keywords: [
    "interior design",
    "contractor",
    "office interior",
    "construction company",
    "Jakarta interior"
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
