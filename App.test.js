import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  //jest.mock('react-native-google-signin', () => 'Google Signin')
  mock('react-native-google-signin', () => 'GoogleSigninButton')
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

test('test-jest', () => {
    expect(1+1).toBe(2)
})
