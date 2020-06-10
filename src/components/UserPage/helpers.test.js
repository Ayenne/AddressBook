import '@testing-library/jest-dom/extend-expect';
import applySearch from './helpers';

const user = (first, last) => {
  return {
    name: {
      first: first,
      last: last,
    },
  };
};

test('Search by exact name', () => {
  const userA = user('Jane', 'Doe');
  const userB = user('John', 'Smith');
  expect(applySearch([userA, userB], 'Jane')).toContain(userA);
  expect(applySearch([userA, userB], 'Jane Doe')).toContain(userA);
  expect(applySearch([userA, userB], 'Doe')).toContain(userA);
  expect(applySearch([userA, userB], 'John')).toContain(userB);
  expect(applySearch([userA, userB], 'John Smith')).toContain(userB);
  expect(applySearch([userA, userB], 'Smith')).toContain(userB);
});

test('Search should be case insensitive', () => {
  const userA = user('John', 'Smith');
  const userB = user('Jane', 'Doe');
  expect(applySearch([userA, userB], 'JOHN')).toContain(userA);
  expect(applySearch([userA, userB], 'DOE')).toContain(userB);
  expect(applySearch([userA, userB], 'john')).toContain(userA);
  expect(applySearch([userA, userB], 'doe')).toContain(userB);
});


test('Search user by incomplete name', () => {
  const userA = user('Jonathan', 'Smith');
  const userB = user('Jane', 'Jones');
  expect(applySearch([userA, userB], 'an s')).toContain(userA);
  expect(applySearch([userA, userB], 'Smith')).toContain(userA);
  expect(applySearch([userA, userB], 'Jon')).toContain(userA, userB);
});

test('Search user by a single letter', () => {
  const userA = user('Jonathan', 'Smith');
  const userB = user('Jane', 'Jones');
  const userC = user('Margo', 'Jones');
  const userD = user('Adam', 'Meunier');
  expect(applySearch([userA, userB, userC, userD], 'j'))
      .toContain(userA, userB, userC);
  expect(applySearch([userA, userB, userC, userD], 'u')).toContain(userD);
});

test('Empty string returns all', () => {
  const userA = user('Jonathan', 'Smith');
  const userB = user('Jane', 'Jones');
  const userC = user('Margo', 'Jones');
  expect(applySearch([userA, userB, userC], '')).toContain(userA, userB, userC);
});
