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
            <div className="p-5  mb-5 bp:hidden">
                <HeroSection/>
            </div>

            <div className="p-5 mb-5">
                <AboutMe/>
            </div>

            <div className="p-5 mb-5">
                <Skill/>
            </div>

            <div className="p-5 mb-5">
                <Projects/>
            </div>

            <div className="p-5 mb-5">
                <Education/>
            </div>

            <div className="p-5 mb-5 ">
                <Contact/>
            </div>

            <Footer/>
        </MainLayout>
    );
}
