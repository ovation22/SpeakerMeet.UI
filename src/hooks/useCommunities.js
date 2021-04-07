import endpoints from '../constants/endpoints';
import useRequest from './useRequest';
import routes from '../constants/routes';
import useEntityPath from './useEntityPath';

export default function useCommunities() {
  const { data, isLoaded, error } = useRequest(endpoints.communities);
  const { addPath } = useEntityPath();

  const communities = data ? addPath(data.communities, routes.communities.path) : [];

  return {
    error,
    isLoaded,
    communities,
  };
}
