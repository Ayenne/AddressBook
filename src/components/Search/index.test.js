import React from 'react';

import {render, fireEvent, screen} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import Search from './index';

test('Fill with value', () => {
  const values = [];
  const handler = (text) => {
    values.push(text);
  };

  render(<Search handleChange={handler} />);

  const textfield = screen.getByPlaceholderText('Search...');
  fireEvent.change(textfield, {target: {value: 'test'}});

  expect(values).toEqual(['test']);
});

test('Fill and erase', () => {
  const values = [];
  const handler = (text) => {
    values.push(text);
  };

  render(<Search handleChange={handler} />);

  const textfield = screen.getByPlaceholderText('Search...');
  fireEvent.change(textfield, {target: {value: 'test'}});
  fireEvent.change(textfield, {target: {value: ''}});

  expect(values).toEqual(['test', '']);
});
