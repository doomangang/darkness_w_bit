"use client";

import React, { useState, useEffect } from "react";

const BackgroundEffect = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="fixed inset-0 -z-10"
            style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(252, 231, 182, 0.5), transparent 50%)`,
                transition: "background 0.1s ease-out",
            }}
        ></div>
    );
};

export default BackgroundEffect;
