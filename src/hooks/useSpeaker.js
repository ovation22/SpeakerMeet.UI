import endpoints from '../constants/endpoints';
import useRequest from './useRequest';

export default function useSpeaker(speakerId) {
  const { data: speaker, isLoaded, error } = useRequest(`${endpoints.speakers}/${speakerId}`);

  return {
    error,
    isLoaded,
    speaker,
  };
}
