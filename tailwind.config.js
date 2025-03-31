/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', './public/**/*.html'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			serif: ['Cormorant Garamond', 'serif'],
			// mono: ['interstate-mono', 'monospace'],
			mono: ['Source Code Pro', 'monospace'],
			body: ['Prompt', 'IBM Plex Sans', 'sans-serif'],
			redac: ['Redaction Regular', 'serif'],
			// pixel: ['var(--font-timmy)', 'Timmy', 'serif'],
			// header: ['var(--font-micro)', 'Micro', 'sans-serif'],
			header: ['Micro', 'sans-serif'],
		},
		extend: {
			colors: {
				black: '#000',
				white: '#fff',
				gray: {
					1: '#111111',
					2: '#222222',
					3: '#171717',
				},
				murkyblack: '#0a100d',
				murkyvoid: 'rgb(3, 13, 8)',
				deepsea: '#132217',
				aqua: '#335b54',
				kelp: '#657c60',
				grass: '#b0ae70',
				foam: '#ffe7bc',
				mint: '#2d8e7c',
				yellow: '#FFe987',
				ochre: '#f8ba1d',
			},
		},
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
