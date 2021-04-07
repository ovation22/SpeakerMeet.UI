import endpoints from '../constants/endpoints';
import useRequest from './useRequest';

export default function useCommunity(communityId) {
  const url = `${endpoints.communities}/${communityId}`;
  const { data: community, isLoaded, error } = useRequest(url);

  return {
    error,
    isLoaded,
    community,
  };
}
