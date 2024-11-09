import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Slider() {
	return (
		<Swiper
			pagination={{
				clickable: true
			}}
			modules={[Pagination, Navigation]}
			navigation
			loop
		>
			<SwiperSlide>
				<img
					src="https://images.unsplash.com/photo-1490642914619-7955a3fd483c?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Europa"
				/>
				<Flex position="absolute" top="0" left="0" w="100%" h="100%" align="center" justify="center" bgColor="rgb(28, 20, 1, 0.35)">
					<VStack spacing="4">
						<Heading fontSize="5xl" fontWeight="bold" color="gray.100">
							Europa
						</Heading>
						<Text fontSize="2xl" fontWeight="bold" color="gray.200">
							O continente mais antigo.
						</Text>
					</VStack>
				</Flex>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://images.unsplash.com/photo-1699689940779-4624e64a31a0?q=80&w=1732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="América do Norte"
				/>
				<Flex position="absolute" top="0" left="0" w="100%" h="100%" align="center" justify="center" bgColor="rgb(28, 20, 1, 0.35)">
					<VStack spacing="4">
						<Heading fontSize="5xl" fontWeight="bold" color="gray.100">
							América do Norte
						</Heading>
						<Text fontSize="2xl" fontWeight="bold" color="gray.200">
							O novo mundo.
						</Text>
					</VStack>
				</Flex>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://images.unsplash.com/photo-1547920295-ecea779c2a24?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="América do Sul"
				/>
				<Flex position="absolute" top="0" left="0" w="100%" h="100%" align="center" justify="center" bgColor="rgb(28, 20, 1, 0.35)">
					<VStack spacing="4">
						<Heading fontSize="5xl" fontWeight="bold" color="gray.100">
							América do Sul
						</Heading>
						<Text fontSize="2xl" fontWeight="bold" color="gray.200">
							O coração vibrante do mundo.
						</Text>
					</VStack>
				</Flex>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://images.unsplash.com/photo-1562749076-4fd06fc26134?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Ásia"
				/>
				<Flex position="absolute" top="0" left="0" w="100%" h="100%" align="center" justify="center" bgColor="rgb(28, 20, 1, 0.35)">
					<VStack spacing="4">
						<Heading fontSize="5xl" fontWeight="bold" color="gray.100">
							Ásia
						</Heading>
						<Text fontSize="2xl" fontWeight="bold" color="gray.200">
							A alma do mundo em cada horizonte.
						</Text>
					</VStack>
				</Flex>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="África"
				/>
				<Flex position="absolute" top="0" left="0" w="100%" h="100%" align="center" justify="center" bgColor="rgb(28, 20, 1, 0.35)">
					<VStack spacing="4">
						<Heading fontSize="5xl" fontWeight="bold" color="gray.100">
							África
						</Heading>
						<Text fontSize="2xl" fontWeight="bold" color="gray.200">
							Terra de origens, rica em almas e sonhos.
						</Text>
					</VStack>
				</Flex>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://images.unsplash.com/photo-1656177054067-e18d932a7ee7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Oceania"
				/>
				<Flex position="absolute" top="0" left="0" w="100%" h="100%" align="center" justify="center" bgColor="rgb(28, 20, 1, 0.35)">
					<VStack spacing="4">
						<Heading fontSize="5xl" fontWeight="bold" color="gray.100">
							Oceania
						</Heading>
						<Text fontSize="2xl" fontWeight="bold" color="gray.200">
							Onde o horizonte toca o infinito.
						</Text>
					</VStack>
				</Flex>
			</SwiperSlide>
		</Swiper>
	);
}
