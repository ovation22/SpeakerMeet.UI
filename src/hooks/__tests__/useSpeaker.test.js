import { renderHook } from '@testing-library/react-hooks';
import * as useRequest from '../useRequest';
import useSpeaker from '../useSpeaker';

describe('useSpeaker', () => {
  const speakerId = 'speakerIdValue';

  it('should return expected from useRequest', async () => {
    // arrange
    const data = { foo: 'bar' };

    const useRequestHook = {
      data,
      isLoaded: true,
      error: 'errorValue',
    };
    jest.spyOn(useRequest, 'default').mockImplementation(() => useRequestHook);

    // act
    const { result } = renderHook(() => useSpeaker(speakerId));

    // assert
    expect(result.current.speaker).toEqual(data);
    expect(result.current.isLoaded).toEqual(useRequestHook.isLoaded);
    expect(result.current.error).toEqual(useRequestHook.error);
  });

  it('should return expected from useRequest given data is null', async () => {
    // arrange
    const data = null;

    const useRequestHook = {
      data,
      isLoaded: true,
      error: 'errorValue',
    };
    jest.spyOn(useRequest, 'default').mockImplementation(() => useRequestHook);

    // act
    const { result } = renderHook(() => useSpeaker(speakerId));

    // assert
    expect(result.current.speaker).toEqual(data);
    expect(result.current.isLoaded).toEqual(useRequestHook.isLoaded);
    expect(result.current.error).toEqual(useRequestHook.error);
  });
});
