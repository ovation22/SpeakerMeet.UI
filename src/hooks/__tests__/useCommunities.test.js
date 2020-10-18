import { act, renderHook } from '@testing-library/react-hooks';
import routes from '../../constants/routes';
import useCommunities from '../useCommunities';
import * as telemetryService from '../../services/telemetry.service';
import endpoints from '../../constants/endpoints';

describe('useCommunities', () => {
  const itemsPage = 12;
  const sortOrder = null;

  beforeEach(() => jest.resetAllMocks());

  it('should behave correctly given request succeeds', async () => {
    // arrange
    const communitiesResult = {
      paginationInfo: {
        totalPages: 100,
      },
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
    expect(result.current.totalPages).toBe(0);

    await waitForNextUpdate();

    expect(result.current.communities).toEqual(expectedSpeakers);
    expect(result.current.isLoaded).toBe(true);
    expect(result.current.totalPages).toBe(communitiesResult.paginationInfo.totalPages);
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

  const mockFetchOnce = value => {
    const mockJsonPromise = Promise.resolve(value);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetchPromise);
  };

  it('should call communities endpoint with passed pageIndex on changePage', async () => {
    // arrange

    const paginationInfo = 'paginationInfoValue';
    const paginationInfo2 = 'paginationInfo2Value';
    const speakers = [];
    const expectedEndpoint = `${endpoints.communities}?pageIndex=0&itemsPage=${itemsPage}&direction=${sortOrder}`;
    const expectedEndpointNext = `${endpoints.communities}?pageIndex=0&itemsPage=${itemsPage}&direction=${sortOrder}`;

    mockFetchOnce({ paginationInfo, speakers });
    mockFetchOnce({ paginationInfo: paginationInfo2, speakers });

    // act
    const { result, waitForNextUpdate } = renderHook(() => useCommunities());
    await waitForNextUpdate();

    // assert
    expect(global.fetch).toHaveBeenCalledWith(expectedEndpoint);

    // act
    act(() => result.current.changePage(2));
    await waitForNextUpdate();

    expect(global.fetch).toHaveBeenCalledWith(expectedEndpointNext);
  });

  it('should call speakers endpoint with passed sortOrder on changeSortOrder', async () => {
    // arrange

    const paginationInfo = 'paginationInfoValue';
    const paginationInfo2 = 'paginationInfo2Value';
    const sortOrderAsc = 'asc';
    const sortOrderDesc = 'desc';

    const speakers = [];
    const expectedEndpoint = `${endpoints.communities}?pageIndex=0&itemsPage=${itemsPage}&direction=${sortOrder}`;
    const expectedEndpointAsc = `${endpoints.communities}?pageIndex=0&itemsPage=${itemsPage}&direction=${sortOrderAsc}`;
    const expectedEndpointDesc = `${endpoints.communities}?pageIndex=0&itemsPage=${itemsPage}&direction=${sortOrderDesc}`;

    mockFetchOnce({ paginationInfo, speakers });
    mockFetchOnce({ paginationInfo: paginationInfo2, speakers });

    // act
    const { result, waitForNextUpdate } = renderHook(() => useCommunities());
    await waitForNextUpdate();

    // assert
    expect(global.fetch).toHaveBeenCalledWith(expectedEndpoint);

    // act - asc sort
    act(() => result.current.changeSortOrder('asc'));
    await waitForNextUpdate();

    expect(global.fetch).toHaveBeenCalledWith(expectedEndpointAsc);

    // act - desc sort
    act(() => result.current.changeSortOrder('desc'));
    await waitForNextUpdate();

    expect(result.current.sortOrder).toEqual('desc');
    expect(global.fetch).toHaveBeenCalledWith(expectedEndpointDesc);
  });
});
