import React from 'react';

import { ABOUT_ME } from "@/constants";

const AboutMe = () => {
    return (
        <section id="aboutme" className="py-20 px-10 bg-white text-center">
            <h2 className="text-3xl font-semibold mb-6">{ABOUT_ME.heading}</h2>
            <p className="max-w-2xl mx-auto">
                {ABOUT_ME.description}
            </p>
        </section>
    );
};

export default AboutMe;
