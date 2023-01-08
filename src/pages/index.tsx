import {type NextPage} from "next";
import Head from "next/head";
import React, {useRef} from "react";
import {NavBar, SocialsBar} from "../components";
import {About, Contact, Hero, Projects} from "../sections";

const Home: NextPage = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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
        className="flex min-h-screen flex-col items-center">
        <div className="z-0 fixed h-screen w-full bg-gradient-to-b from-[rgba(63,76,119,1)] to-[rgba(32,38,57,1)]">
          <div className="h-full w-full topography-pattern"/>
        </div>
        <div className="z-10 w-full">
          <NavBar refs={{home: homeRef, about: aboutRef, projects: projectsRef, contact: contactRef }}/>
          <Hero ref={homeRef}/>
          <About ref={aboutRef}/>
          <Projects ref={projectsRef}/>
          <Contact ref={contactRef}/>
          <SocialsBar/>
        </div>
      </main>
    </>
  );
};

export default Home;
