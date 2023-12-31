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
    },
    screens: {
      lg: { max: "1700px" },
      xm: { max: "1300px" },
      md: { max: "990px" },
      sm: { max: "640px" },
      xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    },
  },
  plugins: [],
};
