/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: {
					solid: "#cc3333",
					translucent: "RGBA(204, 51, 51, 0.8)"
				},
				light: {
					background: "#edf2f7",
					text: "#000",
					panel: "#fff",
					gray: "#2d3748"
				},
				dark: {
					background: "#222",
					text: "#fff",
					panel: "#444",
					gray: "#ccc"
				}
			}
		}
	},
	plugins: [],
}
