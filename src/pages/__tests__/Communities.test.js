import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { act, screen } from '@testing-library/react';
import { render } from '../../utils/test.utilitiy';
import Communities from '../Communities';
import * as useCommunities from '../../hooks/useCommunities';

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
        path: 'pathValue1',
      },
      {
        id: 'idValue2',
        name: 'nameValue2',
        slug: 'slug-value-2',
        location: 'locationValue2',
        description: 'descriptionValue2',
        path: 'pathValue2',
      },
    ];
    const useCommunitiesMock = () => {
      return {
        error: null,
        isLoaded: true,
        communities,
      };
    };
    jest.spyOn(useCommunities, 'default').mockImplementationOnce(useCommunitiesMock);

    const tree = (
      <HelmetProvider>
        <Communities />
      </HelmetProvider>
    );

    // act
    await act(async () => render(tree));

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
    const useCommunitiesMock = () => {
      return {
        error: errorMock,
        isLoaded: true,
        communities: [],
      };
    };
    jest.spyOn(useCommunities, 'default').mockImplementationOnce(useCommunitiesMock);

    const tree = (
      <HelmetProvider>
        <Communities />
      </HelmetProvider>
    );

    // act
    await act(async () => render(tree));

    // assert
    screen.getByText(/\berrorMessageValue\b/);
  });
});
