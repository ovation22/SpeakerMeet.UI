import { useEffect, useState } from 'react';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';

export default function useConferencesFeatured() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [conferences, setConferences] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(endpoints.conferencesFeatured);
      const data = await response.json();
      const result = data.map(x => ({
        ...x,
        path: `${routes.conferences.path}/${x.slug}`,
      }));
      setConferences(result);
    } catch (e) {
      setError(e);
      trackException(e);
    }
    setLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    error,
    isLoaded,
    conferences,
  };
}
