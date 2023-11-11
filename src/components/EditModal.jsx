import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure, 
} from '@chakra-ui/react';
import { Button } from './ui/ListButton';
import { ModalForm } from './ui/ModalForm';

export const EditModal = ({ categories, event }) => {
  const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
  
  return (
    <>
      <Button
        bg="#43035c"
        color="#FFF"
        onClick={onEditOpen}
      >
        Edit
      </Button>
      <Modal
        isOpen={isEditOpen}
        onClose={onEditClose}
      >
        <ModalOverlay />
        <ModalContent
          bgColor="#AB8DBB"
          p={5}
          borderRadius="15px"
          border="10px double #606688"
        >
          <ModalHeader
            color="#FFF"
            align="center"
          >
            Edit your event
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
          >
            <ModalForm categories={categories} event={event} />
          </ModalBody>
          <ModalFooter gap={2} mt="-10px" >
            <Button
              mt="0.75rem"
              fontSize={15}
              h="34px"
              bg="#43035c"
              color="#FFF"
              onClick={onEditClose}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};