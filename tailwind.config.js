/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"   // ← this is the important line for JavaScript projects
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}