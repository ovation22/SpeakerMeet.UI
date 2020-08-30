import React from 'react';
import { act } from '@testing-library/react';
import { renderWithRouter } from '../../utils/test.utilitiy';
import Communities from '../Communities';

describe('Communities', () => {
  it('should show communities', async () => {
    // arrange
    const communities = [
      {
        id: 'idValue',
        name: 'nameValue',
        slug: 'slugValue',
        location: 'locationValue',
        description: 'descriptionValue',
      },
    ];
    const mockJsonPromise = Promise.resolve(communities);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const tree = <Communities />;

    // act
    await act(async () => renderWithRouter(tree));

    // assert
  });
});
