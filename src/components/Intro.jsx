import React from 'react';
import { INTRO } from "@/constants";

const Intro = () => {
    return (
        <section
            id="intro"
            className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500 text-white text-center"
        >
            <h2 className="text-5xl font-jeanluc mb-4">{INTRO.title}</h2>
            <p className="text-lg">{INTRO.description}</p>
        </section>
    );
};

export default Intro;
