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
        const url = `${endpoints.speakers}`;

        const response = await fetch(url);
        const data = await response.json();
        const result = data.speakers.map(x => ({
          ...x,
          path: `${routes.speakers.path}/${x.slug}`,
        }));
        setSpeakers(result);
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
