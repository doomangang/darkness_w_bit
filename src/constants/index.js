// src/constants/index.js
import shell from "@/asset/img/Shell-icon.png"
import raytracer from "@/asset/img/raytracing.png"
import reactnat from "@/asset/vec/react-native-1.svg"

export const SECTIONS = [
    { id: "aboutme", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
];


export const INTRO = {
    title: "Jeong Ji-Hyun,",
    description: 'A developer passionate about creating intuitive applications',
    location: '📍Seoul, South Korea',
};

export const ABOUT_ME = {
    heading: 'About Me',
    description: `
    I specialize in full-stack development, with expertise in creating accessible, efficient, 
    and engaging software solutions. My passion lies in solving real-world problems 
    through technology and design.
  `,
};

export const SKILLS = {
    heading: "I'm Interested In...",
    items: [
        {
            category: 'Graphics',
            stack: 'Ray Tracing, OpenGL',
        },
        {
            category: 'UI/UX Design',
            stack: 'Figma, Adobe XD, Prototyping',
        },
        {
            category: 'Frontend',
            stack: 'React, React Native, Next.js, TypeScript',
        },
        {
            category: 'System Development',
            stack: 'C, JavaScript, Python',
        },
        {
            category: 'Embedded',
            stack: 'C, JavaScript, Python',
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
            image: reactnat
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
