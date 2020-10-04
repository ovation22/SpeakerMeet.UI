import { useEffect, useState } from 'react';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';

// eslint-disable-next-line import/prefer-default-export
export function useSpeakers() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [speakers, setSpeakers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(endpoints.speakers);
      const data = await response.json();
      const result = data.speakers.map(x => ({
        ...x,
        path: `${routes.speakers.path}/${x.slug}`,
      }));
      setSpeakers(result);
      setLoaded(true);
    } catch (e) {
      setError(e);
      setLoaded(true);
      trackException(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    speakers,
    error,
    isLoaded,
  };
}
