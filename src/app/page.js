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
            {/* md 이하에서는 HeroSection을 본문에서 표시 */}
            <div className="lg:hidden">
                <HeroSection />
            </div>

            <AboutMe />
            <Skill />
            <Projects />
            <Education />

            {/* md 이하에서는 Contact을 본문에서 표시 */}
            <div className="mt-10 lg:hidden">
                <Contact />
            </div>

            <Footer />
        </MainLayout>
    );
}
