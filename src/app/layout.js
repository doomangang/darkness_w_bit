import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
    title: "Jeong Ji-Hyun's Portfolio",
    description: 'A developer portfolio built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="min-h-screen flex flex-col">
        <main className="flex-grow">{children}</main>
        </body>
        </html>
    );
}
