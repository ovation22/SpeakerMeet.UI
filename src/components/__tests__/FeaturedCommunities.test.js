import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FeaturedCommunities from '../FeaturedCommunities';
import * as useCommunitiesFeatured from '../../hooks/useCommunitiesFeatured';

describe('FeaturedCommunities', () => {
  it('should render loading', () => {
    // arrange
    const hook = { isLoaded: false };
    jest.spyOn(useCommunitiesFeatured, 'default').mockImplementationOnce(() => hook);

    const tree = <FeaturedCommunities />;

    // act
    const { getByTestId } = render(tree);

    // assert
    getByTestId('loading');
  });

  it('should render featured communities', () => {
    // arrange
    const hook = {
      isLoaded: true,
      communities: [
        {
          name: 'nameValue',
          location: 'locationValue',
          path: 'pathValue',
          description: 'descriptionValue',
        },
        {
          name: 'nameValue2',
          location: 'locationValue2',
          path: 'pathValue2',
          description: 'descriptionValue2',
        },
      ],
    };
    jest.spyOn(useCommunitiesFeatured, 'default').mockImplementationOnce(() => hook);
    const tree = (
      <BrowserRouter>
        <FeaturedCommunities />
      </BrowserRouter>
    );

    // act
    const { getByText, getByTestId } = render(tree);

    // assert
    hook.communities.forEach(community => {
      getByText(community.name);
      getByText(community.location);
      getByText(community.description);

      const expectedPath = `/${community.path}`;
      expect(getByTestId(`profile-${community.name}`)).toHaveAttribute('href', expectedPath);
    });
  });
});
