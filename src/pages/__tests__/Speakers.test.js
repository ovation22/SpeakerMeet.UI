import React from 'react';
import Speakers from '../Speakers';
import * as useSpeakers from '../../hooks/useSpeakers';
import { render } from '../../utils/test.utilitiy';

describe('Speakers', () => {
  it('should render loading', () => {
    // arrange
    const useSpeakersHook = () => {
      return {
        error: null,
        isLoaded: false,
        speakers: [],
        sortOrder: null,
        changeSortOrder: jest.fn(),
        changePage: jest.fn(),
        totalPages: 10,
        pageNumber: 1,
      };
    };
    jest.spyOn(useSpeakers, 'default').mockImplementationOnce(useSpeakersHook);

    // act
    const { getByTestId } = render(<Speakers />);

    // assert
    getByTestId('loading');
  });

  it('should render speakers', () => {
    // arrange
    const speakers = [
      {
        id: 'idValue1',
        description: 'descriptionValue1',
        location: 'locationValue1',
        name: 'nameValue1',
        slug: 'slugValue1',
        path: 'path1',
      },
    ];

    const useSpeakersHook = () => {
      return {
        error: null,
        isLoaded: true,
        speakers,
        sortOrder: null,
        changeSortOrder: jest.fn(),
        changePage: jest.fn(),
        totalPages: 10,
        pageNumber: 1,
      };
    };

    jest.spyOn(useSpeakers, 'default').mockImplementationOnce(useSpeakersHook);

    // act
    const { getByText } = render(<Speakers />);

    // assert
    getByText(speakers[0].name);
  });

  it('should render the error', () => {
    // arrange
    const errorMock = new Error('errorMessageValue');
    const useSpeakersHook = () => {
      return {
        error: errorMock,
        isLoaded: true,
        speakers: [],
        sortOrder: null,
        changeSortOrder: jest.fn(),
        changePage: jest.fn(),
        totalPages: 10,
        pageNumber: 1,
      };
    };

    jest.spyOn(useSpeakers, 'default').mockImplementationOnce(useSpeakersHook);

    // act
    const { getByTestId } = render(<Speakers />);

    // assert
    expect(getByTestId('snackError')).toContainHTML(errorMock.message);
  });
});
