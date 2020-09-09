/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createMemoryHistory } from 'history';
import { render as rtlRender } from '@testing-library/react';
import { Router } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';

// eslint-disable-next-line import/prefer-default-export
export function render(
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => (
    <HelmetProvider>
      <Router history={history}>{children}</Router>
    </HelmetProvider>
  );
  return {
    ...rtlRender(ui, { wrapper: Wrapper }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}
