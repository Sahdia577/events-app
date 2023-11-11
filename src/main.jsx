import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  EventPage,
  loader as postLoader
} from './pages/EventPage';
import {
  EventsPage,
  loader as eventsLoader
} from './pages/EventsPage';
import {
  CreateEvent,
  action as newEvent,
  loader as newEventLoader
} from './pages/CreateEvent';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { Root } from './components/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <EventsPage />,
        loader: eventsLoader
      },
      {
        path: '/event/:eventId',
        element: <EventPage />,
        loader: postLoader
      },
      {
        path: '/event/new',
        element: <CreateEvent />,
        action: newEvent,
        loader: newEventLoader,
      },
    ],
  },
]);
// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);