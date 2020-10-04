import { useEffect, useState } from 'react';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';

export default function useCommunitiesFeatured() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoints.communitiesFeatured);
        const data = await response.json();
        const result = data.map(x => ({
          ...x,
          path: `${routes.communities.path}/${x.slug}`,
        }));
        setCommunities(result);
        setLoaded(true);
      } catch (e) {
        setError(e);
        setLoaded(true);
        trackException(e);
      }
    };
    fetchData();
  }, []);

  return {
    error,
    isLoaded,
    communities,
  };
}
