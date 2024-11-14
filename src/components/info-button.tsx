import { Box, Modal, ModalBody, ModalContent, ModalOverlay, Text, Tooltip, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

interface InfoButtonProps {
	text: string;
}

export function InfoButton({ text }: InfoButtonProps) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const isLargeScreenSize = useBreakpointValue({
		base: false,
		lg: true
	});

	return isLargeScreenSize ? (
		<Tooltip hasArrow label={text} bgColor="gray.800" color="gray.100">
			<Box cursor="pointer" color="gray.700" opacity={0.5}>
				<FiInfo size={16} />
			</Box>
		</Tooltip>
	) : (
		<>
			<Box cursor="pointer" color="gray.700" opacity={0.5} onClick={onOpen}>
				<FiInfo size={10} />
			</Box>
			<Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered motionPreset="scale">
				<ModalOverlay />
				<ModalContent bgColor="gray.800" color="gray.100">
					<ModalBody>
						<Text>{text}</Text>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
