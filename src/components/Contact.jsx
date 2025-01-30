import React from 'react';
import {BiMailSend} from "react-icons/bi";
import {BiLogoGithub} from "react-icons/bi";

const Contact = () => {
    return (
        <div className="">
            <h2 className="text-xl mb-1 font-gtk text-point-blue">Contact</h2>
            <p  className="text-sm text-point-sage font-mono mb-0.5">
                📧 <a href="mailto:sp0943@cau.ac.kr" className="no-underline hover:underline decoration-wavy">sp0943@cau.ac.kr</a>
            </p>
            <p className="">
                <BiLogoGithub/> <a href="https://github.com/doomangang"
                             className="text-sm text-point-sage font-mono no-underline hover:underline decoration-wavy">github.com/doomangang</a>
            </p>
        </div>
    );
};

export default Contact;
