import React from 'react';
import MainLayout from '../components/MainLayout';
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
    return (
        <MainLayout>
            <div className="md:hidden">
                <HeroSection />
            </div>
            <AboutMe />
            <Skill />
            <Projects />
            <Education />
            <div className="mt-10md:hidden">
                <Contact />
            </div>
            <Footer />
        </MainLayout>
    );
}
