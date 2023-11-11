 import React from 'react';
import {
  Heading,
  Flex, 
  Center
} from '@chakra-ui/react';
import {
  Link, 
  useLoaderData
} from 'react-router-dom';
import { useState, } from 'react';
import { EventListCard } from '../components/EventListCard';
import { TextInput } from '../components/ui/TextInput';


export const loader = async () => {
  const listEvents = await fetch("https://my-json-server.typicode.com/Sahdia577/events-json-server/events");
  const listCategories = await fetch("https://my-json-server.typicode.com/Sahdia577/events-json-server/categories");

  return {
    listEvents: await listEvents.json(),
    listCategories: await listCategories.json()
  }
};

export const EventsPage = () => {
  const { listEvents, listCategories } = useLoaderData();
  //Handling the use of the searchbar
  const [searchField, setSearchField] = useState("");
  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  //Match event name or filter on category 
  let matchEvent = listEvents.filter(event => {
    let matchName = event.title.toLowerCase().includes(searchField.toLowerCase());
    let matchCategory = event.categoryIds.some(categoryId => {
      const category = listCategories.find(cat => cat.id === categoryId);
      return category && category.name.toLowerCase().includes(searchField.toLowerCase());
    });
    
    return matchName || matchCategory
  });
  //Show all events or those matching the search criteria
  let displayMatchedEvent = listEvents;
  if (matchEvent.length > 0)
  {
    displayMatchedEvent = matchEvent;
  }
  
  return (
    <>
      <Center bgColor="#606688">
        <TextInput changeFn={handleChange} />
      </Center>
      <Heading
        bgColor="#606688"
        color="white"
        align="center"
      >
        Upcoming Events
      </Heading>
      <Flex
        bgColor="#606688"
        justify="center"
        wrap={"wrap"}
        gap={2}
      >
        {displayMatchedEvent.map((eventListCard) => (
          <div key={eventListCard.id}>
            <Link to={`event/${eventListCard.id}`}  >
              <EventListCard events={eventListCard} />  
            </Link>
          </div>
        ))}
      </Flex>
    </>
  );
};
