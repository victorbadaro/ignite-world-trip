import { Box, Flex, Heading, Image, SimpleGrid, Text, Tooltip } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { CityListItem } from '../components/city-list-item';

export default function Continent() {
	return (
		<Box as="main" pb="35px">
			<Box position="relative" mx="auto" maxW="1440px" h="500px">
				<Image
					w="100%"
					h="100%"
					objectFit="cover"
					src="https://images.unsplash.com/photo-1490642914619-7955a3fd483c?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Europa"
				/>

				<Box position="absolute" top="0" left="0" px="140px" py="59px" w="100%" h="100%" bgColor="rgb(28, 20, 1, 0.35)">
					<Flex h="100%" align="flex-end">
						<Heading fontSize="5xl" fontWeight="semibold" color="gray.100">
							Europa
						</Heading>
					</Flex>
				</Box>
			</Box>

			<Box mx="auto" mt="20" maxW="1160px">
				<Flex align="center" justify="space-between" columnGap="70px">
					<Text fontSize="2xl" textAlign="justify">
						A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a
						leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
					</Text>
					<Flex align="center" justify="space-between" columnGap="42px">
						<Text textAlign="center" fontSize="2xl" fontWeight="semibold">
							<Text as="span" fontSize="5xl" color="yellow.500">
								50
							</Text>
							<br />
							países
						</Text>
						<Text textAlign="center" fontSize="2xl" fontWeight="semibold">
							<Text as="span" fontSize="5xl" color="yellow.500">
								60
							</Text>
							<br />
							línguas
						</Text>
						<Flex align="flex-end" justify="space-between" columnGap="5px" minW="fit-content">
							<Text textAlign="center" fontSize="2xl" fontWeight="semibold">
								<Text as="span" fontSize="5xl" color="yellow.500">
									27
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
						<CityListItem
							cityName="Londres"
							cityImageUrl="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							countryName="Reino Unido"
							countryFlagImageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
						/>
						<CityListItem
							cityName="Paris"
							cityImageUrl="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							countryName="França"
							countryFlagImageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg"
						/>
						<CityListItem
							cityName="Roma"
							cityImageUrl="https://images.unsplash.com/photo-1708589101232-efbd1cf98673?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							countryName="Itália"
							countryFlagImageUrl="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
						/>
						<CityListItem
							cityName="Praga"
							cityImageUrl="https://images.unsplash.com/photo-1688632286765-a01e86c11c78?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							countryName="República Tcheca"
							countryFlagImageUrl="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg"
						/>
						<CityListItem
							cityName="Amsterdã"
							cityImageUrl="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							countryName="Holanda"
							countryFlagImageUrl="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg"
						/>
					</SimpleGrid>
				</Box>
			</Box>
		</Box>
	);
}
