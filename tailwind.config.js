/** @type {import('tailwindcss').Config} */
import tailwindcssRadixColors from "tailwindcss-radix-colors";


export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssRadixColors],
}

