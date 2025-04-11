import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin'


const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./componentes/**/*.{js,ts,jsx,tsx}", // corrige 'componentes' se for 'components'
    "./pages/**/*.{js,ts,jsx,tsx}",
    
    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter'],
        serif: ["var(--font-serif)", "serif"],
      },
    },
  },
  plugins: [flowbitePlugin],
};

export default config;
