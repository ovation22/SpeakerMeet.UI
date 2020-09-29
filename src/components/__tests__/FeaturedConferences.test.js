import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FeaturedConferences from '../FeaturedConferences';
import * as useConferencesFeatured from '../../hooks/useConferencesFeatured';

describe('FeaturedConferences', () => {
  it('should render loading', () => {
    // arrange
    const hook = { isLoaded: false };
    jest.spyOn(useConferencesFeatured, 'default').mockImplementationOnce(() => hook);

    const tree = <FeaturedConferences />;
    // act
    const { getByTestId } = render(tree);

    // assert
    getByTestId('loading');
  });

  it('should render conferences', () => {
    // arrange
    const hook = {
      isLoaded: true,
      conferences: [
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
    jest.spyOn(useConferencesFeatured, 'default').mockImplementationOnce(() => hook);

    const tree = (
      <BrowserRouter>
        <FeaturedConferences />
      </BrowserRouter>
    );
    // act
    const { getByText, getByTestId } = render(tree);

    // assert
    hook.conferences.forEach(conference => {
      getByText(conference.name);
      getByText(conference.location);
      getByText(conference.description);

      const expectedPath = `/${conference.path}`;
      expect(getByTestId(`profile-${conference.name}`)).toHaveAttribute('href', expectedPath);
    });
  });

  it('should render the error', () => {
    // arrange
    const hook = { isLoaded: true, conferences: [], error: { message: 'errorMessage' } };
    jest.spyOn(useConferencesFeatured, 'default').mockImplementationOnce(() => hook);

    const tree = <FeaturedConferences />;
    // act
    const { getByTestId } = render(tree);

    // assert
    expect(getByTestId('snackError')).toContainHTML(hook.error.message);
  });
});
