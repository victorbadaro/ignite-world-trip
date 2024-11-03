import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { theme } from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>worldtrip</title>
			</Head>

			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}
