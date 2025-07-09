import { NavBarLinksType } from "@/types/header-types/header-types";
import { routes } from "@/routes/routes";

export const NavBarLinks: NavBarLinksType = [
  { id: 1, title: "HOME", link: "/" },
  { id: 2, title: "PERSONAJES", link: routes.personajes },
  { id: 3, title: "COMICS", link: routes.comics },
];
