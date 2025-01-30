import React from 'react';

import { ABOUT_ME } from "@/constants";

const AboutMe = () => {
    return (
        <section id="aboutme" className="text-point-jean">
            <h2 className="text-3xl mb-3 font-gtk">{ABOUT_ME.heading}</h2>
            <p className="font-mono text-sm text-point-blue">
                {ABOUT_ME.description}
            </p>
        </section>
    );
};

export default AboutMe;
