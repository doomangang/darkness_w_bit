import React from 'react';
import Sidebar from './Sidebar';
import HeroSection from './HeroSection';
import ContactInfo from './Contact';

const MainLayout = ({ children }) => {
    return (
        <div>
            {/* 왼쪽 고정 칼럼 (lg 이상에서만 보이도록 설정) */}
            <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-1/3 flex-col">
                <div className="pt-10 pb-3">
                    {/* Hero Section (lg 이상에서만 표시) */}
                    <div className="hidden lg:block">
                        <HeroSection />
                    </div>
                </div>
                <div className="flex-grow p-6 overflow-auto">
                    {/* Sidebar */}
                    <Sidebar />
                </div>
                <div className="pb-5">
                    {/* Contact Info (lg 이상에서만 표시) */}
                    <div className="hidden lg:block">
                        <ContactInfo />
                    </div>
                </div>
            </aside>

            {/* 오른쪽 메인 영역 (lg에서 왼쪽 칼럼이 보이면 margin-left 적용) */}
            <main className="ml-0 lg:ml-[33%] w-full lg:w-[67%] p-10">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
