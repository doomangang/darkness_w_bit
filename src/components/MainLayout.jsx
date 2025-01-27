import React from 'react';
import Sidebar from './Sidebar';
import HeroSection from './HeroSection';
import ContactInfo from './Contact';

const MainLayout = ({ children }) => {
    return (
        <div>
            {/* 왼쪽 고정 칼럼 */}
            <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-1/3  flex-col">
                <div className="p-20">
                    {/* Hero Section */}
                    <HeroSection />
                </div>
                <div className="flex-grow p-6 overflow-auto">
                    {/* Sidebar */}
                    <Sidebar />
                </div>
                <div className="p-6">
                    {/* Contact Info */}
                    <ContactInfo />
                </div>
            </aside>

            {/* 오른쪽 메인 영역 */}
            {/* margin-left를 Tailwind에서 지원하는 방식으로 처리하거나, 직접 px/%로 명시 */}
            <main className="ml-0 lg:ml-[33%] w-full lg:w-[67%] p-6">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
