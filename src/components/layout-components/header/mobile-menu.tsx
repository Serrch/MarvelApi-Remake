"use client";
import { AnimatePresence, motion } from "framer-motion";
import { NavBarLinks } from "./navbar-links";
import { useContext, useRef, useEffect } from "react";
import { MobileContext } from "@/contexts/header/mobile-context";
import { FiX } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const { openMobileMenu, setOpenMobileMenu } = useContext(MobileContext);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMobileMenu(false);
      }
    }

    if (openMobileMenu) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMobileMenu, setOpenMobileMenu]);

  const pathname = usePathname();

  return (
    <AnimatePresence>
      {openMobileMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 z-50"
        >
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white dark:bg-zinc-900 p-6 shadow-lg z-50"
          >
            <button
              onClick={() => setOpenMobileMenu(false)}
              className="absolute top-4 right-4 text-2xl text-zinc-700 dark:text-zinc-300 hover:text-rose-600"
              aria-label="Cerrar menú"
            >
              <FiX />
            </button>

            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-6 mt-4">
              Navegación
            </h2>

            <ul className="space-y-6">
              {NavBarLinks.map((navbarLink) => (
                <li key={navbarLink.id}>
                  <Link
                    href={navbarLink.link}
                    className={`block text-lg font-semibold hover:text-rose-600 transition duration-300 ${
                      pathname === navbarLink.link
                        ? "text-rose-600 scale-105 underline"
                        : ""
                    }`}
                  >
                    {navbarLink.title.toLocaleUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
