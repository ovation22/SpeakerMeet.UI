import { useEffect, useState } from 'react';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';

export default function useConferences() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoints.conferences);
        const data = await response.json();
        if (response.ok) {
          const result = data.conferences.map(x => ({
            ...x,
            path: `${routes.conferences.path}/${x.slug}`,
          }));
          setConferences(result);
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
    error,
    isLoaded,
    conferences,
  };
}
