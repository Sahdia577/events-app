import React from 'react';
import { Link } from 'react-router-dom';
import {  Flex, Spacer } from '@chakra-ui/react'
import { Button } from '../components/ui/ListButton';

export const Navigation = () => {
  return (
    <>
      <Flex
        bg="#606688"
        direction="row"
        justify="center"
        p={5}
      >
        <Spacer />
        <Flex >
          <Button bg="#AB8DBB">
            <Link to="/">Home</Link>
          </Button>
        </Flex>
        <Spacer mx={300} />
        <Flex gap={3} >
          <Button bg="#AB8DBB">
            <Link to="/event/1">Event</Link>
          </Button>
          <Spacer />
          <Button bg="#AB8DBB">
            <Link to="/event/new">Add Event</Link>
          </Button>
        </Flex>
        <Spacer />
      </Flex>
    </>
  );
};