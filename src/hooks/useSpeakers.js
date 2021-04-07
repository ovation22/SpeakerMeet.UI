import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import useRequest from './useRequest';
import useEntityPath from './useEntityPath';

export default function useSpeakers() {
  const { data, isLoaded, error } = useRequest(endpoints.speakers);
  const { addPath } = useEntityPath();

  const speakers = data ? addPath(data.speakers, routes.speakers.path) : [];

  return {
    error,
    isLoaded,
    speakers,
  };
}
