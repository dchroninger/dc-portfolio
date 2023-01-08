import type {MutableRefObject, RefObject} from "react";
import type {ReactNode} from "react";

export type SocialIconProps = {
  url: string;
  children: ReactNode;
}

export type NavItemProps = {
  title: string;
  hash: string;
}

export type NavBarProps = {
  refs: {
    home: RefObject<HTMLDivElement>;
    about: RefObject<HTMLDivElement>;
    projects: RefObject<HTMLDivElement>;
    contact: RefObject<HTMLDivElement>;
  }
}