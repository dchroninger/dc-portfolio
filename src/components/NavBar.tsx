import React, {useEffect} from "react";
import type {NavBarProps, NavItemProps} from "../types";
import {scrollTo} from "../utils/scroll";
import {useRouter} from "next/router";

const NavItem = ({title, hash, isActive}: NavItemProps) => {
  const router = useRouter();
  const activeUnderline = isActive ? "underline" : undefined;
return (
    <div className="hover:cursor-pointer"
         onClick={()=>router.push({pathname: "/", hash: hash})}>
      <h1 className={`text-white ${activeUnderline}`}>{title}</h1>
    </div>
  );
}

export const NavBar = ({refs, active}: NavBarProps) => {
  const path = useRouter().asPath;
  useEffect(() => {
    switch (path) {
      case "/#home":
        scrollTo(refs.home);
        break;
      case "/#about":
        scrollTo(refs.about);
        break;
      case "/#contact":
        scrollTo(refs.contact);
        break;
      case "/#projects":
        scrollTo(refs.projects);
        break;
      default:
        scrollTo(refs.home);
    }
  }, [refs.about, refs.contact, refs.home, refs.projects, path])

  return (
    <div className="z-20 fixed flex items-center justify-center gap-12 px-4 pt-4">
      <NavItem isActive={active === "home"} title="Home" hash="#home"/>
      <NavItem isActive={active === "about"} title="About" hash="#about"/>
      <NavItem isActive={active === "projects"} title="Projects" hash="#projects"/>
      <NavItem isActive={active === "contact"} title="Contact" hash="#contact"/>
    </div>)
};