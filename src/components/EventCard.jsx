import {
  Center,
  Card,
  CardBody,
  Stack,
  Text, 
  Image,
  Flex, 
} from '@chakra-ui/react';
import { EventCardText as EText } from '../components/ui/EventCardText';
import { DestructuringText as DText } from '../components/ui/DestructuringText';
import { EditModal } from './EditModal';
import { DeleteModal } from './DeleteModal';
 
export const EventCard = ({ event, categories, users }) => {
    return (
      <>
        <Center bgColor="#606688">
          <Card
            borderRadius="50px"
            border="15px double #43035c"
            w={"4xl"}
            h={"7xl"}
            mt={5}
            bgColor="#AB8DBB"
          >
            <CardBody align="center" p={10}>
              <Stack w={700}>
                <EditModal categories={categories} event={event} />        
                <DeleteModal event={event} />         
              </Stack>
              <Text
                fontSize={30}
                fontWeight={700}
                color="#43035c"
                mt={2}
                mb={5}
              >
                {event.title}
              </Text>
              <Text
                color="#000"
                fontWeight={600}
                fontSize={23}
              >
                {event.description}
              </Text>
              <Image
                src={event.image}
                w="700px"
                h="350px"
                my={10}
                borderRadius="10px"
                border="3px solid #43035c"
                objectFit="cover"
              />
              <Flex gap={3} mt={20}>
              <EText>
                🌍 Location:
              </EText>
              <DText>
                {event.location}
                </DText>
              </Flex>
              <Flex gap={3} mt={10}>
                <EText>
                📅 🕖 Start date and time:
                </EText>
                <DText>
                {event.startTime ? event.startTime.slice(0, 10) : ""} 
                </DText>
                <EText>
                  at
                </EText>
                <DText>
                {event.startTime ? event.startTime.slice(11, 16) : ""}h
                </DText>
              </Flex>
              <Flex gap={3} mt={2}>
                <EText>
                📅 🕒 End date and time:
                </EText>
                <DText>
                {event.endTime ? event.endTime.slice(0, 10) : ""}
                </DText>
                <EText>
                  at
                </EText>
                <DText>
                {event.endTime ? event.endTime.slice(11, 16) : ""}h
                </DText>
              </Flex>
              <Flex gap={3} mt={10}>
                <EText>
                🗂 Category:
                </EText>
                {event.categoryIds && event.categoryIds.map((categoryId) => {
                  const matchingCategory = categories.find(
                    (category) => category.id === categoryId);                  
                  if (matchingCategory) {
                    return (
                      <div key={matchingCategory.id}>
                      <DText>
                        {matchingCategory.name}
                        </DText>
                      </div>
                    );
                  }
                  return "";
                })}
              </Flex>
              <Flex gap={3} justify="end" mt={10} >
                <EText>
                  Created by:
                </EText>
                {users && users.map((user) => {
                  if (user.id === event.createdBy) {
                    return (
                      <div key={user.id}>
                      <DText>
                        {user.name}
                        </DText>
                      <Flex mt={5}>
                        <Image
                            mt={5}
                            src={user.image} 
                            w={150}
                            h={150}
                            borderRadius="10px"
                            border="3px solid #43035c"
                            objectFit="cover" />
                        </Flex>
                      </div>
                    );
                  }
                  return "";
                })}
              </Flex>
            </CardBody>
          </Card>
        </Center>
      </>
    )
  };