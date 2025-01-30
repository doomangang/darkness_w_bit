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
            <div className="p-5 lg:hidden">
                <HeroSection/>
            </div>

            <div className="p-5">
                <AboutMe/>
            </div>

            <div className="p-5">
                <Skill/>
            </div>

            <div className="p-5">
                <Projects/>
            </div>

            <div className="p-5">
                <Education/>
            </div>

            <div className="p-5 lg:hidden">
                <Contact/>
            </div>

            <Footer/>
        </MainLayout>
    );
}
