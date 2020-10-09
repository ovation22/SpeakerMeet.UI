import React from 'react';
import { act, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import ConferenceDetail from '../ConferenceDetail';
import { render } from '../../utils/test.utilitiy';

describe('ConferenceDetail', () => {
  it('should render the expected Conference fields', async () => {
    // arrange
    const conference = {
      id: 'idValue',
      name: 'nameValue1',
      slug: 'slugValue1',
      location: 'locationValue1',
      description: 'descriptionValue1',
      path: 'pathValue1',
      tags: ['tag1', 'tag2'],
      socialPlatforms: [{ name: 'platform', url: 'platformUrl' }],
    };

    const conferenceResponseMock = Promise.resolve({
      json: () => Promise.resolve(conference),
    });
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => conferenceResponseMock);

    const conferencesFeatured = [];
    const conferencesFeaturedResponseMock = Promise.resolve({
      json: () => Promise.resolve(conferencesFeatured),
    });
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => conferencesFeaturedResponseMock);

    const theme = createMuiTheme();

    const tree = (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ConferenceDetail />
        </BrowserRouter>
      </ThemeProvider>
    );

    // act
    await act(async () => render(tree));

    // assert
    screen.getByText(conference.name);
    screen.getByText(conference.location);
    screen.getByText(conference.description);

    conference.socialPlatforms.forEach(platform => {
      expect(screen.getByLabelText(platform.name)).toHaveAttribute('href', platform.name.url);
    });

    conference.tags.forEach(tag => screen.getByText(tag));
  });
});
