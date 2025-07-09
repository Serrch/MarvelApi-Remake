"use client";
import { NavBarLinks } from "./navbar-links";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="hidden md:flex gap-6 justify-start md:justify-center items-center">
      <nav className="flex gap-6">
        {NavBarLinks.map((navbarLink) => (
          <Link
            key={navbarLink.id}
            href={navbarLink.link}
            className="transition duration-300 ease-in-out hover:text-rose-600 hover:scale-105 hover:underline ${} text-lg font-semibold"
          >
            {navbarLink.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
