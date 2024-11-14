import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';

export function FeaturedAttributes() {
	const isLargeScreenSize = useBreakpointValue({
		base: false,
		lg: true
	});

	return isLargeScreenSize ? (
		<Flex align="center" justify="space-between">
			<Flex flexDir="column" align="center" gap="6">
				<Image src="/images/cocktail.svg" alt="Coquetel" width={85} height={85} />
				<Text fontWeight="semibold" fontSize="2xl">
					vida noturna
				</Text>
			</Flex>
			<Flex flexDir="column" align="center" gap="6">
				<Image src="/images/surf.svg" alt="Surfe" width={85} height={85} />
				<Text fontWeight="semibold" fontSize="2xl">
					praia
				</Text>
			</Flex>
			<Flex flexDir="column" align="center" gap="6">
				<Image src="/images/building.svg" alt="Prédio" width={85} height={85} />
				<Text fontWeight="semibold" fontSize="2xl">
					moderno
				</Text>
			</Flex>
			<Flex flexDir="column" align="center" gap="6">
				<Image src="/images/museum.svg" alt="Museu" width={85} height={85} />
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
	);
}
