import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import useRequest from './useRequest';
import useEntityPath from './useEntityPath';

export default function useSpeakersFeatured() {
  const { data, isLoaded, error } = useRequest(endpoints.speakersFeatured);
  const { addPath } = useEntityPath();

  const speakers = data ? addPath(data, routes.speakers.path) : [];

  return {
    error,
    isLoaded,
    speakers,
  };
}
