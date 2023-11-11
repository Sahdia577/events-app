import ReactCurvedText from 'react-curved-text';
import {
    Text,
    Image,
    Center,
    Flex,
    UnorderedList,
    ListItem,
    Card,
    CardBody,
} from '@chakra-ui/react';

export const EventListCard = ({ events }) => {
    return (
        <Center
            flexDir="column"
            overflow="hidden"
        >
            <Card
                borderRadius="xl"
                w={"xs"}
                h={"s"} 
                mx={1}
                mt={4}
                bgColor="#AB8DBB"
                _hover={{ border: "2px" }}
            >
                <CardBody align="center">
                    <UnorderedList styleType="none">
                        <ListItem>
                            <Text
                                fontWeight={500}
                                fontSize={25}
                                color='#43035c'
                            >
                                {events.title}
                            </Text>
                            <ReactCurvedText
                                color="#43035c"
                                width={300}
                                height={100}
                                cx={150}
                                cy={100}
                                rx={120}
                                ry={50}
                                startOffset={18}
                                text={events.description}
                                reversed='true'
                            />
                            <Image
                                src={events.image}
                                w={200}
                                h={200}
                                mb={10}
                                border="5px dashed #43035c"
                                borderRadius="full"
                                objectFit="cover"
                            />
                            <Flex direction="column" gap={1}>
                                <Flex gap={1} justify="start">
                                    <Text
                                        fontWeight={"500"}
                                        color="#43035c"
                                    >
                                        Start date and time:
                                    </Text>
                                </Flex>
                                <Flex gap={1} justify="start">
                                    <Text color="#000" >
                                        {events.startTime ? events.startTime.slice(0, 10) : ""}
                                    </Text>
                                    <Text color="#43035c">at</Text>
                                    <Text color="#000">
                                        {events.startTime ? events.startTime.slice(11, 16) : ""}h
                                    </Text>
                                </Flex>
                                <Flex gap={1} justify="end">
                                    <Text
                                        fontWeight={"500"}
                                        color="#43035c"
                                    >
                                        End date and time:
                                    </Text>
                                </Flex>
                                <Flex gap={1} justify="end">
                                    <Text color="#000">
                                        {events.endTime ? events.endTime.slice(0, 10) : ""}
                                    </Text>
                                    <Text color="#43035c">at</Text>
                                    <Text color="#000">
                                        {events.endTime ? events.endTime.slice(11, 16) : ""}h
                                    </Text>
                                </Flex>
                            </Flex>
                        </ListItem>
                    </UnorderedList>
                </CardBody>
            </Card>
        </Center>
    );
};