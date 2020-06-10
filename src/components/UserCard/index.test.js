import React from 'react';

import {render, screen} from '@testing-library/react';
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
