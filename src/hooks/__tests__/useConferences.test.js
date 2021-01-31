import { renderHook } from '@testing-library/react-hooks';
import routes from '../../constants/routes';
import * as useRequest from '../useRequest';
import useConferences from '../useConferences';

describe('useConferences', () => {
  it('should return expected from useRequest', async () => {
    // arrange
    const conference = { slug: 'slugValue' };
    const data = {
      conferences: [conference],
    };
    const expectedConferences = [
      {
        slug: 'slugValue',
        path: `${routes.conferences.path}/${conference.slug}`,
      },
    ];

    const useRequestHook = {
      data,
      isLoaded: true,
      error: 'errorValue',
    };
    jest.spyOn(useRequest, 'default').mockImplementation(() => useRequestHook);

    // act
    const { result } = renderHook(() => useConferences());

    // assert
    expect(result.current.conferences).toEqual(expectedConferences);
    expect(result.current.isLoaded).toEqual(useRequestHook.isLoaded);
    expect(result.current.error).toEqual(useRequestHook.error);
  });

  it('should return expected from useRequest given data is null', async () => {
    // arrange
    const data = null;
    const expectedConferences = [];

    const useRequestHook = {
      data,
      isLoaded: true,
      error: 'errorValue',
    };
    jest.spyOn(useRequest, 'default').mockImplementation(() => useRequestHook);

    // act
    const { result } = renderHook(() => useConferences());

    // assert
    expect(result.current.conferences).toEqual(expectedConferences);
    expect(result.current.isLoaded).toEqual(useRequestHook.isLoaded);
    expect(result.current.error).toEqual(useRequestHook.error);
  });
});
