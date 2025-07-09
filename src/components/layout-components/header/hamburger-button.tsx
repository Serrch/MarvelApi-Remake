"use client";
import { FiMenu } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { MobileContext } from "@/contexts/header/mobile-context";

export default function HamburgerButton() {
  const { openMobileMenu, setOpenMobileMenu } = useContext(MobileContext);

  function cambiarEstado() {
    setOpenMobileMenu(!openMobileMenu);
    console.log(`El estado es ${openMobileMenu}`);
  }

  return (
    <Button
      onClick={cambiarEstado}
      variant="outline"
      size="icon"
      className="md:hidden"
    >
      <FiMenu></FiMenu>
    </Button>
  );
}
