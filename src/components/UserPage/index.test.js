import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter as Router} from 'react-router-dom';

import {render, screen} from '@testing-library/react';
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

let store;
const mockStore = configureStore([]);

beforeAll(() => server.listen());
beforeEach(() => {
  store = mockStore({
    nationality: 'ch',
  });
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Displays loading message', async () => {
  render(
      <Router>
        <Provider store={store}>
          <UserPage />
        </Provider>
      </Router>,
  );
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

/*
Not sure how to trigger the load from InfiniteScroll component in the test.

test('Loads and displays users', async () => {
  render(<UserPage />);
  await waitForElement(() => screen.getByRole('user-list'));
  expect(screen.getByRole('user-list')).toHaveTextContent('Lorem Ipsum');
  expect(screen.getByRole('user-list')).toHaveTextContent('Dolor Emet');
});
*/
