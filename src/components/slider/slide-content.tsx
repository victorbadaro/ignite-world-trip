import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import type { Continent } from '../../pages';

interface SlideContentProps {
	continent: Continent;
}

export function SlideContent({ continent }: SlideContentProps) {
	return (
		<Link href={`/continent/${continent.id}`}>
			<a>
				<Image w="100%" h="100%" objectFit="cover" src={continent.imageUrl} alt={continent.name} />
				<Flex position="absolute" top="0" left="0" w="100%" h="100%" align="center" justify="center" bgColor="rgb(28, 20, 1, 0.35)">
					<VStack spacing={['3', '4']}>
						<Heading fontSize={['2xl', '5xl']} fontWeight="bold" color="gray.100">
							{continent.name}
						</Heading>
						<Text fontSize={['sm', '2xl']} fontWeight="bold" color="gray.200">
							{continent.description}
						</Text>
					</VStack>
				</Flex>
			</a>
		</Link>
	);
}
