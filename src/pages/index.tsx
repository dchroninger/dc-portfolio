import {type NextPage} from "next";
import Head from "next/head";
import React, {useEffect, useRef} from "react";
import {NavBar, SocialsBar} from "../components";
import {About, Contact, Hero, Projects} from "../sections";
import {useIsInViewport} from "../hooks/useIsVisibleInViewport";
import {useRouter} from "next/router";
import {scrollTo} from "../utils/scroll";
import {Section} from "../types";

const Home: NextPage = () => {
  const router = useRouter();
  const path = router.asPath;

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const isContactInViewport = useIsInViewport(contactRef);
  const isProjectsInViewport = useIsInViewport(projectsRef);
  const isAboutInViewport = useIsInViewport(aboutRef);
  const isHomeInViewport = useIsInViewport(homeRef);

  const [activeSection, setActiveSection] = React.useState<Section>("home");

  useEffect(() => {
    if (isHomeInViewport) setActiveSection("home");
    if (isAboutInViewport) setActiveSection("about");
    if (isProjectsInViewport) setActiveSection("projects");
    if (isContactInViewport) setActiveSection("contact");
  }, [isContactInViewport, isProjectsInViewport, isAboutInViewport, isHomeInViewport]);

  useEffect(() => {
    console.log(activeSection);
    //TODO: Scrolling should update the URL hash, while clicking should ALSO update the hash.
    // When scroll controls the hash currently, clicking can't override it.
    //if(path.split("#")[1] !== activeSection) router.push({pathname: "/", hash: activeSection});
    switch (path) {
      case "/#home":
        scrollTo(homeRef);
        break;
      case "/#about":
        scrollTo(aboutRef);
        break;
      case "/#contact":
        scrollTo(contactRef);
        break;
      case "/#projects":
        scrollTo(projectsRef);
        break;
      default:
        scrollTo(homeRef);
    }
  },[activeSection, path, router]);

  return (
    <>
      <Head>
        <title>Dave C - Portfolio</title>
        <meta name="description" content="Software Engineering Portfolio for Dave Chroninger"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <main
        className="flex min-h-screen flex-col items-center overflow-hidden">
        <div className="z-0 fixed h-screen w-full bg-gradient-to-b from-[rgba(63,76,119,1)] to-[rgba(32,38,57,1)]">
          <div className="h-full w-full topography-pattern"/>
        </div>
        <NavBar active={activeSection} refs={{home: homeRef, about: aboutRef, projects: projectsRef, contact: contactRef}}/>
        <SocialsBar/>
        <div className="z-10 w-screen h-screen overflow-y-scroll snap-y snap-mandatory">
          <div className="h-full w-full mb-1 snap-always snap-center">
            <Hero ref={homeRef}/>
          </div>
          <div className={`h-full w-full mb-1 snap-always snap-center`}>
            <About ref={aboutRef}/>
          </div>
          <div className={`h-full w-full mb-1 snap-always snap-center`}>
            <Projects ref={projectsRef}/>
          </div>
          <div className={`h-full w-full snap-always snap-center`}>
            <Contact ref={contactRef}/>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
