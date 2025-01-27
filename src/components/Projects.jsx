import React from 'react';
import {PROJECTS} from "@/constants";

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-10 bg-white text-center">
            <h2 className="text-3xl font-semibold mb-6">{PROJECTS.heading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.items.map((project, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        <a href={project.link} className="text-blue-500">View Repository</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
