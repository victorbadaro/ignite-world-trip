import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '../components/header';
import { makeServer } from '../services/mirage';
import { theme } from '../styles/theme';

import '../styles/slider.css';

makeServer();

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>worldtrip</title>
			</Head>

			<ChakraProvider theme={theme}>
				<Header />
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}
