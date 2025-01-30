import React from 'react';

import { ABOUT_ME } from "@/constants";

const AboutMe = () => {
    return (
        <section id="aboutme" className="mb-5 text-point-jean">
            {/*<h2 className="text-3xl mb-3 font-gtk">{ABOUT_ME.heading}</h2>*/}
            <div
                className="text-sm mx-auto font-gtk font-light text-point-tblue leading-relaxed"
                dangerouslySetInnerHTML={{__html: ABOUT_ME.description}}
            />
        </section>
    );
};

export default AboutMe;
