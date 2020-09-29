import { useEffect, useState } from 'react';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';

export default function useConferencesFeatured() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(endpoints.conferencesFeatured)
        .then(res => res.json())
        .then(
          result => {
            const s = result.map(x => ({
              ...x,
              path: `${routes.conferences.path}/${x.slug}`,
            }));
            setConferences(s);
            setLoaded(true);
          },
          e => {
            setError(e);
            setLoaded(true);
            trackException(e);
          },
        );
    };
    fetchData();
  }, []);

  return {
    error,
    isLoaded,
    conferences,
  };
}
