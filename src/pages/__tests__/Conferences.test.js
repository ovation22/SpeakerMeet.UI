import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '../../utils/test.utilitiy';
import Conferences from '../Conferences';
import * as useConferences from '../../hooks/useConferences';

describe('Conferences', () => {
  it('should render loading', () => {
    // arrange
    const useConferencesHook = () => {
      return {
        error: null,
        isLoaded: false,
        conferences: [],
        sortOrder: null,
        changeSortOrder: jest.fn(),
        changePage: jest.fn(),
        totalPages: 0,
      };
    };
    jest.spyOn(useConferences, 'default').mockImplementationOnce(useConferencesHook);

    const tree = (
      <HelmetProvider>
        <Conferences />
      </HelmetProvider>
    );

    // act
    const { getByTestId } = render(tree);

    // assert
    getByTestId('loading');
  });

  it('should render expected fields from list of returned conferences', () => {
    // arrange
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
        error: null,
        isLoaded: true,
        conferences,
        sortOrder: null,
        changeSortOrder: jest.fn(),
        changePage: jest.fn(),
        totalPages: 0,
      };
    };
    jest.spyOn(useConferences, 'default').mockImplementationOnce(useConferencesHook);

    const tree = (
      <HelmetProvider>
        <Conferences />
      </HelmetProvider>
    );

    // act
    const { getByText } = render(tree);

    // assert
    getByText('Find a Conference');

    conferences.forEach(conference => {
      getByText(conference.name);
      getByText(conference.location);
      getByText(conference.description);
    });
  });

  it('should render error message from failed fetch', async () => {
    // arrange
    const errorMock = new Error('errorMessageValue');
    const useConferencesHook = () => {
      return {
        error: errorMock,
        isLoaded: true,
        conferences: [],
        sortOrder: null,
        changeSortOrder: jest.fn(),
        changePage: jest.fn(),
        totalPages: 0,
      };
    };
    jest.spyOn(useConferences, 'default').mockImplementationOnce(useConferencesHook);

    const tree = (
      <HelmetProvider>
        <Conferences />
      </HelmetProvider>
    );

    // act
    const { getByTestId } = render(tree);

    // assert
    expect(getByTestId('snackError')).toContainHTML(errorMock.message);
  });
});
