import React from 'react';

import {INTRO} from "@/constants";

const HeroSection = () => {
    return (
        <div className="mb-1 pl-10 pt-10 ">
            <h1 className="text-4xl lg:text-3xl font-jeanluc text-point-sage mb-4">{INTRO.title}</h1>
            <p className="mb-2 font-mono text-point-lilac">
                {INTRO.description}
            </p>
            <p className="font-gtk text-point-blue">
                {INTRO.location}
            </p>
        </div>
    );
};

export default HeroSection;
