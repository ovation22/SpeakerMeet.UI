import React from 'react';
import { act, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import SpeakerDetail from '../SpeakerDetail';
import { renderWithRouter } from '../../utils/test.utilitiy';

describe('SpeakerDetail', () => {
  it('should show stuff', async () => {
    // arrange
    const post1 = {
      name: 'nameValue1',
      slug: 'slugValue1',
      location: 'locationValue1',
      description: 'descriptionValue1',
      path: 'pathValue1',
    };

    const communities = [post1];
    const mockJsonPromise = Promise.resolve(communities);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
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
    screen.getByText(post1.name);
    screen.getByText(post1.location);
    screen.getByText(post1.description);
  });
});
