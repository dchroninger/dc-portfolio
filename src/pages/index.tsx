import {type NextPage} from "next";
import Head from "next/head";
import React from "react";
import SocialsBar from "../components/SocialsBar";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: NextPage = () => {
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
        className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[rgba(63,76,119,1)] to-[rgba(32,38,57,1)]">
        <NavBar/>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <SocialsBar/>
      </main>
    </>
  );
};

export default Home;
