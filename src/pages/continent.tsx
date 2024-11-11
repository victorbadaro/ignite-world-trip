import { Box, Flex, Heading, Image, SimpleGrid, Text, Tooltip } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

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
					<SimpleGrid mt="10"></SimpleGrid>
				</Box>
			</Box>
		</Box>
	);
}
