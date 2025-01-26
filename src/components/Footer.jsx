import React from "react";

import { footerText } from "@/constants";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <h2 className="footer__text">
                    <div>Jeong Jihyun</div>
                    <div>@doomangang</div>
                </h2>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="#">.</a>
                        </div>
                        <p className="desc">.</p>
                    </div>
                    <div className="right">
                        <h3>social</h3>
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.desc}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    &copy; 2025 doomangang<br />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
