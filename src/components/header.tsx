import { Flex, Grid, GridItem } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
	return (
		<Flex align="center" h="100px" bg="gray.100">
			<Grid templateColumns="repeat(3, 1fr)" mx="auto" maxW="1660px">
				<GridItem>
					<Link href="/">
						<a>v</a>
					</Link>
				</GridItem>
				<GridItem>
					<img src="/images/Logo.svg" alt="World Trip Logo" />
				</GridItem>
			</Grid>
		</Flex>
	);
}
