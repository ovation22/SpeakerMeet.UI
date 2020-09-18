import { useEffect, useState } from 'react';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';

function useSpeakers() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [speakers, setSpeakers] = useState([]);

  const fetchData = async () => {
    await fetch(endpoints.speakersFeatured)
      .then(res => res.json())
      .then(
        result => {
          const s = result.map(x => ({
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

export default useSpeakers;
