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
    await fetch(endpoints.speakers)
      .then(res => res.json())
      .then(
        result => {
          const s = result.speakers.map(x => ({
            ...x,
            path: `${routes.speakers.path}/${x.slug}`,
          }));
          setSpeakers(s);
          setLoaded(true);
        },
        e => {
          setError(e);
          setLoaded(true);
          trackException(e);
        },
      );
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
