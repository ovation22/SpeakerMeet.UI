import endpoints from '../constants/endpoints';
import useRequest from './useRequest';

export default function usePresentations(speakerId) {
  const url = `${endpoints.speakers}/${speakerId}/Presentations`;
  const { data, isLoaded, error } = useRequest(url);

  return {
    error,
    isLoaded,
    presentations: data ?? [],
  };
}
