/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Stack Sans Headline
        stackSans: ["'Stack Sans Headline'", "sans-serif"],

        // Google Sans Flex
        googleSans: ["'Google Sans Flex'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
