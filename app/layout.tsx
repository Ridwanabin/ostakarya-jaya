import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWA from "../components/FloatingWA";

import type { Metadata } from "next";

export const metadata = {
  title: "Ostakarya Jaya",
  description: "Interior Design & Construction Company",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Ostakarya Jaya",
    description: "Interior Design & Construction Company",
    url: "https://ostakarya-jaya.vercel.app",
    siteName: "Ostakarya Jaya",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <FloatingWA />
        <Footer />
      </body>
    </html>
  );
}
