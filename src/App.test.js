import React from 'react';
import { render, within } from '@testing-library/react';
import mediaQuery from 'css-mediaquery';
import App from './App';

function createMatchMedia(width) {
  return query => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

describe('App tests', () => {
  beforeAll(() => {
    window.matchMedia = createMatchMedia('1200px');
  });

  test('renders App Menu!', () => {
    const { getByAltText, getByRole } = render(<App />);
    expect(getByAltText('logo-main')).toBeInTheDocument();
    expect(getByAltText('logo-speaker')).toBeInTheDocument();

    const menu = getByRole('menu');
    expect(within(menu).getByText(/home/i)).toBeInTheDocument();
    expect(within(menu).getByText(/speakers/i)).toBeInTheDocument();
    expect(within(menu).getByText(/communities/i)).toBeInTheDocument();
    expect(within(menu).getByText(/conferences/i)).toBeInTheDocument();

    // const searchForm = getByRole('search');

    // searchForm.submit();

    // const searchBox = within(menu).getByPlaceholderText('');
    // expect(searchBox).toBeInTheDocument();
    // fireEvent.submit(searchBox, { target: searchForm });

    // fireEvent.submit(searchForm, { target: { value: '' }});
    // fireEvent.keyDown(searchField, { key: 'enter', keyCode: 13 })
    // userEvent.type(searchBox, '{enter}');
  });
});
