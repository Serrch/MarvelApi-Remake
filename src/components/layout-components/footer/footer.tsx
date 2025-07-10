"use client";
import { NavBarLinks } from "../header/navbar-links";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="flex gap-4 justify-center mb-4 flex-wrap">
          {NavBarLinks.map((navbarLink) => (
            <Link
              key={navbarLink.title}
              href={navbarLink.link}
              className="text-gray-500 hover:text-gray-800 transition duration-300"
            >
              {navbarLink.title}
            </Link>
          ))}
        </div>

        <div className="pt-4 text-center text-sm text-gray-700 border-t">
          <p>© 2025 Marvel API. Todos los derechos reservados.</p>
        </div>

        <div className="mb-6">
          <ul className="mt-4 flex justify-center gap-4 list-none">
            <li>
              <Link
                href="https://www.linkedin.com/in/sergio-enrique-pérez-rivas-5b5943276/"
                className="text-gray-600 hover:text-blue-700 text-xl transition"
              >
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Serrch"
                className="text-gray-600 hover:text-black text-xl transition dark:hover:text-gray-50"
              >
                <FaGithub />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
