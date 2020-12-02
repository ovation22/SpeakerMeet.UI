import { renderHook } from '@testing-library/react-hooks';
import useConferencesFeatured from '../useConferencesFeatured';
import routes from '../../constants/routes';

describe('useConferencesFeatured', () => {
  it('should should behave correctly given request succeeds', async () => {
    // arrange
    const conferencesResult = [{ path: 'pathValue' }];
    const mockJsonPromise = Promise.resolve(conferencesResult);
    const mockFetchPromise = Promise.resolve({
      ok: true,
      status: 200,
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    // act
    const { result, waitForNextUpdate } = renderHook(() => useConferencesFeatured());

    const expectedConferences = [
      { ...conferencesResult[0], path: `${routes.conferences.path}/${conferencesResult[0].slug}` },
    ];
    // assert
    expect(result.current.conferences).toEqual([]);
    expect(result.current.isLoaded).toBe(false);

    await waitForNextUpdate();

    expect(result.current.conferences).toEqual(expectedConferences);
    expect(result.current.isLoaded).toBe(true);
  });

  it('should behave correctly given request fails', async () => {
    // arrange
    const error = 'errorValue';
    jest.spyOn(global, 'fetch').mockRejectedValue(error);

    // act
    const { result, waitForNextUpdate } = renderHook(() => useConferencesFeatured());

    // assert
    expect(result.current.conferences).toEqual([]);
    expect(result.current.isLoaded).toBe(false);

    await waitForNextUpdate();

    expect(result.current.conferences).toEqual([]);
    expect(result.current.isLoaded).toBe(true);
    expect(result.current.error).toEqual(error);
  });
});
