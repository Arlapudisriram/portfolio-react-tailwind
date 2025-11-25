/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        poppins: ["Poppins", "ui-sans-serif", "system-ui"],
      },
     colors: {
      background: "rgb(var(--background))",
      foreground: "rgb(var(--foreground))",
      primary: "rgb(var(--primary))",
      "primary-foreground": "rgb(var(--primary-foreground))",
      border: "rgb(var(--border))",
      muted: "rgb(var(--muted))",
      "muted-foreground": "rgb(var(--muted-foreground))",
    
      subtle: {
        foreground: "rgb(var(--subtle-foreground) / <alpha-value>)",
      },
      accent: {
        foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
      },
      },

    },
  },
  plugins: [],
}

