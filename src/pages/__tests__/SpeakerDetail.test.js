import React from 'react';
import { act, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import SpeakerDetail from '../SpeakerDetail';
import { renderWithRouter } from '../../utils/test.utilitiy';

describe('SpeakerDetail', () => {
  it('should show stuff', async () => {
    // arrange
    const speaker = {
      name: 'nameValue1',
      slug: 'slugValue1',
      location: 'locationValue1',
      description: 'descriptionValue1',
      path: 'pathValue1',
      tags: ['tag1', 'tag2'],
      socialPlatforms: [{ name: 'facebook', url: 'facebookUrl' }],
    };

    const speakerResponseMock = Promise.resolve({
      json: () => Promise.resolve(speaker),
    });
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => speakerResponseMock);

    const speakersFeatured = [];
    const speakersFeaturedResponseMock = Promise.resolve({
      json: () => Promise.resolve(speakersFeatured),
    });
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => speakersFeaturedResponseMock);

    const theme = createMuiTheme();

    const tree = (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <SpeakerDetail />
        </BrowserRouter>
      </ThemeProvider>
    );

    // act
    await act(async () => renderWithRouter(tree));

    // assert
    screen.getByText(speaker.name);
    screen.getByText(speaker.location);
    screen.getByText(speaker.description);

    speaker.tags.forEach(tag => screen.getByText(tag));
  });
});
