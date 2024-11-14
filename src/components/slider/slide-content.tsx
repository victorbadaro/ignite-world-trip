import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

interface SlideContentProps {
	linkUrl: string;
	imageUrl: string;
	title: string;
	subtitle: string;
}

export function SlideContent({ linkUrl, imageUrl, title, subtitle }: SlideContentProps) {
	return (
		<Link href={linkUrl}>
			<a>
				<Image w="100%" h="100%" objectFit="cover" src={imageUrl} alt={title} />
				<Flex position="absolute" top="0" left="0" w="100%" h="100%" align="center" justify="center" bgColor="rgb(28, 20, 1, 0.35)">
					<VStack spacing={['3', '4']}>
						<Heading fontSize={['2xl', '5xl']} fontWeight="bold" color="gray.100">
							{title}
						</Heading>
						<Text fontSize={['sm', '2xl']} fontWeight="bold" color="gray.200">
							{subtitle}
						</Text>
					</VStack>
				</Flex>
			</a>
		</Link>
	);
}
