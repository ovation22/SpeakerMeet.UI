import { useCallback, useEffect, useState } from 'react';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';

export default function useSpeakers() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [speakers, setSpeakers] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(2); // TODO: how is page size set?

  const fetchData = useCallback(async () => {
    try {
      const url = `${endpoints.speakers}?pageIndex=${pageNumber - 1}&itemsPage=${pageSize}`;

      const response = await fetch(url);
      const data = await response.json();
      const result = data.speakers.map(x => ({
        ...x,
        path: `${routes.speakers.path}/${x.slug}`,
      }));
      setSpeakers(result);
      setPaginationInfo(data.paginationInfo);
    } catch (e) {
      setError(e);
      trackException(e);
    }
    setLoaded(true);
  }, [pageNumber, pageSize]);

  useEffect(() => {
    fetchData();
  }, [fetchData, pageNumber, pageSize]);

  const loadPage = useCallback(newPageNumber => {
    setPageNumber(newPageNumber);
  }, []);

  return {
    speakers,
    error,
    isLoaded,
    loadPage,
    totalPages: paginationInfo ? paginationInfo.totalPages : 0,
  };
}
