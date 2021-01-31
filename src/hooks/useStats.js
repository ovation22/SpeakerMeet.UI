import endpoints from '../constants/endpoints';
import useRequest from './useRequest';

export default function useStats() {
  const { data: stats, isLoaded, error } = useRequest(endpoints.stats);

  return {
    error,
    isLoaded,
    stats,
  };
}
