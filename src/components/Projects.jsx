import React from "react";

import { projectText } from "@/constants";

const projects = () => {
    return (
        <section id="projects">
            <div className="projects__inner">
                <h2 className="projects__title">
                    Projects <em>나의 작업물</em>
                </h2>
                <div className="projects__wrap">
                    {projectText.map((projects, key) => (
                        <article className={`projects__item s${key+1}`} key={key}>
                            <span className="num">{key+1}.</span>
                            <div className="text">
                                <div>{projects.text[0]}</div>
                                <div>{projects.text[1]}</div>
                                <div>{projects.text[2]}</div>
                            </div>
                            <h3 className="title">
                                {projects.title}
                            </h3>
                            <div className="btn">
                                <a href={projects.code}>code</a>
                                <a href={projects.view}>view</a>
                            </div>
                            <div className="info">
                                <span>{projects.info[0]}</span>
                                <span>{projects.info[1]}</span>
                                <span>{projects.info[2]}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default projects;
