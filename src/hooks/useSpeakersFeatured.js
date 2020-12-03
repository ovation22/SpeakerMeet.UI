import { useEffect, useState } from 'react';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';

export default function useSpeakersFeatured() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [speakers, setSpeakers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(endpoints.speakersFeatured);
      const data = await response.json();
      if (response.ok) {
        const result = data.map(x => ({
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

  useEffect(() => {
    fetchData();
  }, []);

  return {
    error,
    isLoaded,
    speakers,
  };
}
