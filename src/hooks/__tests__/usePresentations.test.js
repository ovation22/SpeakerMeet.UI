import { renderHook } from '@testing-library/react-hooks';
import * as useRequest from '../useRequest';
import usePresentations from '../usePresentations';

describe('usePresentations', () => {
  const speakerId = 'speakerIdValue';

  it('should return expected from useRequest', async () => {
    // arrange
    const presentation = { slug: 'slugValue' };
    const data = [presentation];

    const useRequestHook = {
      data,
      isLoaded: true,
      error: 'errorValue',
    };
    jest.spyOn(useRequest, 'default').mockImplementation(() => useRequestHook);

    // act
    const { result } = renderHook(() => usePresentations(speakerId));

    // assert
    expect(result.current.presentations).toEqual(data);
    expect(result.current.isLoaded).toEqual(useRequestHook.isLoaded);
    expect(result.current.error).toEqual(useRequestHook.error);
  });

  it('should return expected from useRequest given data is null', async () => {
    // arrange
    const data = null;
    const expectedPresentations = [];

    const useRequestHook = {
      data,
      isLoaded: true,
      error: 'errorValue',
    };
    jest.spyOn(useRequest, 'default').mockImplementation(() => useRequestHook);

    // act
    const { result } = renderHook(() => usePresentations(speakerId));

    // assert
    expect(result.current.presentations).toEqual(expectedPresentations);
    expect(result.current.isLoaded).toEqual(useRequestHook.isLoaded);
    expect(result.current.error).toEqual(useRequestHook.error);
  });
});
