import React from 'react';
import { EDUCATION } from '../constants';

const Education = () => {
    return (
        <section id="education" className="py-20 px-10 bg-gray-50 text-center">
            <h2 className="text-3xl font-semibold mb-6">{EDUCATION.heading}</h2>
            <div className="flex flex-col gap-6">
                {EDUCATION.items.map((education, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-xl font-bold text-blue-600 mb-2">
                            {education.institution}
                        </h3>
                        <p className="text-gray-700 italic">{education.degree}</p>
                        <p className="text-gray-500 text-sm">{education.period}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
