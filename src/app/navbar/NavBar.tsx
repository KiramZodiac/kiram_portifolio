'use client';
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Skills", href: "/Skills" },
    { label: "Projects", href: "/projects" },
   
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b px-5 py-3"
    >
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <Link href={'/'} className="text-xl font-bold">Kiram</Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg relative">
          {links.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <motion.li
                key={link.href}
                className="list-none relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-[2px] bg-blue-600 bottom-[-4px]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.li>
            );
          })}
        </ul>

        {/* Hamburger for mobile */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col gap-4 mt-4 overflow-hidden"
          >
            {links.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.li
                  key={link.href}
                  className="list-none px-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-lg transition-colors duration-200 ${
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 hover:text-blue-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default NavBar;
