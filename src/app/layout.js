import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundEffect from "@/components/background";

export const metadata = {
    title: "Jeong Ji-Hyun's Portfolio",
    description: 'A developer portfolio built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-base-light flex flex-col">
        <BackgroundEffect/>
        <main className="flex-grow">{children}</main>
        </body>
        </html>
    );
}
