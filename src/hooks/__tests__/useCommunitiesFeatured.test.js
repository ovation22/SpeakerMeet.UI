import { renderHook } from '@testing-library/react-hooks';
import useCommunitiesFeatured from '../useCommunitiesFeatured';
import routes from '../../constants/routes';

describe('useCommunitiesFeatured', () => {
  it('should behave correctly given request succeeds', async () => {
    // arrange
    const communitiesResult = [{ path: 'pathValue' }];
    const mockJsonPromise = Promise.resolve(communitiesResult);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    // act
    const { result, waitForNextUpdate } = renderHook(() => useCommunitiesFeatured());

    const expectedCommunities = [
      { ...communitiesResult[0], path: `${routes.communities.path}/${communitiesResult[0].slug}` },
    ];
    // assert
    expect(result.current.communities).toEqual([]);
    expect(result.current.isLoaded).toBe(false);

    await waitForNextUpdate();

    expect(result.current.communities).toEqual(expectedCommunities);
    expect(result.current.isLoaded).toBe(true);
  });

  it('should behave correctly given request fails', async () => {
    // arrange
    const error = 'errorValue';
    jest.spyOn(global, 'fetch').mockRejectedValue(error);

    // act
    const { result, waitForNextUpdate } = renderHook(() => useCommunitiesFeatured());

    // assert
    expect(result.current.communities).toEqual([]);
    expect(result.current.isLoaded).toBe(false);

    await waitForNextUpdate();

    expect(result.current.communities).toEqual([]);
    expect(result.current.isLoaded).toBe(true);
    expect(result.current.error).toEqual(error);
  });
});
