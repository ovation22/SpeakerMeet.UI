import React from 'react';
import Speakers from '../Speakers';
import * as useSpeakersHook from '../../hooks/useSpeakers';
import { render } from '../../utils/test.utilitiy';

describe('Speakers', () => {
  it('should render loading', () => {
    // arrange
    const hook = { isLoaded: false };
    jest.spyOn(useSpeakersHook, 'default').mockImplementationOnce(() => hook);

    // act
    const { getByTestId } = render(<Speakers />);

    // assert
    getByTestId('loading');
  });

  it('should render speakers', () => {
    // arrange
    const hook = {
      speakers: [
        {
          id: 'idValue1',
          description: 'descriptionValue1',
          location: 'locationValue1',
          name: 'nameValue1',
          slug: 'slugValue1',
          path: 'path1',
        },
      ],
      isLoaded: true,
    };
    jest.spyOn(useSpeakersHook, 'default').mockImplementationOnce(() => hook);

    // act
    const { getByText } = render(<Speakers />);

    // assert
    getByText(hook.speakers[0].name);
  });

  it('should render the error', () => {
    // arrange
    const hook = {
      speakers: [],
      error: {
        message: 'errorMessage',
      },
      isLoaded: true,
    };
    jest.spyOn(useSpeakersHook, 'default').mockImplementationOnce(() => hook);

    // act
    const { getByTestId } = render(<Speakers />);

    // assert
    expect(getByTestId('snackError')).toContainHTML(hook.error.message);
  });
});
