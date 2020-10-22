import { act, renderHook } from '@testing-library/react-hooks';
import useSearch from '../useSearch';
import routes from '../../constants/routes';

describe('useSearch', () => {
  it('should behave correctly given request succeeds', async () => {
    // arrange
    const searchResults = {
      results: [
        {
          document: {
            type: 'Speaker',
            slug: 'slugValue',
          },
          score: 1,
        },
        {
          document: {
            type: 'Communities',
            slug: 'slugValue',
          },
          score: 3,
        },
        {
          document: {
            type: 'Conference',
            slug: 'slugValue',
          },
          score: 2,
        },
      ],
    };
    const mockJsonPromise = Promise.resolve(searchResults);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const speaker = searchResults.results[0];
    const community = searchResults.results[1];
    const conference = searchResults.results[2];

    const expectedResults = [
      {
        type: community.document.type,
        slug: community.document.slug,
        score: community.score,
        path: `${routes.communities.path}/${community.document.slug}`,
      },
      {
        type: conference.document.type,
        slug: conference.document.slug,
        score: conference.score,
        path: `${routes.conferences.path}/${conference.document.slug}`,
      },
      {
        type: speaker.document.type,
        slug: speaker.document.slug,
        score: speaker.score,
        path: `${routes.speakers.path}/${speaker.document.slug}`,
      },
    ];

    // act
    const { result, waitForNextUpdate } = renderHook(() => useSearch());

    // assert
    expect(result.current.results).toEqual([]);
    expect(result.current.isLoaded).toBe(false);

    // act
    act(() => result.current.search('searchTerm'));

    await waitForNextUpdate();

    expect(result.current.results).toEqual(expectedResults);
    expect(result.current.isLoaded).toBe(true);
  });
});
