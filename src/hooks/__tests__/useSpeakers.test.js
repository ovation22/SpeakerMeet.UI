import { renderHook, act } from '@testing-library/react-hooks';
import useSpeakers from '../useSpeakers';
import routes from '../../constants/routes';
import * as telemetryService from '../../services/telemetry.service';
import endpoints from '../../constants/endpoints';

describe('useSpeakers', () => {
  const itemsPage = 12;
  const sortOrder = null;

  beforeEach(() => jest.resetAllMocks());

  it('should behave correctly given request succeeds', async () => {
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
    const expectedEndpoint = `${endpoints.speakers}?pageIndex=0&itemsPage=${itemsPage}&sortOrder=${sortOrder}`;

    // act
    const { result, waitForNextUpdate } = renderHook(() => useSpeakers());

    // assert
    expect(result.current.speakers).toEqual([]);
    expect(result.current.isLoaded).toBe(false);

    await waitForNextUpdate();

    expect(result.current.speakers).toEqual(expectedSpeakers);
    expect(result.current.isLoaded).toBe(true);
    expect(global.fetch).toHaveBeenCalledWith(expectedEndpoint);
  });

  it('should behave correctly given request fails', async () => {
    // arrange
    const error = new Error('Error Mock');
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(error);
    jest.spyOn(telemetryService, 'trackException');

    // act
    const { result, waitForNextUpdate } = renderHook(() => useSpeakers());

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
    const expectedEndpoint = `${endpoints.speakers}?pageIndex=0&itemsPage=${itemsPage}&sortOrder=${sortOrder}`;
    const expectedEndpointNext = `${endpoints.speakers}?pageIndex=0&itemsPage=${itemsPage}&sortOrder=${sortOrder}`;

    mockFetchOnce({ paginationInfo, speakers });
    mockFetchOnce({ paginationInfo: paginationInfo2, speakers });

    // act
    const { result, waitForNextUpdate } = renderHook(() => useSpeakers());
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
    const expectedEndpoint = `${endpoints.speakers}?pageIndex=0&itemsPage=${itemsPage}&sortOrder=${sortOrder}`;
    const expectedEndpointAsc = `${endpoints.speakers}?pageIndex=0&itemsPage=${itemsPage}&sortOrder=${sortOrderAsc}`;
    const expectedEndpointDesc = `${endpoints.speakers}?pageIndex=0&itemsPage=${itemsPage}&sortOrder=${sortOrderDesc}`;

    mockFetchOnce({ paginationInfo, speakers });
    mockFetchOnce({ paginationInfo: paginationInfo2, speakers });

    // act
    const { result, waitForNextUpdate } = renderHook(() => useSpeakers());
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

    expect(global.fetch).toHaveBeenCalledWith(expectedEndpointDesc);
  });
});
