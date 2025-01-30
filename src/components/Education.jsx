import React from 'react';
import { EDUCATION } from '../constants';

const Education = () => {
    return (
        <section id="education" className="text-point-jean">
            <h2 className="text-3xl font-gtk">{EDUCATION.heading}</h2>
            <div className="flex flex-col gap-8">
                {EDUCATION.items.map((education, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col transition duration-300"
                    >
                        {/* 학교 이름 */}
                        <h3 className="text-2xl font-gtk text-point-blue group-hover:opacity-100 transition-opacity duration-300">
                            {education.institution}
                        </h3>
                        {/* 학위 */}
                        <p className="italic text-point-sage font-mono group-hover:opacity-100 transition-opacity duration-300 mt-1">
                            {education.degree}
                        </p>
                        {/* 기간 */}
                        <p className="text-point-lilac font-mono group-hover:opacity-100 transition-opacity duration-300 mt-1">
                            {education.period}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
