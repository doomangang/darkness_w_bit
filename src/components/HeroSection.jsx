import React from 'react';

import {INTRO} from "@/constants";

const HeroSection = () => {
    return (
        <div className="mb-4">
            <h1 className="text-4xl lg:text-3xl font-bold text-gray-800 mb-4">{INTRO.title}</h1>
            <p className="text-gray-600">
                {INTRO.description}
            </p>
        </div>
    );
};

export default HeroSection;
