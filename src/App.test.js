import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Hooray!', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hooray!/i);
  expect(linkElement).toBeInTheDocument();
});
