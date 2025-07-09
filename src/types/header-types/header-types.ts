import { Dispatch, SetStateAction } from "react";

type NavBarLinkType = {
  id: number;
  title: string;
  link: string;
};

export type NavBarLinksType = NavBarLinkType[];

export type MobileContextType = {
  openMobileMenu: boolean;
  setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
};
