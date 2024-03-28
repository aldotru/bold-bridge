export default {
	/** @type {import('tailwindcss').Config} */
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			primary: "#26035D",
			secondary: {
				300: "#7747FF",
				700: "#6028FF",
			},
			tertiary: "#FFD3B7",
			white: "#FAF7F0",
		},
		fontSize: {
			// 18px
			base: "1.125rem",
			// 12px
			xs: ["0.875rem", "1.4"],
			// 16px
			body: ["1rem", "1.5"],
			h1: ["10rem", {
				lineHeight: "1",
				fontWeight: "700",
			}],
			h2: ["3.75rem", {
				lineHeight: "1.2",
				fontWeight: "500",
			}],
			h3: ["3rem", {
				lineHeight: "1.3",
				fontWeight: "500",
			}],
			h4: ["2rem", {
				lineHeight: "1",
				fontWeight: "500",
			}]
		},
		extend: {},
	},
	plugins: [],
};
