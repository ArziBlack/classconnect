import { CloseIcon } from "@chakra-ui/icons";
import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { type FC } from "react";

export interface ChakraModalInterface {
  isOpen: boolean;
  onOpen?: boolean;
  onClose: () => void;
  id?: string;
  blockScrollOnMount?: boolean;
  isCentered?: boolean;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
  children: React.ReactNode;
  bg?: string;
  padding?: string;
  autoFocus?: boolean;
  maxW?: string;
  maxH?: string;
  modalType?: string;
  borderRadius?: string | number;
  width?: string;
}

const ChakraModal: FC<ChakraModalInterface> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        closeOnOverlayClick={true}
        motionPreset="none"
      >
        <ModalOverlay bg={"rgba(34,36,44,.2)"} backdropFilter={"blur(10px)"} />

        <ModalContent
          autoFocus={false}
          p={"0px"}
          bg={"transparent"}
          w="fit-content"
          h="fit-content"
          boxShadow={"none"}
        >
          <Flex
            top={5}
            left={5}
            position={"fixed"}
            cursor={"pointer"}
            w={"40px"}
            h={"40px"}
            _hover={{
              bgColor: "rgb(255 255 255 / 30%)",
              backdropFilter: "blur(10px)",
              borderRadius: "50%",
            }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CloseIcon w={"20px"} h={"20px"} onClick={onClose} />
          </Flex>
          <ModalBody p={"0px"}>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ChakraModal;
