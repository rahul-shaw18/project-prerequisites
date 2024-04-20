/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
      },
    },
    fontSize: {
      sm: ["var(--fnt-small)", "var(--fnt-small-line-height)"],
      base: ["var(--fnt-base)", "var(--fnt-base-line-height)"],
      lg: ["var(--fnt-large)", "var(--fnt-large-line-height)"],
      xl:['var(--fnt-logo)']
    },
  },
  plugins: [require("daisyui")],
};
