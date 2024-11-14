import { SimpleGrid } from '@chakra-ui/react';
import { CitiesListItem } from './cities-list-item';

type City = {
	name: string;
	imageUrl: string;
	country: {
		name: string;
		flagUrl: string;
	};
};

interface CitiesListProps {
	cities: City[];
}

export function CitiesList({ cities }: CitiesListProps) {
	return (
		<SimpleGrid mt={['5', '10']} columnGap={['0', '45px']} rowGap={['5', '12']} minChildWidth="256px" justifyItems="center">
			{cities.map((city) => (
				<CitiesListItem
					key={city.name}
					cityName={city.name}
					cityImageUrl={city.imageUrl}
					countryName={city.country.name}
					countryFlagImageUrl={city.country.flagUrl}
				/>
			))}
		</SimpleGrid>
	);
}
