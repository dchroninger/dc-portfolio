import type {ReactNode} from "react";
import React from "react";
import {IconContext} from "react-icons";
import {FiBookOpen, FiGithub, FiTwitter} from "react-icons/fi";

type SocialIconProps = {
  url: string;
  children: ReactNode;
}
const SocialIcon = ({url, children}: SocialIconProps) => (<div
  className="bg-gray-700 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-600"
  onClick={() => console.log(url)}>
  <IconContext.Provider value={{color: 'white'}}>
    {children}
  </IconContext.Provider>
</div>);

const SocialsBar = () => (<div className="container fixed bottom-3 right-6 w-40 h-12 flex justify-between items-center">
  <SocialIcon url="https://www.twitter.com"><FiTwitter/></SocialIcon>
  <SocialIcon url="https://www.github.com"><FiGithub/></SocialIcon>
  <SocialIcon url="https://www.google.com"><FiBookOpen/></SocialIcon>
</div>);

export default SocialsBar;