import endpoints from '../constants/endpoints';
import useRequest from './useRequest';
import routes from '../constants/routes';

export default function useCommunities() {
  const { data, isLoaded, error } = useRequest(endpoints.communities);

  const addPath = (arr, path) =>
    arr.map(x => ({
      ...x,
      path: `${path}/${x.slug}`,
    }));

  const communities = data ? addPath(data.communities, routes.communities.path) : [];

  return {
    error,
    isLoaded,
    communities,
  };
}
