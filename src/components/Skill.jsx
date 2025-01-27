import React from "react";
import { SKILLS } from "@/constants";

const Skill = () => {
    return (
        <section id="skills" className="relative py-20 flex justify-center items-center">
            <h2 className="absolute top-10 text-3xl font-gtk mb-10 text-point-jean">{SKILLS.heading}</h2>

            {/* 중심이 되는 원 */}
            <div className="relative m-20 w-[300px] h-[300px] flex justify-center items-center rounded-full">
                {/* 개별 스킬 */}
                {SKILLS.items.map((skill, index) => {
                    const angle = (360 / SKILLS.items.length) * (index) ; // 각도를 균등하게 나눔
                    const rotationStyle = {
                        transform: `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`,
                    };

                    return (
                        <div
                            key={index}
                            className="absolute w-32 h-32 bg-point bg-point-blue/40 text-center font-gtk italic text-white flex flex-col justify-center items-center rounded-full shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300"
                            style={rotationStyle}
                        >
                            {/* 스킬 카테고리 */}
                            <span className="text-sm font-gtk">{skill.category}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skill;
