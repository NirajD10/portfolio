/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "dark-primary": "#111111",
        "dark-alternative": "#161616",
        "dark-secondary": "#7149C6",
      },
      borderColor: {
        "purple-primary": "#7149C6",
      },
      colors: {
        primary: "#F9FAFC",
        "dark-purple": "#7149C6",
      },
      fontFamily: {
        dm_sans: ["var(--font-dm-sans)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
