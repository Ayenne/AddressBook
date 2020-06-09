import React from 'react';

import {render, screen, waitForElement} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {rest} from 'msw';
import {setupServer} from 'msw/node';

import UserPage from './index';
import baseUrl from '../../constants';

const users = {
  results: [
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
  ],
};
const server = setupServer(
    rest.get(baseUrl, (req, res, ctx) => {
      return res(ctx.json(users));
    }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Loads and displays users', async () => {
  render(<UserPage />);
  await waitForElement(() => screen.getByRole('user-list'));
  expect(screen.getByRole('user-list')).toHaveTextContent('Lorem Ipsum');
  expect(screen.getByRole('user-list')).toHaveTextContent('Dolor Emet');
});
