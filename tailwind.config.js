/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    "bottom-full",
    "left-1/2",
    "-translate-x-1/2",
    "group-hover:block"
  ],
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "autumn","emerald","winter", "synthwave"]
  }
}