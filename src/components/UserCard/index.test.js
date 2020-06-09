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
  };
  render(<UserCard user={user} />);
  expect(screen.getByRole('card')).toHaveTextContent('Lorem Ipsum');
});
