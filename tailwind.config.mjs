export default {
	/** @type {import('tailwindcss').Config} */
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			"primary": "#26035D",
			"secondary": {
				300: "#7747FF",
				700: "#6028FF",
			},
			"tertiary": "#FFD3B7",
			white: "#FAF7F0",
		},
		extend: {},
	},
	plugins: [],
};
