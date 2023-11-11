import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure, 
    Text,
    useToast
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from './ui/ListButton';
 
export const DeleteModal = ({ event }) => {
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
    const [happening, setHappening] = useState(null);
    const toast = useToast()
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/Sahdia577/events-json-server/events/${event.id}`);
                if (response.ok) {
                    const data = await response.json();
                    setHappening(data);
                } else {
                    toast({
                        title: "Failed to load event",
                        description: "Your event was not loaded. Please try again.",
                        status: "error",
                        isClosable: true,
                    });
                }
            } catch (error) {
                console.error("Network error:", error);
                toast({
                    title: "Network Error",
                    description: "A network error occurred. Please try again.",
                    status: "error",
                    isClosable: true,
                });
            }
        };
        fetchData();
    }, [event.id]);
    
    const handleClick = async () => {
        try {
            const response = await fetch(`https://my-json-server.typicode.com/Sahdia577/events-json-server/events/${event.id}`, {
                method: "DELETE",
                body: JSON.stringify(happening),
                headers: { "Content-Type": "application/json"},
            });
            if (response.ok) {
                navigate("/");
            } else {
                toast({
                    title: "Failed to delete event",
                    description: "Your event was not deleted",
                    status: "error",
                    isClosable: true,
                });
            }
        } catch (error) {
            console.error("Network error:", error);
            toast({
                title: "Network Error",
                description: "An error occurred while deleting your event",
                status: "error",
                isClosable: true,
            });
        }
    };

    return (
        <>
            <Button
                bg="#43035c"
                color="#FFF"
                onClick={onDeleteOpen}
            >
                Delete
            </Button>
            <Modal
                isOpen={isDeleteOpen}
                onClose={onDeleteClose}
            >
                <ModalOverlay />
                <ModalContent
                    bgColor="#AB8DBB"
                    p={5}
                    borderRadius="15px"
                    border="10px double #606688"
                >
                    <ModalHeader>
                        <Text color="#FFF">
                            Delete your event
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody bgColor="#AB8DBB">
                        <Text
                            borderRadius="5px"
                            bgColor="#FFF"
                            color="#606688"
                            p={2}
                        >
                            Are you sure you want to delete your event?
                        </Text>
                    </ModalBody>
                    <ModalFooter gap={2}>
                        <Button
                            fontSize={15}
                            h="40px"
                            bg="#43035c"
                            color="#FFF"
                            onClick={handleClick}
                        >
                            Delete
                        </Button>
                        <Button
                            fontSize={15}
                            h="40px"
                            bg="#43035c"
                            color="#FFF"
                            onClick={onDeleteClose}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>  
        </>
    )
}