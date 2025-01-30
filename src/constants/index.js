// src/constants/index.js
import shell from "@/asset/img/Shell-icon.png"
import raytracer from "@/asset/img/raytracing.png"
import reactnat from "@/asset/vec/react-native-1.svg"

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
    description: 'Building Digital Experiences with Code & Design',
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
            stack: 'OpenGL',
        },
        {
            category: 'UI/UX Design',
            stack: 'Figma',
        },
        {
            category: 'Frontend',
            stack: 'React, React Native, Next.js, TypeScript',
        },
        {
            category: 'System Development',
            stack: 'C, JavaScript',
        },
        {
            category: 'Embedded',
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
            title: "IDEs",
            skills: [
                { name: "VS Code", icon: BiLogoVisualStudio},
                { name: "Terminal", icon: TbTerminal2},
                { name: "IntelliJ IDEA", icon: SiIntellijidea },
                { name: "CLion", icon: SiClion},
                { name: "Xcode", icon: SiXcode},
                { name: "Cursor", icon: MdDeveloperMode }, // 대체 아이콘
                { name: "Eclipse", icon: SiEclipseide },
                { name: "Vim", icon: SiVim },
                { name: "Linux", icon: FaLinux },
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
                { name: "LLDB", icon: BiChip }, // 디버깅 관련 대체 아이콘
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
