"use client";
import Acciones from "./acciones";
import Navbar from "./nav-bar";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import { useState } from "react";
import { MobileContext } from "@/contexts/header/mobile-context";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <MobileContext.Provider
        value={{ openMobileMenu: open, setOpenMobileMenu: setOpen }}
      >
        <div className="sticky-top border-b p-6 grid grid-cols-2 md:grid-cols-3 shadow-md">
          <Navbar />
          <Logo />
          <Acciones />
          <MobileMenu />
        </div>
      </MobileContext.Provider>
    </header>
  );
}
