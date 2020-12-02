import React from 'react';
import { act, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import SpeakerDetail from '../SpeakerDetail';
import { render } from '../../utils/test.utilitiy';

describe('SpeakerDetail', () => {
  it('should render the expected Speaker fields', async () => {
    // arrange
    const speaker = {
      id: 'idValue',
      name: 'nameValue1',
      slug: 'slugValue1',
      location: 'locationValue1',
      description: 'descriptionValue1',
      path: 'pathValue1',
      tags: ['tag1', 'tag2'],
      socialPlatforms: [{ name: 'platform', url: 'platformUrl' }],
    };

    const speakerResponseMock = Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(speaker),
    });
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => speakerResponseMock);

    const speakersFeatured = [];
    const speakersFeaturedResponseMock = Promise.resolve({
      ok: true,
      status: 200,
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
    await act(async () => render(tree));

    // assert
    screen.getByText(speaker.name);
    screen.getByText(speaker.location);
    screen.getByText(speaker.description);

    speaker.socialPlatforms.forEach(platform => {
      expect(screen.getByLabelText(platform.name)).toHaveAttribute('href', platform.name.url);
    });

    speaker.tags.forEach(tag => screen.getByText(tag));
  });
});
