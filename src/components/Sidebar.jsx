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
        <nav className="flex flex-col space-y-4 ml-6">
            {SECTIONS.map((section) => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`text-point-blue hover:text-point ${
                        activeSection === section.id ? "font-jeanluc text-point" : ""
                    }`}
                >
                    {section.label}
                </a>
            ))}
        </nav>
    );
};

export default Sidebar;
