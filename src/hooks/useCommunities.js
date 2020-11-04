import { useEffect, useState } from 'react';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';

export default function useCommunities() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoints.communities);
        const json = await response.json();
        const result = json.communities.map(x => ({
          ...x,
          path: `${routes.communities.path}/${x.slug}`,
        }));
        setCommunities(result);
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
    communities,
  };
}
