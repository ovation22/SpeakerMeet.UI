import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { act, screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/test.utilitiy';
import Communities from '../Communities';

describe('Communities', () => {
  it('should render expected fields from list of returned communities', async () => {
    // arrange
    const communities = [
      {
        id: 'idValue1',
        name: 'nameValue1',
        slug: 'slug-value-1',
        location: 'locationValue1',
        description: 'descriptionValue1',
        paginationInfo: {
          totalItems: 9,
          itemsPerPage: 9,
          actualPage: 0,
          totalPages: 1,
          previous: 'is-disabled',
          next: 'is-disabled',
        },
      },
      {
        id: 'idValue2',
        name: 'nameValue2',
        slug: 'slug-value-2',
        location: 'locationValue2',
        description: 'descriptionValue2',
        paginationInfo: {
          totalItems: 9,
          itemsPerPage: 9,
          actualPage: 0,
          totalPages: 1,
          previous: 'is-disabled',
          next: 'is-disabled',
        },
      },
    ];
    const mockJsonPromise = Promise.resolve(communities);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const tree = (
      <HelmetProvider>
        <Communities />
      </HelmetProvider>
    );

    // act
    await act(async () => renderWithRouter(tree));

    // assert
    screen.getByText('Find a Community');

    communities.forEach(community => {
      screen.getByText(community.name);
      screen.getByText(community.location);
      screen.getByText(community.description);
    });
  });

  it('should render error message from failed fetch', async () => {
    // arrange
    const errorMock = new Error('errorMessageValue');
    const mockFetchPromise = Promise.reject(errorMock);
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const tree = (
      <HelmetProvider>
        <Communities />
      </HelmetProvider>
    );

    // act
    await act(async () => renderWithRouter(tree));

    // assert
    screen.getByText(/\berrorMessageValue\b/);
  });
});
