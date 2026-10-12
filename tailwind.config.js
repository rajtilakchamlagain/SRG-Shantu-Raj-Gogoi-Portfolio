/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        surface: {
          base: '#0c0f17',       // deep rich obsidian slate (not pure black)
          card: '#131826',       // primary card surface with warm undertone
          elevated: '#182032',   // hovered / elevated card
          muted: '#1f2940',      // secondary pill / input backings
          border: '#232d46',     // precise, refined 1px border
          hoverBorder: '#3b82f6',// focus / active border
        },
        accent: {
          blue: '#3b82f6',
          sky: '#38bdf8',
          emerald: '#10b981',
          amber: '#f59e0b',
        }
      },
      boxShadow: {
        'designer-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)',
        'designer-md': '0 4px 16px -2px rgba(0, 0, 0, 0.5), 0 2px 6px -2px rgba(0, 0, 0, 0.4)',
        'designer-lg': '0 20px 40px -8px rgba(0, 0, 0, 0.6), 0 8px 16px -4px rgba(0, 0, 0, 0.4)',
        'designer-glow': '0 0 0 1px rgba(59, 130, 246, 0.2), 0 10px 30px -10px rgba(59, 130, 246, 0.25)',
      }
    },
  },
  plugins: [],
}
