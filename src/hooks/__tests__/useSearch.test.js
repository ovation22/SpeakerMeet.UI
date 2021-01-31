import { renderHook } from '@testing-library/react-hooks';
import * as useRequest from '../useRequest';
import useSearch from '../useSearch';
import routes from '../../constants/routes';

describe('useSearch', () => {
  const speakerId = 'speakerIdValue';

  it('should return expected from useRequest', async () => {
    // arrange
    const speaker = { score: 'scoreValue', document: { type: 'Speaker', slug: 'slugValue' } };
    const conference = { score: 'scoreValue', document: { type: 'Conference', slug: 'slugValue' } };
    const community = { score: 'scoreValue', document: { type: 'Community', slug: 'slugValue' } };
    const data = {
      results: [speaker, conference, community],
    };

    const expected = [
      {
        path: `${routes.speakers.path}/${speaker.document.slug}`,
        score: speaker.score,
        type: speaker.document.type,
        slug: speaker.document.slug,
      },
      {
        path: `${routes.conferences.path}/${conference.document.slug}`,
        score: conference.score,
        type: conference.document.type,
        slug: conference.document.slug,
      },
      {
        path: `${routes.communities.path}/${community.document.slug}`,
        score: community.score,
        type: community.document.type,
        slug: community.document.slug,
      },
    ];

    const useRequestHook = {
      data,
      isLoaded: true,
      error: 'errorValue',
    };
    jest.spyOn(useRequest, 'default').mockImplementation(() => useRequestHook);

    // act
    const { result } = renderHook(() => useSearch(speakerId));

    // assert
    expect(result.current.results).toEqual(expected);
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
    const { result } = renderHook(() => useSearch(speakerId));

    // assert
    expect(result.current.results).toEqual(data);
    expect(result.current.isLoaded).toEqual(useRequestHook.isLoaded);
    expect(result.current.error).toEqual(useRequestHook.error);
  });
});
