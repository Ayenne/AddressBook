import React from 'react';

import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import UserCard from './index';

test('Renders', () => {
  const user = {
    name: {
      first: 'Lorem',
      last: 'Ipsum',
    },
    login: {
      username: 'Dolor',
    },
    email: 'emet@gmail.com',
    picture: {
      thumbnail: 'http://www.path.com/',
    },
  };
  render(<UserCard user={user} />);
  expect(screen.getByRole('card')).toHaveTextContent('Lorem Ipsum');
  expect(screen.getByRole('card')).toHaveTextContent('Dolor');
  expect(screen.getByRole('card')).toHaveTextContent('emet@gmail.com');
  expect(screen.getByRole('img')).toHaveProperty('src', 'http://www.path.com/');
});

test('Opens Popup', () => {
  const user = {
    name: {
      first: 'Lorem',
      last: 'Ipsum',
    },
    login: {
      username: 'Dolor',
    },
    email: 'amet@gmail.com',
    picture: {
      thumbnail: 'http://www.path.com/',
    },
    location: {
      street: {
        name: 'Bahnhofstrasse',
        number: 1,
      },
      city: 'Boston',
      postcode: '1234',
      state: 'XYZ',
    },
    phone: '123456789',
    cell: '987654321',
  };
  render(<UserCard user={user} />);

  fireEvent.click(screen.getByRole('card'));

  expect(screen.getByRole('modal')).toHaveTextContent('Lorem Ipsum');
  expect(screen.getByRole('modal')).toHaveTextContent('Dolor');
  expect(screen.getByRole('modal')).toHaveTextContent('amet@gmail.com');
  expect(screen.getByRole('modal')).toHaveTextContent('Bahnhofstrasse 1');
  expect(screen.getByRole('modal')).toHaveTextContent('1234 Boston');
  expect(screen.getByRole('modal')).toHaveTextContent('XYZ');
  expect(screen.getByRole('modal')).toHaveTextContent('phone: 123456789');
  expect(screen.getByRole('modal')).toHaveTextContent('mobile: 987654321');
});
