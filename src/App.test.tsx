import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App Menu Bar', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Persistent drawer/i);
  expect(linkElement).toBeInTheDocument();
});
