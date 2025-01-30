/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "bp": "940px",
      },
      colors: {
        base: {
          light: "#eff5fd", // 배경색 (off white)
          dark: "#302c13", // 텍스트 및 아이콘
          khaki: "#797030",
          tree: "#A68D76"
        },
        point: {
          gray: "#222222",
          blue: "#6ba6ef",
          jean: "#303979", // 포인트 색상 (dark jean)
          tblue: "#4785d1",
          yellow: "#FCE7B6",
          lilac: "#ba7eb5",
          sage: "#77a676",
          sub: "#a6addc",
        }
      },
      fontFamily: {
        jeanluc: ["jeanlucweb-bold", "sans"], // CSS 파일의 font-family 이름 등록
        gtk: ["Host Grotesk", "sans-serif"],
        mono: ["Atlas Typewriter", "monospace"],
      }
    },
  },
  plugins: [],
};
