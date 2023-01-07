import React from "react";

type NavItemProps = {
  title: string;
  path: string;
}
const NavItem = ({title, path}: NavItemProps) => (
  <div className="hover:cursor-pointer" onClick={()=>console.log(path)}>
  <h1 className="text-white">{title}</h1>
  </div>
);

const NavBar = () => (
<div className="fixed top-0 left-0 right-0 container flex justify-center gap-12 px-4 pt-4 ">
  <NavItem title="Home" path="#"/>
  <NavItem title="About" path="#about"/>
  <NavItem title="Projects" path="#projects"/>
  <NavItem title="Contact" path="#contact"/>
</div>);

export default NavBar;