import { Flex, Image, Link as ChakraLink, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiChevronLeft } from 'react-icons/fi';

export function Header() {
	const { asPath } = useRouter();
	const isSmallScreen = useBreakpointValue({
		base: true,
		md: false
	});

	return (
		<Flex align="center" h={['50px', '100px']} bgColor="gray.100">
			<Flex flex="1" position="relative" align="center" justify="center" mx="auto" maxW="1160px">
				{asPath !== '/' && (
					<Link href="/" passHref>
						<ChakraLink as="a" position="absolute" left="0" color="gray.800">
							<FiChevronLeft size={isSmallScreen ? 16 : 32} />
						</ChakraLink>
					</Link>
				)}

				<Image src="/images/Logo.svg" alt="WorldTrip Logo" w={['81px', 'auto']} h={['20px', 'auto']} />
			</Flex>
		</Flex>
	);
}
