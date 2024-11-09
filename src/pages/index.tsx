import { Box, Center, Divider, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { Slider } from '../components/slider';

export default function Home() {
	return (
		<Box pb="10">
			<Flex align="flex-end" mx="auto" maxW="1440px" h="335px" bgImage="/images/Background.png" bgRepeat="no-repeat" bgColor="yellow.500">
				<Flex flex="1" align="flex-start" justify="space-between" mx="auto" mb="-33px" maxW="1160px">
					<VStack spacing="5" align="flex-start" mt="27px" maxW="524px">
						<Heading fontWeight="medium" color="gray.100">
							5 Continentes,
							<br />
							infinitas possibilidades.
						</Heading>
						<Text fontSize="xl" color="gray.200">
							Chegou a hora de tirar do papel a viagem que você sempre sonhou.
						</Text>
					</VStack>

					<Box>
						<img src="/images/Airplane.svg" alt="Airplane" />
					</Box>
				</Flex>
			</Flex>

			<Box mx="auto" mt="114px" maxW="1160px">
				<Flex align="center" justify="space-between">
					<Flex flexDir="column" align="center" gap="6">
						<img src="/images/cocktail.svg" alt="Cocktail" />
						<Text fontWeight="semibold" fontSize="2xl">
							vida noturna
						</Text>
					</Flex>
					<Flex flexDir="column" align="center" gap="6">
						<img src="/images/surf.svg" alt="Cocktail" />
						<Text fontWeight="semibold" fontSize="2xl">
							praia
						</Text>
					</Flex>
					<Flex flexDir="column" align="center" gap="6">
						<img src="/images/building.svg" alt="Cocktail" />
						<Text fontWeight="semibold" fontSize="2xl">
							moderno
						</Text>
					</Flex>
					<Flex flexDir="column" align="center" gap="6">
						<img src="/images/museum.svg" alt="Cocktail" />
						<Text fontWeight="semibold" fontSize="2xl">
							clássico
						</Text>
					</Flex>
				</Flex>

				<Center mt="20">
					<Box w="90px">
						<Divider borderWidth="1px" borderColor="gray.800" />
					</Box>
				</Center>

				<Text my="52px" fontWeight="medium" fontSize="4xl" textAlign="center">
					Vamos nessa?
					<br />
					Então escolha seu continente
				</Text>

				<Box h="450px">
					<Slider />
				</Box>
			</Box>
		</Box>
	);
}
