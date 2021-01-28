import { renderHook } from '@testing-library/react-hooks';
import routes from '../../constants/routes';
import useCommunities from '../useCommunities';
import * as useRequest from '../useRequest';

describe('useCommunities', () => {
  it('should return expected from useRequest', async () => {
    // arrange
    const community = { slug: 'slugValue' };
    const data = {
      communities: [community],
    };
    const expectedCommunities = [
      {
        slug: 'slugValue',
        path: `${routes.communities.path}/${community.slug}`,
      },
    ];

    const useRequestHook = {
      data,
      isLoaded: true,
      error: 'errorValue',
    };
    jest.spyOn(useRequest, 'default').mockImplementation(() => useRequestHook);

    // act
    const { result } = renderHook(() => useCommunities());

    // assert
    expect(result.current.communities).toEqual(expectedCommunities);
    expect(result.current.isLoaded).toEqual(useRequestHook.isLoaded);
    expect(result.current.error).toEqual(useRequestHook.error);
  });

  it('should return expected from useRequest given data is null', async () => {
    // arrange
    const data = null;
    const expectedCommunities = [];

    const useRequestHook = {
      data,
      isLoaded: true,
      error: 'errorValue',
    };
    jest.spyOn(useRequest, 'default').mockImplementation(() => useRequestHook);

    // act
    const { result } = renderHook(() => useCommunities());

    // assert
    expect(result.current.communities).toEqual(expectedCommunities);
    expect(result.current.isLoaded).toEqual(useRequestHook.isLoaded);
    expect(result.current.error).toEqual(useRequestHook.error);
  });
});
