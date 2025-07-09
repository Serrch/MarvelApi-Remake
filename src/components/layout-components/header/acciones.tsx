"use client";
import { ModeToggle } from "@/components/toggle-mode";
import HamburgerButton from "./hamburger-button";
export default function Acciones() {
  return (
    <div className="content-center justify-items-end">
      <div className="grid grid-cols-2 gap-2">
        <ModeToggle />
        <HamburgerButton />
      </div>
    </div>
  );
}
