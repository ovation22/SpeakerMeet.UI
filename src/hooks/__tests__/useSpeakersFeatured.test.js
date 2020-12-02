import { renderHook } from '@testing-library/react-hooks';
import routes from '../../constants/routes';
import useSpeakersFeatured from '../useSpeakersFeatured';
import * as telemetryService from '../../services/telemetry.service';

describe('useSpeakersFeatured', () => {
  it('should behave correctly given request succeeds', async () => {
    // arrange
    const speakers = [
      {
        id: 'idValue',
        name: 'nameValue',
        slug: 'slugValue',
        location: 'locationValue',
        description: 'descriptionValue',
      },
    ];
    const mockJsonPromise = Promise.resolve(speakers);
    const mockFetchPromise = Promise.resolve({
      ok: true,
      status: 200,
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const expectedSpeakers = [
      {
        ...speakers[0],
        path: `${routes.speakers.path}/${speakers[0].slug}`,
      },
    ];

    // act
    const { result, waitForNextUpdate } = renderHook(() => useSpeakersFeatured());

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
    const { result, waitForNextUpdate } = renderHook(() => useSpeakersFeatured());

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
