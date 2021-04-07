import { renderHook } from '@testing-library/react-hooks';
import * as useRequest from '../useRequest';
import useCommunity from '../useCommunity';

describe('useCommunity', () => {
  const communityId = 'communityIdValue';

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
    const { result } = renderHook(() => useCommunity(communityId));

    // assert
    expect(result.current.community).toEqual(data);
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
    const { result } = renderHook(() => useCommunity(communityId));

    // assert
    expect(result.current.community).toEqual(data);
    expect(result.current.isLoaded).toEqual(useRequestHook.isLoaded);
    expect(result.current.error).toEqual(useRequestHook.error);
  });
});
