/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0c",
                primary: "#6366f1",
                secondary: "#a855f7",
                accent: "#ec4899",
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'gradient-x': 'gradient-x 15s ease infinite',
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'subtle-zoom': 'subtle-zoom 20s infinite alternate',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
                    '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
                },
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'subtle-zoom': {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.1)' },
                },
            },
        },
    },
    plugins: [],
}
