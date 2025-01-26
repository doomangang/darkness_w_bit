"use client";
import React, { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects";
import Port from "@/components/Port";
import Contact from "@/components/Contact";
import Skip from "@/components/Skip";
import lenis from "@/utils/smooth";
import link from "@/utils/link";

export default function Home() {
    useEffect(() => {
        // lenis();
        link();
    }, []);

  return (
      <>
          <Skip />
          <Header />
          <main id="main" role="main">
              <Intro />
              <Skill />
              <Projects />
              <Port />
              <Contact />
          </main>
          <Footer />
      </>
  );
}
