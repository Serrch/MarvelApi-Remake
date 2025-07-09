import { createContext } from "react";
import { MobileContextType } from "@/types/header-types/header-types";

export const MobileContext = createContext<MobileContextType>({
  openMobileMenu: false,
  setOpenMobileMenu: () => {},
});
