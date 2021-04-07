import { renderHook } from '@testing-library/react-hooks';
import useRequest from '../useRequest';
import * as telemetryService from '../../services/telemetry.service';

describe('useRequest', () => {
  const url = 'urlValue';

  it('should return expected data given success', async () => {
    // arrange
    const expectedData = { foo: 'bar' };
    const mockJsonPromise = Promise.resolve(expectedData);
    const mockFetchPromise = Promise.resolve({
      ok: true,
      status: 200,
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    // act
    const { result, waitForNextUpdate } = renderHook(() => useRequest(url));

    // assert
    expect(result.current.data).toBeUndefined();
    expect(result.current.isLoaded).toBeFalsy();

    await waitForNextUpdate();

    expect(result.current.data).toEqual(expectedData);
    expect(result.current.isLoaded).toBeTruthy();
  });

  it('should return expected error given failure', async () => {
    // arrange
    const expectedError = new Error('Error Mock');
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(expectedError);
    jest.spyOn(telemetryService, 'trackException');

    // act
    const { result, waitForNextUpdate } = renderHook(() => useRequest(url));

    // assert
    expect(result.current.data).toBeUndefined();
    expect(result.current.isLoaded).toEqual(false);

    await waitForNextUpdate();

    expect(result.current.data).toBeUndefined();
    expect(result.current.isLoaded).toEqual(true);
    expect(result.current.error).toEqual(expectedError);
  });

  it('should return expected error given response is not ok', async () => {
    // arrange
    const expectedData = { foo: 'bar' };
    const expectedError = new Error(expectedData);

    const mockJsonPromise = Promise.resolve(expectedData);
    const mockFetchPromise = Promise.resolve({
      ok: false,
      status: 200,
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    // act
    const { result, waitForNextUpdate } = renderHook(() => useRequest(url));

    // assert
    expect(result.current.data).toBeUndefined();
    expect(result.current.isLoaded).toEqual(false);

    await waitForNextUpdate();

    expect(result.current.data).toBeUndefined();
    expect(result.current.isLoaded).toEqual(true);
    expect(result.current.error).toEqual(expectedError);
  });
});
