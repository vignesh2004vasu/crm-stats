"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "../ThemeSwitch";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/admin", label: "Admin" },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`hover:text-gray-300 ${
                    pathname === item.href ? "text-blue-400" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeSwitch />
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          © 2024 CRM Stats Dashboard
        </div>
      </footer>
    </div>
  );
};

export default Layout;
