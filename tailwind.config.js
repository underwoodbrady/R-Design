/** @type {import('tailwindcss').Config} */
import tailwindcssRadixColors from 'tailwindcss-radix-colors';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#FFF',
			primary: {
				1: '#FCFEFD',
				2: '#F5FAF9',
				3: '#E8F5F1',
				4: '#DAEFE8',
				5: '#CAE6DD',
				6: '#B6DACF',
				7: '#9BC9BC',
				8: '#75B4A2',
				9: '#448877',
				10: '#277D6A',
				11: '#357A69',
				12: '#253933'
			},
			accent: {
				1: '#FBFDFF',
				2: '#F5F9FE',
				3: '#E9F3FE',
				4: '#DBECFF',
				5: '#CBE3FC',
				6: '#B7D6F6',
				7: '#9EC5ED',
				8: '#79ADE4',
				9: '#6BA5E0',
				10: '#6099D3',
				11: '#3C75AD',
				12: '#143759'
			},
			black: {
				DEFAULT: '#000',
				1: '#FCFCFD',
				2: '#F8F9FA',
				3: '#EFF0F2',
				4: '#E7E8EA',
				5: '#E0E1E4',
				6: '#D8D9DD',
				7: '#CDCED3',
				8: '#B9BBC2',
				9: '#8B8D94',
				10: '#818389',
				11: '#626469',
				12: '#1F2023'
			}
		},
		extend: {
			spacing: {
				'xs': '4px',
				'sm': '8px',
				'md': '16px',
				'lg': '24px',
				'xl': '36px',
				'2xl': '48px',
				'3xl': '64px',
				'4xl': '128px'
			}
		},
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1064px',
			// => @media (min-width: 1024px) { ... }

			xl: '1320px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
		}
	},
	plugins: [tailwindcssRadixColors]
};
