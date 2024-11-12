import type { ReactNode } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, type SwiperProps } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SliderProps extends SwiperProps {
	children: ReactNode;
}

export function Slider({ children, loop }: SliderProps) {
	return (
		<Swiper
			pagination={{
				clickable: true
			}}
			modules={[Pagination, Navigation]}
			navigation
			loop={loop}
		>
			{children}
		</Swiper>
	);
}
