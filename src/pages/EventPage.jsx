import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  Heading,
  Center
} from '@chakra-ui/react';
import { EventCard } from '../components/EventCard';

export const loader = async ({ params }) => {
  const event = await fetch(`https://my-json-server.typicode.com/Sahdia577/events-json-server/events/${params.eventId}`);
  const categories = await fetch("https://my-json-server.typicode.com/Sahdia577/events-json-server/categories");
  const users = await fetch("https://my-json-server.typicode.com/Sahdia577/events-json-server/users");

  return {
    event: await event.json(),
    categories: await categories.json(),
    users: await users.json(),
  };
};

export const EventPage = () => {
  const { event, categories, users } = useLoaderData();

  return (
    <>
      <Heading
        bgColor='#606688'
        color='white'
        align="center"
      >
        Event
      </Heading>
      <Center bgColor="#606688">
        <EventCard
          event={event}
          categories={categories}
          users={users}

          />
      </Center>
    </>
  )
};
