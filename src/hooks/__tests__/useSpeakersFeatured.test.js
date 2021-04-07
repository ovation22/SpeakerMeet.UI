import { renderHook } from '@testing-library/react-hooks';
import routes from '../../constants/routes';
import * as useRequest from '../useRequest';
import useSpeakersFeatured from '../useSpeakersFeatured';

describe('useSpeakersFeatured', () => {
  it('should return expected from useRequest', async () => {
    // arrange
    const speaker = { slug: 'slugValue' };
    const data = [speaker];
    const expectedSpeakers = [
      {
        slug: 'slugValue',
        path: `${routes.speakers.path}/${speaker.slug}`,
      },
    ];

    const useRequestHook = {
      data,
      isLoaded: true,
      error: 'errorValue',
    };
    jest.spyOn(useRequest, 'default').mockImplementation(() => useRequestHook);

    // act
    const { result } = renderHook(() => useSpeakersFeatured());

    // assert
    expect(result.current.speakers).toEqual(expectedSpeakers);
    expect(result.current.isLoaded).toEqual(useRequestHook.isLoaded);
    expect(result.current.error).toEqual(useRequestHook.error);
  });

  it('should return expected from useRequest given data is null', async () => {
    // arrange
    const data = null;
    const expectedSpeakers = [];

    const useRequestHook = {
      data,
      isLoaded: true,
      error: 'errorValue',
    };
    jest.spyOn(useRequest, 'default').mockImplementation(() => useRequestHook);

    // act
    const { result } = renderHook(() => useSpeakersFeatured());

    // assert
    expect(result.current.speakers).toEqual(expectedSpeakers);
    expect(result.current.isLoaded).toEqual(useRequestHook.isLoaded);
    expect(result.current.error).toEqual(useRequestHook.error);
  });
});
