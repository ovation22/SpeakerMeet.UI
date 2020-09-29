import { renderHook } from '@testing-library/react-hooks';
import useCommunitiesFeatured from '../useCommunitiesFeatured';
import routes from '../../constants/routes';
import * as telemetryService from '../../services/telemetry.service';

describe('useCommunitiesFeatured', () => {
  it('should load featured communities given request success', async () => {
    // arrange
    const community = { path: 'pathValue' };
    const expectedCommunities = [
      { ...community, path: `${routes.communities.path}/${community.slug}` },
    ];
    const mockJsonPromise = Promise.resolve([community]);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    // act
    const { result, waitForNextUpdate } = renderHook(() => useCommunitiesFeatured());

    // assert
    expect(result.current.communities).toEqual([]);
    expect(result.current.isLoaded).toBe(false);

    await waitForNextUpdate();

    expect(result.current.communities).toEqual(expectedCommunities);
    expect(result.current.isLoaded).toBe(true);
  });

  it('should return error given request failed', async () => {
    // arrange
    const error = new Error('Error Mock');
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(error);
    jest.spyOn(telemetryService, 'trackException');

    // act
    const { result, waitForNextUpdate } = renderHook(() => useCommunitiesFeatured());

    // assert
    expect(result.current.communities).toEqual([]);
    expect(result.current.isLoaded).toBe(false);

    await waitForNextUpdate();

    expect(result.current.communities).toEqual([]);
    expect(result.current.isLoaded).toBe(true);
    expect(result.current.error).toEqual(error);

    expect(telemetryService.trackException).toHaveBeenCalledWith(error);
  });
});
