import { useCallback, useEffect, useMemo, useState } from 'react';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';

export default function useSpeakers() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [speakers, setSpeakers] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize] = useState(2); // TODO: how is page size set?

  const fetchData = useCallback(async () => {
    try {
      const url = `${endpoints.speakers}?pageIndex=${pageIndex}&itemsPage=${pageSize}`;

      const response = await fetch(url);
      const data = await response.json();
      const result = data.speakers.map(x => ({
        ...x,
        path: `${routes.speakers.path}/${x.slug}`,
      }));
      setSpeakers(result);
    } catch (e) {
      setError(e);
      trackException(e);
    }
    setLoaded(true);
  }, [pageIndex, pageSize]);

  useEffect(() => {
    fetchData();
  }, [fetchData, pageIndex, pageSize]);

  const previousPage = useCallback(() => {
    setPageIndex(pageIndex - 1);
  }, [pageIndex]);

  const nextPage = useCallback(() => {
    setPageIndex(pageIndex + 1);
  }, [pageIndex]);

  const isFirstPage = useMemo(() => pageIndex === 0, [pageIndex]);

  return {
    speakers,
    error,
    isLoaded,
    previousPage,
    nextPage,
    isFirstPage,
  };
}
