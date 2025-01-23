import "@fonts/JeanLuc-Webfonts/stylesheet.css"
import "./globals.css";
import "@/assets/style.scss"

export const metadata = {
  title: "portfolio of Jeong Ji-hyun",
  description: "Voyage(s) en Utopie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel={"icon"} href={"/favicon.ico"} />
      <body>
        {children}
      </body>
    </html>
  );
}
