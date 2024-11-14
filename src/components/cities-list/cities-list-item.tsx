import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface CityListItemProps {
	cityName: string;
	cityImageUrl: string;
	countryName: string;
	countryFlagImageUrl: string;
}

export function CitiesListItem({ cityName, cityImageUrl, countryName, countryFlagImageUrl }: CityListItemProps) {
	return (
		<Flex flexDir="column" w="256px" h="279px" borderRadius="base" overflow="hidden">
			<Image w="100%" h="172px" objectFit="cover" src={cityImageUrl} alt={cityName} />
			<Flex
				flex="1"
				align="center"
				justify="space-between"
				pt="18px"
				px="6"
				pb="6"
				borderRight="1px"
				borderBottom="1px"
				borderLeft="1px"
				borderBottomRadius="base"
				borderColor="rgb(255, 186, 8, 0.5)"
				bgColor="white"
			>
				<Box fontFamily="Barlow">
					<Text as="strong" fontSize="xl" fontWeight="semibold" lineHeight="25px">
						{cityName}
					</Text>
					<Text mt="3" fontSize={['md', 'lg']} fontWeight="medium" lineHeight="26px" color="gray.700">
						{countryName}
					</Text>
				</Box>

				<Image w="30px" h="30px" borderRadius="full" objectFit="cover" src={countryFlagImageUrl} alt={countryName} />
			</Flex>
		</Flex>
	);
}
