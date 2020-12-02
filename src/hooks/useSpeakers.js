import { useEffect, useState } from 'react';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';

export default function useSpeakers() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoints.speakers);
        const data = await response.json();
        if (response.ok) {
          const result = data.speakers.map(x => ({
            ...x,
            path: `${routes.speakers.path}/${x.slug}`,
          }));
          setSpeakers(result);
        } else {
          throw new Error(data);
        }
      } catch (e) {
        setError(e);
        trackException(e);
      }
      setLoaded(true);
    };
    fetchData();
  }, []);

  return {
    speakers,
    error,
    isLoaded,
  };
}
