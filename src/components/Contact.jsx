import React from 'react';
import { AiFillMail, AiFillGithub } from "react-icons/ai";

const Contact = ({ sidebarMode = false }) => {
    return (
        <div className="text-point-jean">
            <h2 className="text-xl mb-3 bp:mb-1.5 font-gtk ">Contact</h2>

            {/* 이메일 */}
            <div className="flex items-center gap-2">
                <a href="mailto:sp0943@cau.ac.kr"
                   className="flex items-center gap-1 text-sm text-point-lilac font-mono no-underline hover:underline decoration-wavy">
                    <AiFillMail className="text-xl text-point-blue" />
                    {!sidebarMode && "sp0943@cau.ac.kr"}
                </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-2 mt-1">
                <a href="https://github.com/doomangang"
                   className="flex items-center gap-1 text-sm text-point-lilac font-mono no-underline hover:underline decoration-wavy">
                    <AiFillGithub className="text-xl  text-point-blue" />
                    {!sidebarMode && "github.com/doomangang"}
                </a>
            </div>
        </div>
    );
};

export default Contact;
