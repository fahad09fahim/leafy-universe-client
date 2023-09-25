/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        leafyTheme: {
        
"primary": "#5ccc4d",
        
"secondary": "#a3e635",
        
"accent": "#a7dd6c",
        
"neutral": "#4b5563",
        
"base-100": "#f3f4f6",
        
"info": "#fde047",
        
"success": "#219c8d",
        
"warning": "#fbbf24",
        
"error": "#e44972",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}