import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Pastikan jalurnya tepat seperti ini karena tidak menggunakan src
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        horror: {
          black: '#050505',
          darkRed: '#2b0505',
          blood: '#660708',
          brightRed: '#ba181b',
        }
      },
    },
  },
  plugins: [],
};
export default config;