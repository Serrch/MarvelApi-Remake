import { NavBarLinksType } from "@/types/header-types/header-types";
import { routes } from "@/routes/routes";

export const NavBarLinks: NavBarLinksType = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Personajes", link: routes.personajes },
  { id: 3, title: "Comics", link: routes.comics },
];
