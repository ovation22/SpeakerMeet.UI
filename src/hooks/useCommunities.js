import endpoints from '../constants/endpoints';
import useRequest from './useRequest';
import routes from '../constants/routes';

export default function useCommunities() {
  const { data, isLoaded, error } = useRequest(endpoints.communities);

  const communities = !data
    ? []
    : data.communities.map(x => ({
        ...x,
        path: `${routes.communities.path}/${x.slug}`,
      }));

  return {
    error,
    isLoaded,
    communities,
  };
}
