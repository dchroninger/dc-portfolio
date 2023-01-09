import type {RefObject} from "react";
import type {ReactNode} from "react";

export type Section = "home" | "about" | "projects" | "contact";

export type SocialIconProps = {
  url: string;
  children: ReactNode;
}

export type NavItemProps = {
  title: string;
  hash: string;
  isActive: boolean;
}

export type NavBarProps = {
  active: Section;
  refs: {
    home: RefObject<HTMLDivElement>;
    about: RefObject<HTMLDivElement>;
    projects: RefObject<HTMLDivElement>;
    contact: RefObject<HTMLDivElement>;
  }
}