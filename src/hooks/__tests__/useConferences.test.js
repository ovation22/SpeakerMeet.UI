import { renderHook } from '@testing-library/react-hooks';
import routes from '../../constants/routes';
import useConferences from '../useConferences';
import * as telemetryService from '../../services/telemetry.service';

describe('useConferences', () => {
  it('should behave correctly given request succeeds', async () => {
    // arrange
    const conferencesResult = {
      conferences: [
        {
          id: 'idValue',
          name: 'nameValue',
          slug: 'slugValue',
          location: 'locationValue',
          description: 'descriptionValue',
        },
      ],
    };
    const mockJsonPromise = Promise.resolve(conferencesResult);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const expectedSpeakers = [
      {
        ...conferencesResult.conferences[0],
        path: `${routes.conferences.path}/${conferencesResult.conferences[0].slug}`,
      },
    ];

    // act
    const { result, waitForNextUpdate } = renderHook(() => useConferences());

    // assert
    expect(result.current.conferences).toEqual([]);
    expect(result.current.isLoaded).toBe(false);

    await waitForNextUpdate();

    expect(result.current.conferences).toEqual(expectedSpeakers);
    expect(result.current.isLoaded).toBe(true);
  });

  it('should behave correctly given request fails', async () => {
    // arrange
    const error = new Error('Error Mock');
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(error);
    jest.spyOn(telemetryService, 'trackException');

    // act
    const { result, waitForNextUpdate } = renderHook(() => useConferences());

    // assert
    expect(result.current.conferences).toEqual([]);
    expect(result.current.isLoaded).toBe(false);

    await waitForNextUpdate();

    expect(result.current.conferences).toEqual([]);
    expect(result.current.isLoaded).toBe(true);
    expect(result.current.error).toEqual(error);

    expect(telemetryService.trackException).toHaveBeenCalledWith(error);
  });
});
