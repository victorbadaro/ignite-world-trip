import {
	Box,
	Flex,
	Heading,
	Image,
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
	SimpleGrid,
	Text,
	Tooltip,
	useBreakpointValue,
	useDisclosure
} from '@chakra-ui/react';
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
	const { isOpen, onOpen, onClose } = useDisclosure();
	const isLargeScreenSize = useBreakpointValue({
		base: false,
		lg: true
	});

	return (
		<Box as="main" pb={['4', '35px']}>
			<Box position="relative" mx="auto" maxW="1440px" h={['150px', '500px']}>
				<Image w="100%" h="100%" objectFit="cover" src={continent.imageUrl} alt={continent.name} />

				{isLargeScreenSize ? (
					<Box position="absolute" top="0" left="0" px="140px" py="59px" w="100%" h="100%" bgColor="rgb(28, 20, 1, 0.35)">
						<Flex h="100%" align="flex-end">
							<Heading fontSize="5xl" fontWeight="semibold" color="gray.100">
								{continent.name}
							</Heading>
						</Flex>
					</Box>
				) : (
					<Flex position="absolute" top="0" left="0" w="100%" h="100%" align="center" justify="center" bgColor="rgb(28, 20, 1, 0.35)">
						<Heading fontSize="28px" fontWeight="semibold" color="gray.100">
							{continent.name}
						</Heading>
					</Flex>
				)}
			</Box>

			<Box mx="auto" mt={['6', '20']} px={['4', '0']} maxW="1160px">
				<Flex flexDir={['column', 'row']} align="center" justify="space-between" columnGap={['0', '70px']} rowGap={['4', '0']}>
					<Text fontSize={['sm', '2xl']} textAlign="justify">
						{continent.about}
					</Text>
					<Flex alignSelf={['stretch', 'auto']} align="center" justify="space-between" columnGap={['0', '42px']}>
						<Text textAlign={['start', 'center']} fontSize={['lg', '2xl']} fontWeight={['normal', 'semibold']}>
							<Text as="span" fontSize={['2xl', '5xl']} fontWeight="semibold" color="yellow.500">
								{continent.countriesCount}
							</Text>
							<br />
							países
						</Text>
						<Text textAlign={['start', 'center']} fontSize={['lg', '2xl']} fontWeight={['normal', 'semibold']}>
							<Text as="span" fontSize={['2xl', '5xl']} fontWeight="semibold" color="yellow.500">
								{continent.languagesCount}
							</Text>
							<br />
							línguas
						</Text>
						<Flex align="flex-end" justify="space-between" columnGap="5px" minW="fit-content">
							<Text textAlign={['start', 'center']} fontSize={['lg', '2xl']} fontWeight={['normal', 'semibold']}>
								<Text as="span" fontSize={['2xl', '5xl']} fontWeight="semibold" color="yellow.500">
									{continent.mostVisitedCities.length}
								</Text>
								<br />
								cidades +100
							</Text>
							<Box pb="2.5">
								{isLargeScreenSize ? (
									<Tooltip hasArrow label="cidades mais visitadas do mundo" bgColor="gray.800" color="gray.100">
										<Box cursor="pointer" color="gray.700" opacity={0.5}>
											<FiInfo size={16} />
										</Box>
									</Tooltip>
								) : (
									<>
										<Box cursor="pointer" color="gray.700" opacity={0.5} onClick={onOpen}>
											<FiInfo size={10} />
										</Box>
										<Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered motionPreset="scale">
											<ModalOverlay />
											<ModalContent bgColor="gray.800" color="gray.100">
												<ModalBody>
													<Text>cidades mais visitadas do mundo</Text>
												</ModalBody>
											</ModalContent>
										</Modal>
									</>
								)}
							</Box>
						</Flex>
					</Flex>
				</Flex>

				<Box mt={['8', '20']}>
					<Heading fontSize={['2xl', '4xl']} fontWeight="medium">
						Cidades +100
					</Heading>
					<SimpleGrid mt={['5', '10']} columnGap={['0', '45px']} rowGap={['5', '12']} minChildWidth="256px" justifyItems="center">
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
