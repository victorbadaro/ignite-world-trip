import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		yellow: {
			500: '#FFBA08'
		},
		gray: {
			100: '#F5F8FA', // Light/Headings and Text
			200: '#DADADA', // Light/Info
			700: '#999999', // Dark/Info
			800: '#47585B' // Dark/Headings and Text
		}
	},
	fonts: {
		heading: 'Poppins',
		body: 'Poppins'
	},
	styles: {
		global: {
			body: {
				bg: 'gray.100',
				color: 'gray.800'
			}
		}
	}
});
