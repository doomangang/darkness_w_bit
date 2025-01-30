import React from 'react';
import Sidebar from './Sidebar';
import HeroSection from './HeroSection';
import ContactInfo from './Contact';

const MainLayout = ({ children }) => {
    return (
        <div>
            {/* 왼쪽 고정 칼럼 (lg 이상에서만 보이도록 설정) */}
            <aside className="hidden bp:flex px-7 fixed top-0 left-0 h-screen w-1/3 flex-col">
                <div className="p-10">
                    {/* Hero Section (lg 이상에서만 표시) */}
                    <div className="hidden bp:block bp:mt-5">
                        <HeroSection />
                    </div>
                </div>
                <div className="hidden bp:flex p-10 flex-grow w-full overflow-auto">
                    {/* Sidebar */}
                    <Sidebar />
                </div>
            </aside>

            {/* 오른쪽 메인 영역 (lg에서 왼쪽 칼럼이 보이면 margin-left 적용) */}
            <main className="p-10 bp:ml-[33%] w-full bp:w-[67%]">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
