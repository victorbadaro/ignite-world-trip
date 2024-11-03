import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		highlight: {
			500: '#FFBA08'
		}
	},
	styles: {
		global: {
			body: {
				bg: 'highlight.500'
			}
		}
	}
});
