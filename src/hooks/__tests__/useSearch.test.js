import { act, renderHook } from '@testing-library/react-hooks';
import useSearch from '../useSearch';
import routes from '../../constants/routes';
import * as telemetryService from '../../services/telemetry.service';

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
        {
          document: {
            type: 'Speaker',
            slug: 'slugValue',
          },
          score: 4,
        },
        {
          document: {
            type: 'Communities',
            slug: 'slugValue',
          },
          score: 6,
        },
        {
          document: {
            type: 'Conference',
            slug: 'slugValue',
          },
          score: 5,
        },
      ],
    };
    const mockJsonPromise = Promise.resolve(searchResults);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const sortedResults = searchResults.results.sort((a, b) => (a.score < b.score ? 1 : -1));

    const getPath = document => {
      return `${
        // eslint-disable-next-line no-nested-ternary
        document.type === 'Speaker'
          ? routes.speakers.path
          : document.type === 'Conference'
          ? routes.conferences.path
          : routes.communities.path
      }/${document.slug}`;
    };

    const expectedResults = sortedResults.map(result => {
      return {
        type: result.document.type,
        slug: result.document.slug,
        score: result.score,
        path: getPath(result.document),
      };
    });
    const expectedResultsFirstPage = [...expectedResults].slice(0, 4);

    // act
    const { result, waitForNextUpdate } = renderHook(() => useSearch());

    // assert
    expect(result.current.results).toEqual([]);
    expect(result.current.isLoaded).toBe(false);
    expect(result.current.totalPages).toEqual(0);

    // act
    act(() => result.current.search('searchTerm'));

    await waitForNextUpdate();

    expect(result.current.results).toEqual(expectedResultsFirstPage);
    expect(result.current.isLoaded).toBe(true);
    expect(result.current.totalPages).toEqual(2);
  });

  it('should behave correctly given request fails', async () => {
    // arrange
    const error = new Error('Error Mock');
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(error);
    jest.spyOn(telemetryService, 'trackException');

    // act
    const { result, waitForNextUpdate } = renderHook(() => useSearch());

    // assert
    expect(result.current.results).toEqual([]);
    expect(result.current.isLoaded).toBe(false);

    // act
    act(() => result.current.search('searchTerm'));

    await waitForNextUpdate();

    expect(result.current.results).toEqual([]);
    expect(result.current.isLoaded).toBe(true);
    expect(result.current.error).toEqual(error);

    expect(telemetryService.trackException).toHaveBeenCalledWith(error);
  });
});
