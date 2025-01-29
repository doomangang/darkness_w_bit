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
        <section id="skills" ref={skillRef} className="relative py-20 flex flex-col items-center">
            <h2 className="text-3xl font-gtk mb-10 text-point-jean">
                {SKILLS.heading}
            </h2>

            {/* 중심 원 */}
            <div className="relative m-20 w-[300px] h-[300px] flex justify-center items-center rounded-full">
                {SKILLS.items.map((skill, index) => {
                    const angle = (360 / SKILLS.items.length) * ((index + 2) % SKILLS.items.length); // 균등 분포
                    const rotationStyle = {
                        transform: `rotate(${angle}deg) translate(100px) rotate(-${angle}deg)`,
                    };

                    return (
                        <div
                            key={index}
                            className={`absolute flex flex-col items-center opacity-0 translate-y-10 transition-all duration-700 ease-out
                                ${active ? "opacity-100 translate-y-0" : ""}`}
                            style={{...rotationStyle, transitionDelay: `${index * 200}ms`}} // 순차적 등장
                        >
                            <div
                                className="w-32 h-32 bg-point-blue/40 text-center font-gtk italic text-white flex flex-col justify-center items-center rounded-full shadow-md">
                                <span className="text-sm font-gtk">{skill.category}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* 🔽 Skills Section 아래 추가된 전체 기술 블록 🔽 */}
            <div className={`w-[70%] max-w-2xl mt-10 px-6 py-6 rounded-lg shadow-lg bg-point-blue/20
                        transition-all duration-700 ease-out ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                <h3 className="text-xl font-gtk text-point-lilac text-center mb-4">Skill Overview</h3>

                <div className="flex flex-col justify-between">
                    {TOOLS.categories.map((category, index) => (
                        <div key={index} className="flex-1 px-4 pb-4">
                            <h4 className="text-lg font-mono text-point-blue mb-2">{category.title}</h4>
                            <div className="flex flex-wrap gap-4 text-4xl text-point-jean">
                                {category.skills.map((skill, idx) => {
                                    const IconComponent = skill.icon;
                                    return <IconComponent key={idx} title={skill.name}/>;
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
