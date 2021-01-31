import { renderHook } from '@testing-library/react-hooks';
import useCommunitiesFeatured from '../useCommunitiesFeatured';
import routes from '../../constants/routes';
import * as useRequest from '../useRequest';

describe('useCommunitiesFeatured', () => {
  it('should return expected from useRequest', async () => {
    // arrange
    const community = { slug: 'slugValue' };
    const data = [community];
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
    const { result } = renderHook(() => useCommunitiesFeatured());

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
    const { result } = renderHook(() => useCommunitiesFeatured());

    // assert
    expect(result.current.communities).toEqual(expectedCommunities);
    expect(result.current.isLoaded).toEqual(useRequestHook.isLoaded);
    expect(result.current.error).toEqual(useRequestHook.error);
  });
});
