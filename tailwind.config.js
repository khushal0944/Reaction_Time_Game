/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
	theme: {
		extend: {
			maxWidth: {
				"xs": "320px",
			},
            screens:{
                "xs": "320px"
            }
        },
	},
	plugins: [],
};
