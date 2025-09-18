// components/Navbar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/signin", label: "Sign In" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Mini LMS
        </Link>
        <div className="flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === link.href
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
