import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import useRequest from './useRequest';
import useEntityPath from './useEntityPath';

export default function useConferences() {
  const { data, isLoaded, error } = useRequest(endpoints.conferences);
  const { addPath } = useEntityPath();

  const conferences = data ? addPath(data.conferences, routes.conferences.path) : [];

  return {
    error,
    isLoaded,
    conferences,
  };
}
