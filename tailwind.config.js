/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          warm: '#faf9f6',
          ivory: '#f5f3ef',
          muted: '#ede9e3',
          sand: '#e5dfd5',
          card: '#ffffff',
        },
        brand: {
          50: '#f0f6fe',
          100: '#ddecfc',
          200: '#c3ddfb',
          300: '#9ac5f8',
          400: '#6aa3f3',
          500: '#3f7eec',
          600: '#2762e0',
          700: '#1e4ccb',
          800: '#1d3fa5',
          900: '#0a192f',
          950: '#071120',
        },
        navy: {
          light: '#1e293b',
          DEFAULT: '#0f172a',
          dark: '#0a1122',
        },
        'navy-DEFAULT': '#0f172a',
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'premium': '0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 0 1px 1px rgba(15, 23, 42, 0.06)',
        'hover': '0 25px 50px -12px rgba(15, 23, 42, 0.14), 0 0 1px 1px rgba(15, 23, 42, 0.08)',
      }
    },
  },
  plugins: [],
}
