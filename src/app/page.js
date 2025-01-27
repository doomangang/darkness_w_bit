import React from 'react';
import MainLayout from '../components/MainLayout';
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <MainLayout>
            <AboutMe />
            <Skill />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </MainLayout>
    );
}
