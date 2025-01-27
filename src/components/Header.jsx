import React from 'react';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                <h1 className="text-2xl font-jeanluc">Jeong Ji-Hyun</h1>
                <ul className="flex space-x-6">
                    <li><a href="#aboutme" className="hover:text-blue-500">About</a></li>
                    <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
                    <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                    <li><a href="#education" className="hover:text-blue-500">Education</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
