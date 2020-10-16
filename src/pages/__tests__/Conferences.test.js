import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { act, screen } from '@testing-library/react';
import { render } from '../../utils/test.utilitiy';
import Conferences from '../Conferences';

describe('Conferences', () => {
  it('should render expected fields from list of returned conferences', async () => {
    // arrange
    const result = {
      paginationInfo: {
        totalItems: 9,
        itemsPerPage: 9,
        actualPage: 0,
        totalPages: 1,
      },
      conferences: [
        {
          id: 'idValue1',
          name: 'nameValue1',
          slug: 'slug-value-1',
          location: 'locationValue1',
          description: 'descriptionValue1',
        },
        {
          id: 'idValue2',
          name: 'nameValue2',
          slug: 'slug-value-2',
          location: 'locationValue2',
          description: 'descriptionValue2',
        },
      ],
    };
    const mockJsonPromise = Promise.resolve(result);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const tree = (
      <HelmetProvider>
        <Conferences />
      </HelmetProvider>
    );

    // act
    await act(async () => render(tree));

    // assert
    screen.getByText('Find a Conference');

    result.conferences.forEach(conference => {
      screen.getByText(conference.name);
      screen.getByText(conference.location);
      screen.getByText(conference.description);
    });
  });

  it('should render error message from failed fetch', async () => {
    // arrange
    const errorMock = new Error('errorMessageValue');
    const mockFetchPromise = Promise.reject(errorMock);
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const tree = (
      <HelmetProvider>
        <Conferences />
      </HelmetProvider>
    );

    // act
    await act(async () => render(tree));

    // assert
    screen.getByText(/\berrorMessageValue\b/);
  });
});
