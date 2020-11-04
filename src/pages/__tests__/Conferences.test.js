import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { act, screen } from '@testing-library/react';
import { render } from '../../utils/test.utilitiy';
import Conferences from '../Conferences';
import * as useConferences from '../../hooks/useConferences';

describe('Conferences', () => {
  it('should render expected fields from list of returned conferences', async () => {
    // arrange
    const error = null;
    const isLoaded = true;
    const conferences = [
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
    const useConferencesHook = () => {
      return {
        error,
        isLoaded,
        conferences,
      };
    };
    jest.spyOn(useConferences, 'default').mockImplementationOnce(useConferencesHook);

    const tree = (
      <HelmetProvider>
        <Conferences />
      </HelmetProvider>
    );

    // act
    await act(async () => render(tree));

    // assert
    screen.getByText('Find a Conference');

    conferences.forEach(conference => {
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
