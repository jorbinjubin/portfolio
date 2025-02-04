/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        fGrey: "#101010",
        dGrey: "#191919",
        mGrey: "#191919",
        lGrey: "#242424",
        gold: "#fcb214",
        dGold: "#ad7703",
      },
    },
  },
  plugins: [],
};
