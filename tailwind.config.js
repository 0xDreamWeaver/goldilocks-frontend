/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', './public/**/*.html'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			serif: ['Garamond', 'serif'],
			body: ['Inter', 'sans-serif'],
		},
		extend: {},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			square: 'square',
			roman: 'upper-roman',
		},
	},
	plugins: [],
}
