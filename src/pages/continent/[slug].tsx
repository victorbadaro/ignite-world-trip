import { Box, Flex, Heading, Image, SimpleGrid, Text, Tooltip } from '@chakra-ui/react';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { FiInfo } from 'react-icons/fi';
import { CityListItem } from '../../components/city-list-item';
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
		<Box as="main" pb="35px">
			<Box position="relative" mx="auto" maxW="1440px" h="500px">
				<Image w="100%" h="100%" objectFit="cover" src={continent.imageUrl} alt={continent.name} />

				<Box position="absolute" top="0" left="0" px="140px" py="59px" w="100%" h="100%" bgColor="rgb(28, 20, 1, 0.35)">
					<Flex h="100%" align="flex-end">
						<Heading fontSize="5xl" fontWeight="semibold" color="gray.100">
							{continent.name}
						</Heading>
					</Flex>
				</Box>
			</Box>

			<Box mx="auto" mt="20" maxW="1160px">
				<Flex align="center" justify="space-between" columnGap="70px">
					<Text fontSize="2xl" textAlign="justify">
						{continent.about}
					</Text>
					<Flex align="center" justify="space-between" columnGap="42px">
						<Text textAlign="center" fontSize="2xl" fontWeight="semibold">
							<Text as="span" fontSize="5xl" color="yellow.500">
								{continent.countriesCount}
							</Text>
							<br />
							países
						</Text>
						<Text textAlign="center" fontSize="2xl" fontWeight="semibold">
							<Text as="span" fontSize="5xl" color="yellow.500">
								{continent.languagesCount}
							</Text>
							<br />
							línguas
						</Text>
						<Flex align="flex-end" justify="space-between" columnGap="5px" minW="fit-content">
							<Text textAlign="center" fontSize="2xl" fontWeight="semibold">
								<Text as="span" fontSize="5xl" color="yellow.500">
									{continent.mostVisitedCities.length}
								</Text>
								<br />
								cidades +100
							</Text>
							<Box pb="2.5">
								<Tooltip hasArrow label="cidades mais visitadas do mundo" bgColor="gray.800" color="gray.100">
									<Box cursor="pointer" color="gray.700" opacity={0.5}>
										<FiInfo size={16} />
									</Box>
								</Tooltip>
							</Box>
						</Flex>
					</Flex>
				</Flex>

				<Box mt="20">
					<Heading fontSize="4xl" fontWeight="medium">
						Cidades +100
					</Heading>
					<SimpleGrid mt="10" columnGap="45px" rowGap="12" minChildWidth="256px">
						{continent.mostVisitedCities.map((city) => (
							<CityListItem
								key={city.name}
								cityName={city.name}
								cityImageUrl={city.imageUrl}
								countryName={city.country.name}
								countryFlagImageUrl={city.country.flagUrl}
							/>
						))}
					</SimpleGrid>
				</Box>
			</Box>
		</Box>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
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
