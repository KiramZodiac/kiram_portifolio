'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const activeRoute = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Skills", href: "/Skills" },
  ];

  return (
    <nav className="flex items-center justify-center px-5 py-3 border-b bg-white fixed top-0 left-0 right-0 z-50">
      <ul className="flex space-x-8 text-lg">
        {links.map((link) => (
          <li key={link.href} className="list-none">
            <Link href={link.href}
                className={`transition duration-200 ${
                  activeRoute === link.href
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }`}
               > {link.label}
            
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
