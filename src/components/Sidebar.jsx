"use client";

import React, { useEffect, useState } from 'react';
import { SECTIONS } from '@/constants';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const offsets = SECTIONS.map((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    return { id: section.id, offset: element.getBoundingClientRect().top };
                }
                return null;
            }).filter(Boolean);

            const current = offsets.find((section) => section.offset >= -200 && section.offset < 200);
            if (current) {
                setActiveSection(current.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="fixed flex flex-col space-y-2">
            {SECTIONS.map((section) => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`text-point-blue text-lg hover:text-point ${
                        activeSection === section.id ? "font-gtk italic text-point-jean" : "font-mono light"
                    }`}
                >
                    {section.label}
                </a>
            ))}
        </nav>
    );
};

export default Sidebar;
