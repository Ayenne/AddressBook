import React from 'react';

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import UserList from './index';


test('Renders', () => {
  const users = [
    {
      name: {
        first: 'Lorem',
        last: 'Ipsum',
      },
    },
    {
      name: {
        first: 'Dolor',
        last: 'Emet',
      },
    },
  ];

  render(<UserList users={users} />);
  expect(screen.getByRole('user-list')).toHaveTextContent('Lorem Ipsum');
  expect(screen.getByRole('user-list')).toHaveTextContent('Dolor Emet');
});

