/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Add this entire block for custom animations
      keyframes: {
        // Animation for the sidebar sliding in from the left
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        // Animation for the main content fading in
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        // Binds the keyframes to a utility class name
        "slide-in-left": "slideInFromLeft 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
