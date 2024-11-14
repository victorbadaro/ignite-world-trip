import { Box, Flex, Heading, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import Image from 'next/image';

export function MainBanner() {
	const isLargeScreenSize = useBreakpointValue({
		base: false,
		lg: true
	});

	return isLargeScreenSize ? (
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
					<Image src="/images/Airplane.svg" alt="Airplane" width={417} height={270} />
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
	);
}
