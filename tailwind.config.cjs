/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				// Bounces 5 times 1s equals 5 seconds
				'pulse-once': 'pulse .3s ease-in-out 1'
			}
		}
	},
	plugins: []
};
