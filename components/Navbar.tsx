"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Clients", href: "#clients" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full py-4 px-6 border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/portfolio/logo.png"
            alt="Ostakarya Jaya Logo"
            width={50}
            height={50}
            priority
          />
          <span className="text-xl font-bold text-blue-900 tracking-wide">
            Ostakarya Jaya
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-gray-700 hover:text-blue-900 transition font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 bg-white border-t border-gray-200 p-4">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="block py-2 text-gray-700 font-medium hover:text-blue-900"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
