import reducer from './reducer';

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = {type: 'dummy_action'};
    const expectedState = {nationality: 'ch'};

    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});

describe('CHANGE_NAT', () => {
  test('Updates the correct state', () => {
    const action = {type: 'CHANGE_NAT', payload: 'gb'};
    const expectedState = {nationality: 'gb'};

    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
