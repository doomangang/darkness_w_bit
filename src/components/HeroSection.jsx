import React from 'react';

import {INTRO} from "@/constants";

const HeroSection = () => {
    return (
        <div className="">
            <h1 className="text-4xl lg:text-3xl font-jeanluc text-point-sage">{INTRO.title}</h1>
            <p className="font-mono text-point-lilac">
                {INTRO.description}
            </p>
            <p className="font-gtk text-point-blue">
                {INTRO.location}
            </p>
        </div>
    );
};

export default HeroSection;
