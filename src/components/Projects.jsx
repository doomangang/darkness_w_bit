import React from "react";
import { PROJECTS } from "@/constants";

import Image from "next/image"

const Projects = () => {
    return (
        <section id="projects" className="text-point-jean">
            <h2 className="mb-5 mt-5 text-3xl font-gtk">Projects</h2>
            <div className="flex flex-col gap-10">
                {PROJECTS.items.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-6 hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                    >
                        {/* 왼쪽: 이미지 */}
                        <div className="relative p-2 flex-row w-40 h-30 overflow-auto">
                            <Image
                                src={project.image}
                                alt={project.title}
                                objectFit="contain"
                                className="group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* 오른쪽: 텍스트 */}
                        <div className="flex-1">
                            <h3 className="text-xl mb-1 font-gtk group-hover:text-point-lilac transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-sm text-point-blue font-mono group-hover:text-base-khaki transition-colors duration-300">
                                {project.description}
                            </p>
                        </div>

                         {/*스포트라이트 효과*/}
                        <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-90 transition-opacity duration-900">
                            <div className="w-full h-full bg-point-blue/40 animate-slide"></div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
