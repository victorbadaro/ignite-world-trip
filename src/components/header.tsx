import { Flex, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiChevronLeft } from 'react-icons/fi';

export function Header() {
	const { asPath } = useRouter();

	return (
		<Flex align="center" h="100px" bg="gray.100">
			<Flex flex="1" position="relative" align="center" justify="center" mx="auto" maxW="1160px">
				{asPath !== '/' && (
					<Link href="/" passHref>
						<ChakraLink as="a" position="absolute" left="0" color="gray.800">
							<FiChevronLeft size={32} />
						</ChakraLink>
					</Link>
				)}

				<img src="/images/Logo.svg" alt="WorldTrip Logo" />
			</Flex>
		</Flex>
	);
}
