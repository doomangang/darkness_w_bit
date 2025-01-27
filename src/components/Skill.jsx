import React from 'react';
import {SKILLS} from "@/constants";

const Skill = () => {
    return (
        <section id="skills" className="py-20 px-10 bg-gray-100 text-center">
            <h2 className="text-3xl font-semibold mb-6">{SKILLS.heading}</h2>
            <ul className="flex justify-center flex-wrap gap-4">
                {SKILLS.items.map((skill, index) => (
                    <li key={index} className="bg-white shadow-md rounded-lg p-4">{skill.category}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skill;
