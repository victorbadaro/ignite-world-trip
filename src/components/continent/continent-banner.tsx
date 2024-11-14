import { Box, Flex, Heading, Image, useBreakpointValue } from '@chakra-ui/react';
import type { Continent } from '../pages/continent/[slug]';

interface ContinentBannerProps {
	continent: Continent;
}

export function ContinentBanner({ continent }: ContinentBannerProps) {
	const isLargeScreenSize = useBreakpointValue({
		base: false,
		lg: true
	});

	return (
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
	);
}
