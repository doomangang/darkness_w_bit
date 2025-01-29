import React from 'react';

import { ABOUT_ME } from "@/constants";

const AboutMe = () => {
    return (
        <section id="aboutme" className="py-14 px-10 text-point-jean">
            <h2 className="text-3xl font-gtk mb-6">{ABOUT_ME.heading}</h2>
            <p className="font-mono text-point-blue">
                {ABOUT_ME.description}
            </p>
        </section>
    );
};

export default AboutMe;
