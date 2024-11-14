import { Box, Heading } from '@chakra-ui/react';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { CitiesList } from '../../components/cities-list';
import { ContinentAbout } from '../../components/continent/continent-about';
import { ContinentBanner } from '../../components/continent/continent-banner';
import { api } from '../../services/api';

type City = {
	name: string;
	imageUrl: string;
	country: {
		name: string;
		flagUrl: string;
	};
};

type Continent = {
	id: string;
	name: string;
	about: string;
	countriesCount: number;
	languagesCount: number;
	imageUrl: string;
	mostVisitedCities: City[];
};

export default function Continent({ continent }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Box as="main" pb={['4', '35px']}>
			<ContinentBanner text={continent.name} imageUrl={continent.imageUrl} />

			<Box mx="auto" mt={['6', '20']} px={['4', '0']} maxW="1160px">
				<ContinentAbout
					about={continent.about}
					countriesCount={continent.countriesCount}
					languagesCount={continent.languagesCount}
					mostVisitedCitiesCount={continent.mostVisitedCities.length}
				/>

				<Box mt={['8', '20']}>
					<Heading fontSize={['2xl', '4xl']} fontWeight="medium">
						Cidades +100
					</Heading>
					<CitiesList cities={continent.mostVisitedCities} />
				</Box>
			</Box>
		</Box>
	);
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
	const response = await api.get<Continent[]>('/continents');
	const continents = response.data;

	const staticPaths = continents.map((continent) => ({
		params: {
			slug: continent.id
		}
	}));

	return {
		paths: staticPaths,
		fallback: 'blocking'
	};
};

export const getStaticProps: GetStaticProps<{ continent: Continent }> = async (context) => {
	const { slug } = context.params;
	const response = await api.get<Continent>(`/continents/${slug}`);
	const continent = response.data;

	return {
		props: {
			continent
		}
	};
};
