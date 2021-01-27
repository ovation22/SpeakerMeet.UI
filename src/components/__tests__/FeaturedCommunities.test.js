import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FeaturedCommunities from '../FeaturedCommunities';
import * as useCommunitiesFeatured from '../../hooks/useCommunitiesFeatured';

describe('FeaturedCommunities', () => {
  it('should notify user of loading', () => {
    // arrange
    const useCommunitiesFeaturedMock = () => ({
      error: null,
      isLoaded: false,
      communities: [],
    });
    jest
      .spyOn(useCommunitiesFeatured, 'default')
      .mockImplementationOnce(useCommunitiesFeaturedMock);

    const tree = (
      <BrowserRouter>
        <FeaturedCommunities />
      </BrowserRouter>
    );

    // act
    const { getByTestId } = render(tree);

    // assert
    getByTestId('loading');
  });

  it('should render expected community fields', () => {
    // arrange
    const community = {
      id: 'idValue',
      name: 'nameValue',
      description: 'descriptionValue',
      location: 'locationValue',
      path: 'pathValue',
      slug: 'slugValue',
    };
    const communities = [community];

    const useCommunitiesFeaturedMock = () => ({
      error: null,
      isLoaded: true,
      communities,
    });
    jest
      .spyOn(useCommunitiesFeatured, 'default')
      .mockImplementationOnce(useCommunitiesFeaturedMock);

    const tree = (
      <BrowserRouter>
        <FeaturedCommunities />
      </BrowserRouter>
    );

    // act
    const { getByText } = render(tree);

    // assert
    getByText(community.name);
  });

  it('should alert of error', () => {
    // arrange
    const error = new Error('error message');

    const useCommunitiesFeaturedMock = () => ({
      error,
      isLoaded: true,
      communities: [],
    });
    jest
      .spyOn(useCommunitiesFeatured, 'default')
      .mockImplementationOnce(useCommunitiesFeaturedMock);

    const tree = (
      <BrowserRouter>
        <FeaturedCommunities />
      </BrowserRouter>
    );

    // act
    const { getByTestId } = render(tree);

    // assert
    expect(getByTestId('snackError')).toContainHTML(error.message);
  });
});
