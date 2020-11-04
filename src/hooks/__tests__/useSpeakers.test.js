import { renderHook, act } from '@testing-library/react-hooks';
import useSpeakers from '../useSpeakers';
import routes from '../../constants/routes';
import * as telemetryService from '../../services/telemetry.service';
import endpoints from '../../constants/endpoints';

const mockHistoryPush = jest.fn();
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('useSpeakers', () => {
  const itemsPage = 12;
  const sortOrder = null;

  beforeEach(() => jest.resetAllMocks());

  it('should behave correctly given changePage is called with page 1', async () => {
    // arrange
    const speakerResult = {
      paginationInfo: {
        totalPages: 100,
      },
      speakers: [
        {
          id: 'idValue1',
          description: 'descriptionValue1',
          location: 'locationValue1',
          name: 'nameValue1',
          slug: 'slugValue1',
        },
      ],
    };
    const mockJsonPromise = Promise.resolve(speakerResult);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const expectedSpeakers = [
      {
        ...speakerResult.speakers[0],
        path: `${routes.speakers.path}/${speakerResult.speakers[0].slug}`,
      },
    ];
    const expectedEndpoint = `${endpoints.speakers}?pageIndex=0&itemsPage=${itemsPage}&direction=${sortOrder}`;

    // act
    const { result, waitForNextUpdate } = renderHook(() => useSpeakers());

    // assert
    expect(result.current.speakers).toEqual([]);
    expect(result.current.isLoaded).toBe(false);

    act(() => result.current.changePage(1));
    await waitForNextUpdate();

    // assert
    expect(global.fetch).toHaveBeenCalledWith(expectedEndpoint);

    expect(result.current.pageNumber).toEqual(1);
    expect(result.current.speakers).toEqual(expectedSpeakers);
    expect(result.current.isLoaded).toBe(true);
  });

  it('should behave correctly given request fails', async () => {
    // arrange
    const error = new Error('Error Mock');
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(error);
    jest.spyOn(telemetryService, 'trackException');

    // act
    const { result, waitForNextUpdate } = renderHook(() => useSpeakers());

    act(() => result.current.changePage(1));

    // assert
    expect(result.current.speakers).toEqual([]);
    expect(result.current.isLoaded).toBe(false);

    await waitForNextUpdate();

    expect(result.current.speakers).toEqual([]);
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

  it('should call speakers endpoint with passed pageIndex on changePage', async () => {
    // arrange

    const paginationInfo = 'paginationInfoValue';
    const paginationInfo2 = 'paginationInfo2Value';
    const speakers = [];
    const expectedEndpoint = `${endpoints.speakers}?pageIndex=0&itemsPage=${itemsPage}&direction=${sortOrder}`;

    mockFetchOnce({ paginationInfo, speakers });
    mockFetchOnce({ paginationInfo: paginationInfo2, speakers });

    // act
    const { result, waitForNextUpdate } = renderHook(() => useSpeakers());

    // act
    act(() => result.current.changePage(1));
    await waitForNextUpdate();

    // assert
    expect(global.fetch).toHaveBeenCalledWith(expectedEndpoint);
  });

  it('should call speakers endpoint with passed sortOrder on changeSortOrder', async () => {
    // arrange

    const paginationInfo = 'paginationInfoValue';
    const paginationInfo2 = 'paginationInfo2Value';
    const sortOrderAsc = 'asc';
    const sortOrderDesc = 'desc';

    const speakers = [];

    const baseUrl = `${endpoints.speakers}?pageIndex=0&itemsPage=${itemsPage}`;
    const expectedEndpoint = `${baseUrl}&direction=${sortOrder}`;
    const expectedEndpointAsc = `${baseUrl}&direction=${sortOrderAsc}`;
    const expectedEndpointDesc = `${baseUrl}&direction=${sortOrderDesc}`;

    mockFetchOnce({ paginationInfo, speakers });
    mockFetchOnce({ paginationInfo: paginationInfo2, speakers });

    // act
    const { result, waitForNextUpdate } = renderHook(() => useSpeakers());

    act(() => result.current.changePage(1));

    await waitForNextUpdate();

    // assert
    expect(global.fetch).toHaveBeenNthCalledWith(1, expectedEndpoint);

    // act - asc sort
    act(() => result.current.changeSortOrder('asc'));
    await waitForNextUpdate();

    // assert
    expect(result.current.sortOrder).toEqual('asc');
    expect(global.fetch).toHaveBeenNthCalledWith(2, expectedEndpointAsc);

    // act - desc sort
    act(() => result.current.changeSortOrder('desc'));
    await waitForNextUpdate();

    // assert
    expect(result.current.sortOrder).toEqual('desc');
    expect(global.fetch).toHaveBeenNthCalledWith(3, expectedEndpointDesc);
  });

  it('return totalPages as 0 given paginationInfo is null', async () => {
    // arrange
    const paginationInfo = null;
    const speakers = null;
    mockFetchOnce({ paginationInfo, speakers });

    // act
    const { result } = renderHook(() => useSpeakers());

    // assert
    expect(result.current.totalPages).toEqual(0);
  });

  it('return pagination.totalPages given paginationInfo is not null', async () => {
    // arrange
    const paginationInfo = { totalPages: 'totalPagesValue' };
    const speakers = [];
    mockFetchOnce({ paginationInfo, speakers });

    // act
    const { result, waitForNextUpdate } = renderHook(() => useSpeakers());

    // assert
    expect(result.current.totalPages).toEqual(0);

    act(() => result.current.changePage(1));

    await waitForNextUpdate();

    // act - pagination.totalPages
    expect(result.current.totalPages).toEqual(paginationInfo.totalPages);
  });
});
