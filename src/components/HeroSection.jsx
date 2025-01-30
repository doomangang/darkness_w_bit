import React from 'react';
import { AiFillMail, AiFillGithub } from "react-icons/ai";

import {ABOUT_ME, INTRO} from "@/constants";

const HeroSection = () => {
    return (
        <section className="flex flex-col text-center items-center bp:text-start bp:items-start">
            <h1 className="text-4xl mb-1 bp:text-3xl bp:mb-0.5 font-jeanluc text-point-sage">{INTRO.title}</h1>
            <p className="mb-1.5 font-gtk  text-point-lilac">
                {INTRO.description}
            </p>
            <p className="font-mono pt-0.5 text-xs text-point-blue">
                {INTRO.location}
            </p>
            <div className="flex space-x-4 mt-4">
                {/* 메일 아이콘 */}
                <a href="mailto:sp0943@cau.ac.kr" target="_blank" rel="noopener noreferrer">
                    <AiFillMail className="text-2xl text-point-jean hover:text-point-jean transition-colors duration-300"/>
                </a>
                {/* GitHub 아이콘 */}
                <a href="https://github.com/doomangang" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub className="text-2xl text-point-jean hover:text-point-jean transition-colors duration-300"/>
                </a>
            </div>
        </section>
)
    ;
};

export default HeroSection;
