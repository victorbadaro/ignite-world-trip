import { Box, Flex, Text } from '@chakra-ui/react';
import { InfoButton } from '../info-button';

interface ContinentAboutProps {
	about: string;
	countriesCount: number;
	languagesCount: number;
	mostVisitedCitiesCount: number;
}

export function ContinentAbout({ about, countriesCount, languagesCount, mostVisitedCitiesCount }: ContinentAboutProps) {
	return (
		<Flex flexDir={['column', 'row']} align="center" justify="space-between" columnGap={['0', '70px']} rowGap={['4', '0']}>
			<Text fontSize={['sm', '2xl']} textAlign="justify">
				{about}
			</Text>
			<Flex alignSelf={['stretch', 'auto']} align="center" justify="space-between" columnGap={['0', '42px']}>
				<Text textAlign={['start', 'center']} fontSize={['lg', '2xl']} fontWeight={['normal', 'semibold']}>
					<Text as="span" fontSize={['2xl', '5xl']} fontWeight="semibold" color="yellow.500">
						{countriesCount}
					</Text>
					<br />
					países
				</Text>
				<Text textAlign={['start', 'center']} fontSize={['lg', '2xl']} fontWeight={['normal', 'semibold']}>
					<Text as="span" fontSize={['2xl', '5xl']} fontWeight="semibold" color="yellow.500">
						{languagesCount}
					</Text>
					<br />
					línguas
				</Text>
				<Flex align="flex-end" justify="space-between" columnGap="5px" minW="fit-content">
					<Text textAlign={['start', 'center']} fontSize={['lg', '2xl']} fontWeight={['normal', 'semibold']}>
						<Text as="span" fontSize={['2xl', '5xl']} fontWeight="semibold" color="yellow.500">
							{mostVisitedCitiesCount}
						</Text>
						<br />
						cidades +100
					</Text>
					<Box pb="2.5">
						<InfoButton text="cidades mais visitadas do mundo" />
					</Box>
				</Flex>
			</Flex>
		</Flex>
	);
}
