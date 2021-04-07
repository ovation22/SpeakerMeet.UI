import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import useRequest from './useRequest';
import useEntityPath from './useEntityPath';

export default function useConferencesFeatured() {
  const { data, isLoaded, error } = useRequest(endpoints.conferencesFeatured);
  const { addPath } = useEntityPath();

  const conferences = data ? addPath(data, routes.conferences.path) : [];

  return {
    error,
    isLoaded,
    conferences,
  };
}
