import { useEffect, useState } from 'react';
import { trackException } from '../services/telemetry.service';

export default function useRequest(url) {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        if (response.ok) {
          setData(responseData);
        } else {
          // noinspection ExceptionCaughtLocallyJS
          throw new Error(responseData);
        }
      } catch (e) {
        setError(e);
        trackException(e);
      }
      setLoaded(true);
    };
    fetchData();
  }, [url]);

  return {
    data,
    error,
    isLoaded,
  };
}
