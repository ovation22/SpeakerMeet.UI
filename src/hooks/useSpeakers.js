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
  const [sortOrder, setSortOrder] = useState();
  const [pageSize] = useState(4); // TODO: how is page size set?

  const fetchData = useCallback(async () => {
    try {
      const pageIndex = pageNumber - 1;
      const url = `${endpoints.speakers}?pageIndex=${pageIndex}&itemsPage=${pageSize}&sortOrder=${sortOrder}`;

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
  }, [pageNumber, pageSize, sortOrder]);

  useEffect(() => {
    fetchData();
  }, [fetchData, pageNumber, pageSize, sortOrder]);

  const loadPage = useCallback(newPageNumber => {
    setPageNumber(newPageNumber);
  }, []);

  const loadWith = useCallback((newPageNumber, newSortOrder = null) => {
    setPageNumber(newPageNumber);
    setSortOrder(newSortOrder);
  }, []);

  return {
    speakers,
    error,
    isLoaded,
    loadPage,
    loadWith,
    totalPages: paginationInfo ? paginationInfo.totalPages : 0,
  };
}
