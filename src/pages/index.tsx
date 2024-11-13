import { Box, Center, Divider, Flex, Heading, Image, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import { Slider } from '../components/slider';
import { api } from '../services/api';

type Continent = {
	id: string;
	name: string;
	description: string;
	imageUrl: string;
};

export default function Home({ continents }: InferGetStaticPropsType<typeof getStaticProps>) {
	const isLargeScreenSize = useBreakpointValue({
		base: false,
		lg: true
	});

	return (
		<Box pb={['6', '10']}>
			{isLargeScreenSize ? (
				<Flex align="flex-end" mx="auto" maxW="1440px" h="335px" bgImage="/images/Background.png" bgRepeat="no-repeat" bgColor="yellow.500">
					<Flex flex="1" align="flex-start" justify="space-between" mx="auto" mb="-33px" maxW="1160px">
						<VStack spacing="5" align="flex-start" mt="27px" maxW="524px">
							<Heading fontWeight="medium" color="gray.100">
								6 Continentes,
								<br />
								infinitas possibilidades.
							</Heading>
							<Text fontSize="xl" color="gray.200">
								Chegou a hora de tirar do papel a viagem que você sempre sonhou.
							</Text>
						</VStack>

						<Box>
							<Image src="/images/Airplane.svg" alt="Airplane" />
						</Box>
					</Flex>
				</Flex>
			) : (
				<Flex align="center" mx="auto" px="4" maxW="1440px" h="163px" bgImage="/images/Background.png" bgRepeat="no-repeat" bgColor="yellow.500">
					<VStack spacing={['2', '5']} align="flex-start">
						<Heading fontSize="xl" fontWeight="medium" color="gray.100">
							6 Continentes,
							<br />
							infinitas possibilidades.
						</Heading>
						<Text fontSize="sm" fontWeight="normal" color="gray.200">
							Chegou a hora de tirar do papel a viagem que você sempre sonhou.
						</Text>
					</VStack>
				</Flex>
			)}

			<Box mx="auto" mt={['9', '114px']} mb={['5', '52px']} px={['39px', '0']} maxW="1160px">
				{isLargeScreenSize ? (
					<Flex align="center" justify="space-between">
						<Flex flexDir="column" align="center" gap="6">
							<Image src="/images/cocktail.svg" alt="Cocktail" />
							<Text fontWeight="semibold" fontSize="2xl">
								vida noturna
							</Text>
						</Flex>
						<Flex flexDir="column" align="center" gap="6">
							<Image src="/images/surf.svg" alt="Cocktail" />
							<Text fontWeight="semibold" fontSize="2xl">
								praia
							</Text>
						</Flex>
						<Flex flexDir="column" align="center" gap="6">
							<Image src="/images/building.svg" alt="Cocktail" />
							<Text fontWeight="semibold" fontSize="2xl">
								moderno
							</Text>
						</Flex>
						<Flex flexDir="column" align="center" gap="6">
							<Image src="/images/museum.svg" alt="Cocktail" />
							<Text fontWeight="semibold" fontSize="2xl">
								clássico
							</Text>
						</Flex>
					</Flex>
				) : (
					<Box w="275px" mx="auto">
						<Flex align="center" justify="space-between">
							<Flex align="center" justify="center" columnGap="2">
								<Box w="2" h="2" borderRadius="full" bgColor="yellow.500" />
								<Text fontWeight="medium" fontSize="lg">
									vida noturna
								</Text>
							</Flex>
							<Flex align="center" justify="center" columnGap="2">
								<Box w="2" h="2" borderRadius="full" bgColor="yellow.500" />
								<Text fontWeight="medium" fontSize="lg">
									praia
								</Text>
							</Flex>
						</Flex>

						<Flex align="center" justify="space-between">
							<Flex align="center" justify="center" columnGap="2">
								<Box w="2" h="2" borderRadius="full" bgColor="yellow.500" />
								<Text fontWeight="medium" fontSize="lg">
									moderno
								</Text>
							</Flex>
							<Flex align="center" justify="center" columnGap="2">
								<Box w="2" h="2" borderRadius="full" bgColor="yellow.500" />
								<Text fontWeight="medium" fontSize="lg">
									clássico
								</Text>
							</Flex>
						</Flex>

						<Flex align="center" justify="center" columnGap="2" mt="6">
							<Box w="2" h="2" borderRadius="full" bgColor="yellow.500" />
							<Text fontWeight="medium" fontSize="lg">
								e mais...
							</Text>
						</Flex>
					</Box>
				)}

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
							<Link href={`/continent/${continent.id}`}>
								<a>
									<Image w="100%" h="100%" objectFit="cover" src={continent.imageUrl} alt={continent.name} />
									<Flex position="absolute" top="0" left="0" w="100%" h="100%" align="center" justify="center" bgColor="rgb(28, 20, 1, 0.35)">
										<VStack spacing="4">
											<Heading fontSize="5xl" fontWeight="bold" color="gray.100">
												{continent.name}
											</Heading>
											<Text fontSize="2xl" fontWeight="bold" color="gray.200">
												{continent.description}
											</Text>
										</VStack>
									</Flex>
								</a>
							</Link>
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
