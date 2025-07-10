"use client";
import { NavBarLinks } from "./navbar-links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex gap-6 justify-start md:justify-center items-center">
      <nav className="flex gap-6">
        {NavBarLinks.map((navbarLink) => (
          <Link
            key={navbarLink.id}
            href={navbarLink.link}
            className={`transition duration-300 ease-in-out hover:text-rose-600 hover:scale-105 hover:underline text-lg font-semibold ${
              pathname === navbarLink.link
                ? "text-rose-600 scale-105 underline"
                : ""
            } `}
          >
            {navbarLink.title.toLocaleUpperCase()}
          </Link>
        ))}
      </nav>
    </div>
  );
}
