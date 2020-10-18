import { renderHook } from '@testing-library/react-hooks';
import routes from '../../constants/routes';
import useCommunities from '../useCommunities';
import * as telemetryService from '../../services/telemetry.service';

describe('useCommunities', () => {
  it('should behave correctly given request succeeds', async () => {
    // arrange
    const communitiesResult = {
      communities: [
        {
          id: 'idValue',
          name: 'nameValue',
          slug: 'slugValue',
          location: 'locationValue',
          description: 'descriptionValue',
        },
      ],
    };
    const mockJsonPromise = Promise.resolve(communitiesResult);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const expectedSpeakers = [
      {
        ...communitiesResult.communities[0],
        path: `${routes.communities.path}/${communitiesResult.communities[0].slug}`,
      },
    ];

    // act
    const { result, waitForNextUpdate } = renderHook(() => useCommunities());

    // assert
    expect(result.current.communities).toEqual([]);
    expect(result.current.isLoaded).toBe(false);

    await waitForNextUpdate();

    expect(result.current.communities).toEqual(expectedSpeakers);
    expect(result.current.isLoaded).toBe(true);
  });

  it('should behave correctly given request fails', async () => {
    // arrange
    const error = new Error('Error Mock');
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(error);
    jest.spyOn(telemetryService, 'trackException');

    // act
    const { result, waitForNextUpdate } = renderHook(() => useCommunities());

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
