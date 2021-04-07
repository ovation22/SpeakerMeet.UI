import endpoints from '../constants/endpoints';
import useRequest from './useRequest';

export default function useConference(conferenceId) {
  const url = `${endpoints.conferences}/${conferenceId}`;
  const { data: conference, isLoaded, error } = useRequest(url);

  return {
    error,
    isLoaded,
    conference,
  };
}
