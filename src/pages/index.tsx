import { Box, Center, Divider, Text } from '@chakra-ui/react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { SwiperSlide } from 'swiper/react';
import { FeaturedAttributes } from '../components/featured-attributes';
import { MainBanner } from '../components/main-banner';
import { Slider } from '../components/slider';
import { SlideContent } from '../components/slider/slide-content';
import { api } from '../services/api';

type Continent = {
	id: string;
	name: string;
	description: string;
	imageUrl: string;
};

export default function Home({ continents }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Box pb={['6', '10']}>
			<MainBanner />

			<Box mx="auto" mt={['9', '114px']} mb={['5', '52px']} px={['39px', '0']} maxW="1160px">
				<FeaturedAttributes />

				<Center mt={['9', '20']}>
					<Box w={['60px', '90px']}>
						<Divider borderWidth="1px" borderColor="gray.800" />
					</Box>
				</Center>

				<Text mt={['6', '52px']} fontWeight="medium" fontSize={['xl', '4xl']} textAlign="center">
					Vamos nessa?
					<br />
					Então escolha seu continente
				</Text>
			</Box>

			<Box mx="auto" maxW="1240px" h={['250px', '450px']}>
				<Slider loop={continents.length > 0}>
					{continents.map((continent) => (
						<SwiperSlide key={continent.id}>
							<SlideContent linkUrl={`/continent/${continent.id}`} imageUrl={continent.imageUrl} title={continent.name} subtitle={continent.description} />
						</SwiperSlide>
					))}
				</Slider>
			</Box>
		</Box>
	);
}

export const getStaticProps: GetStaticProps<{ continents: Continent[] }> = async () => {
	const response = await api.get<Continent[]>('/continents');
	const continents = response.data;

	return {
		props: {
			continents
		}
	};
};
