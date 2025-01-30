"use client"

import React, { useState, useEffect, useRef } from "react";
import { SKILLS, TOOLS } from "@/constants";

const Skill = () => {
    const [active, setActive] = useState(false);
    const skillRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActive(true);
                }
            },
            { threshold: 0.3 } // 30% 이상 보이면 실행
        );

        if (skillRef.current) {
            observer.observe(skillRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" ref={skillRef} className="relative flex flex-col items-center">
            <h2 className="relative text-3xl m-5 font-gtk text-point-jean">
                {SKILLS.heading}
            </h2>

            {/* 중심 원 */}
            <div className="relative m-36 w-32 h-32 flex justify-center items-center rounded-full">
                {SKILLS.items.map((skill, index) => {
                    const angle = (360 / SKILLS.items.length) * ((index + 3) % SKILLS.items.length); // 균등 분포
                    const rotationStyle = {
                        transform: `rotate(${angle}deg) translate(110px) rotate(-${angle}deg)`,
                    };

                    return (
                        <div
                            key={index}
                            className={`absolute flex flex-col items-center opacity-0 translate-y-10 transition-all duration-700 ease-out
                                ${active ? "opacity-100 translate-y-0" : ""}`}
                            style={{...rotationStyle, transitionDelay: `${index * 200}ms`}} // 순차적 등장
                        >
                            <div
                                className="w-36 h-36 p-1.5 bg-point-blue/40 text-center text-white flex flex-col justify-center items-center rounded-full shadow-md">
                                <span className=" font-gtk">{skill.category}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* 🔽 Skills Section 아래 추가된 전체 기술 블록 🔽 */}
            {/*<div className={`w-[70%] max-w-2xl m-5 p-5 rounded-lg shadow-lg bg-point-blue/20*/}
            {/*            transition-all duration-700 ease-out ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>*/}
            {/*    <h3 className="text-xl m-1 font-gtk text-point-lilac text-center">Skill Overview</h3>*/}

            {/*    <div className="flex flex-col justify-between">*/}
            {/*        {TOOLS.categories.map((category, index) => (*/}
            {/*            <div key={index} className="">*/}
            {/*                <h4 className="font-mono m-1 text-point-blue">{category.title}</h4>*/}
            {/*                <div className="m-1 flex flex-wrap justify-evenly text-4xl text-point-jean">*/}
            {/*                    {category.skills.map((skill, idx) => {*/}
            {/*                        const IconComponent = skill.icon;*/}
            {/*                        return <IconComponent key={idx} title={skill.name}/>;*/}
            {/*                    })}*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    );
};

export default Skill;
