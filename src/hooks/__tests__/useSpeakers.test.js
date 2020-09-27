import { renderHook } from '@testing-library/react-hooks';
import { useSpeakers } from '../useSpeakers';
import routes from '../../constants/routes';
import * as telemetryService from '../../services/telemetry.service';

describe('useSpeakers', () => {
  it('should behave correctly given request succeeds', async () => {
    // arrange
    const speakerResult = [
      {
        id: 'idValue1',
        description: 'descriptionValue1',
        location: 'locationValue1',
        name: 'nameValue1',
        slug: 'slugValue1',
      },
    ];
    const mockJsonPromise = Promise.resolve(speakerResult);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const expectedSpeakers = [
      { ...speakerResult[0], path: `${routes.speakers.path}/${speakerResult[0].slug}` },
    ];

    // act
    const { result, waitForNextUpdate } = renderHook(() => useSpeakers());

    // assert
    expect(result.current.speakers).toEqual([]);
    expect(result.current.isLoaded).toBe(false);

    await waitForNextUpdate();

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

    // assert
    expect(result.current.speakers).toEqual([]);
    expect(result.current.isLoaded).toBe(false);

    await waitForNextUpdate();

    expect(result.current.speakers).toEqual([]);
    expect(result.current.isLoaded).toBe(true);
    expect(result.current.error).toEqual(error);

    expect(telemetryService.trackException).toHaveBeenCalledWith(error);
  });
});
