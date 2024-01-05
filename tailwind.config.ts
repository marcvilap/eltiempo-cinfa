import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	experimental: { optimizeUniversalDefaults: true },
	future: { disableColorOpacityUtilitiesByDefault: true },
	theme: {
		screens: { sm: '28rem', md: '48rem', lg: '64rem', xl: '80rem' },
		container: { center: true, padding: { DEFAULT: '1rem', md: '2rem', xl: '5rem' } },
		extend: {
			transitionDuration: { DEFAULT: '300ms' },
			fontFamily: { sans: "'Buenos Aires', sans-serif" },
		},
	},
} satisfies Config
