/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,vue}"],

	theme: {
		extend: {
			fontFamily: {
				westgate: ["westgate", "sans-serif"],
				danhDa: ["danhDa", "sans-serif"],
				beVnPro: ["Be Vietnam Pro", "sans-serif"],
			},
			colors: {
				myRed: {
					400: "#AE1D20",
					600: "#6A1113",
				},
				myYellow: {
					400: "#C58A18",
					300: "#E2C385",
				},
			},
		},
	},
	plugins: [],
};
