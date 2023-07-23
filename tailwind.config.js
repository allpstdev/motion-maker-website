/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                euclid: ['var(--font-euclid)'],
                inter: ['var(--font-inter)']
            },
            backgroundImage: {
                'bg-pattern': "url('/img/bg-pattern.svg')"
            }
        },
        letterSpacing: {
            default: '0.125em',
            widest: '0.1em'
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            }
        }
    },
    plugins: []
}
