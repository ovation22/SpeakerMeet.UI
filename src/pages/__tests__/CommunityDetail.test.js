import React from 'react';
import { act, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import CommunityDetail from '../CommunityDetail';
import { render } from '../../utils/test.utilitiy';

describe('CommunityDetail', () => {
  it('should render the expected Community fields', async () => {
    // arrange
    const community = {
      id: 'idValue',
      name: 'nameValue1',
      slug: 'slugValue1',
      location: 'locationValue1',
      description: 'descriptionValue1',
      path: 'pathValue1',
      tags: ['tag1', 'tag2'],
      socialPlatforms: [{ name: 'platform', url: 'platformUrl' }],
    };

    const communityResponseMock = Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(community),
    });
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => communityResponseMock);

    const communitiesFeatured = [];
    const communitiesFeaturedResponseMock = Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(communitiesFeatured),
    });
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => communitiesFeaturedResponseMock);

    const theme = createMuiTheme();

    const tree = (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CommunityDetail />
        </BrowserRouter>
      </ThemeProvider>
    );

    // act
    await act(async () => render(tree));

    // assert
    screen.getByText(community.name);
    screen.getByText(community.location);
    screen.getByText(community.description);

    community.socialPlatforms.forEach(platform => {
      expect(screen.getByLabelText(platform.name)).toHaveAttribute('href', platform.name.url);
    });

    community.tags.forEach(tag => screen.getByText(tag));
  });
});
