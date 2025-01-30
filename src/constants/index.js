// src/constants/index.js
import shell from "@/asset/img/Shell-icon.png"
import raytracer from "@/asset/img/raytracing.png"
import mindeye from "@/asset/img/mindeye-5.png"

import { FaCuttlefish, FaJava, FaJs, FaDatabase, FaGitAlt, FaSlack, FaLinux } from "react-icons/fa";
import { SiCplusplus, SiTypescript, SiMysql, SiNotion, SiFigma, SiXcode, SiIntellijidea, SiClion, SiEclipseide, SiVim, SiZsh } from "react-icons/si";
import { TbTerminal2 } from "react-icons/tb"; // 터미널 아이콘
import { MdDeveloperMode } from "react-icons/md"; // Cursor (IDE 관련 대체 아이콘)
import { BiChip, BiLogoVisualStudio } from "react-icons/bi"; // LLDB (디버거 관련 대체 아이콘)


export const SECTIONS = [
    { id: "aboutme", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
];


export const INTRO = {
    title: "Jeong Ji-Hyun,",
    description: 'Bridging technology, design, and storytelling to shape perspectives',
    location: '📍Seoul, South Korea',
};

export const color =  "#3d5471";

export const ABOUT_ME = {
    heading: "About Me",
    description: `
        <p class="about__desc mb-3">
        I'm a <strong style="color: ${color};">creative strategist & developer</strong> passionate about crafting meaningful digital experiences.  
        My journey in tech began with an endless <strong style="color: ${color};">curiosity about how things work</strong> — whether it's software, systems, or the way stories shape our world.
        </p>
        <p class="about__desc mb-3">
            Starting with computer science fundamentals and system architecture,  
            I built a strong foundation in <strong style="color: ${color};">problem-solving and structured thinking</strong>.  
            Along the way, I developed a deep interest in product ideation and front-end development,  
            blending <strong style="color: ${color};">creative storytelling with interactive user experiences</strong>.  
            Recently, I’ve been exploring <strong style="color: ${color};">visual storytelling, user experience, and design strategy</strong>,  
            fascinated by how design and technology shape the way we perceive and interact with the world.
        </p>
        <p class="about__desc mb-3">
            Beyond my work, I find inspiration in films, drawing, philosophy, photography, and ice skating.  
            I love immersing myself in different fields, drawing connections between <strong style="color: ${color};">art, logic, and human experience</strong>.  
            This broad perspective helps me see digital creation not just as a technical skill,  
            but as a way to <strong style="color: ${color};">tell stories, evoke emotions, and create meaningful interactions</strong>.
        </p>
        <p class="about__desc">
            I'm always exploring, experimenting, and refining my craft—excited for the next challenge,  
            the next idea, and the next story to bring to life.
        </p>
        
    `
};

export const SKILLS = {
    heading: "Interested In...",
    items: [
        {
            category: 'Graphics & Visual Computing',
            stack: 'Figma',
        },
        {
            category: 'Front-End Development',
            stack: 'React, React Native, Next.js, TypeScript',
        },
        {
            category: 'System & Software Architecture',
            stack: 'C, JavaScript',
        },
        {
            category: 'Digital Product Design',
            stack: 'C, JavaScript',
        },
    ],
};

// Skills 데이터 정리
export const TOOLS = {
    heading: "TOOLS",
    categories: [
        {
            title: "Programming Languages",
            skills: [
                { name: "C", icon: FaCuttlefish },
                { name: "C++", icon: SiCplusplus},
                { name: "Java", icon: FaJava},
                { name: "TypeScript", icon: SiTypescript},
                { name: "JavaScript", icon: FaJs},
            ],
        },
        {
            title: "Databases",
            skills: [
                { name: "MySQL", icon: SiMysql },
            ],
        },
        {
            title: "Tools",
            skills: [
                { name: "Git CLI", icon: FaGitAlt},
                { name: "Notion", icon: SiNotion},
                { name: "Figma", icon: SiFigma },
                { name: "Slack", icon: FaSlack },
                { name: "zsh", icon: SiZsh },
            ],
        },
    ],
};

export const PROJECTS = {
    heading: "Projects",
    items: [
        {
            title: "Minishell",
            description: "Custom Unix-like shell implementing command parsing, piping, and signal handling.",
            link: "https://github.com/doomangang/minishell",
            image: shell
        },
        {
            title: "MiniRT",
            description: "3D rendering with ray tracing, focusing on spatial transformations and realistic lighting.",
            link: "https://github.com/doomangang/miniRT",
            image: raytracer
        },
        {
            title: "MINDEYE",
            description: "Assisting visually impaired pedestrians using real-time navigation and obstacle detection.",
            link: "https://github.com/doomangang/mindeye_front",
            image: mindeye
        },
    ],
};

export const EDUCATION = {
    heading: "Education",
    items: [
        {
            institution: "Chung-Ang University",
            degree: "Bachelor in Computer Science and Engineering",
            period: "2021 - Present",
        },
        {
            institution: "42 Seoul",
            degree: "Cadet",
            period: "2023 - Present",
        },
    ],
};

export const CONTACT = {
    heading: "Contact",
    email: "sp0943@cau.ac.kr",
    github: "https://github.com/doomangang",
};
