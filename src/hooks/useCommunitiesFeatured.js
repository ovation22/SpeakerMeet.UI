import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import useRequest from './useRequest';
import useEntityPath from './useEntityPath';

export default function useCommunitiesFeatured() {
  const { data, isLoaded, error } = useRequest(endpoints.communitiesFeatured);
  const { addPath } = useEntityPath();

  const communities = data ? addPath(data, routes.communities.path) : [];

  return {
    error,
    isLoaded,
    communities,
  };
}
