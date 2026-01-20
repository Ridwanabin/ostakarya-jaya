import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWA from "../components/FloatingWA";

export const metadata = {
  title: "Ostakarya Jaya",
  description: "Interior Design & Construction Company",
  icons: {
    icon: "/portfolio/favicon.png", // <--- cukup pakai path string
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
