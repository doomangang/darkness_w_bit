import React from "react";

import {headerNav} from "@/constants";

const Header = () => {
    const [show, setShow] = React.useState(false);
    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <header id="header" role="heading">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">portfolio<em>next.js</em></a>
                </div>
                <nav className="header__nav" role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className="header__nav__mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded="false"
                    role="button" tabIndex="0"
                >
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header;
