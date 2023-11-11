import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Box } from '@chakra-ui/react';

export const Root = () => {
  return (
    <Box>
      <Navigation />
      <Outlet />
      <Footer />
    </Box>
  );
}; 
