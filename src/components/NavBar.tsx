import React, {useEffect} from "react";
import type {NavBarProps, NavItemProps} from "../types";
import {scrollTo} from "../utils/scroll";
import {useRouter} from "next/router";

const NavItem = ({title, hash}: NavItemProps) => {
  const router = useRouter();
return (
    <div className="hover:cursor-pointer"
         onClick={()=>router.push({pathname: "/", hash: hash})}>
      <h1 className="text-white">{title}</h1>
    </div>
  );
}

export const NavBar = ({refs}: NavBarProps) => {
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
    <div className="fixed flex items-center justify-center gap-12 px-4 pt-4">
      <NavItem title="Home" hash="#home"/>
      <NavItem title="About" hash="#about"/>
      <NavItem title="Projects" hash="#projects"/>
      <NavItem title="Contact" hash="#contact"/>
    </div>)
};