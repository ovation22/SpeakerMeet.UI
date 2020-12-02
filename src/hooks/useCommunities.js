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
        const data = await response.json();
        if (response.ok) {
          const result = data.communities.map(x => ({
            ...x,
            path: `${routes.communities.path}/${x.slug}`,
          }));
          setCommunities(result);
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
    communities,
  };
}
