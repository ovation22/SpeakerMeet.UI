import { useCallback, useEffect, useState } from 'react';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';

export default function useCommunities() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [communities, setCommunities] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(12);
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageIndex = pageNumber - 1;
        const url = `${endpoints.communities}?pageIndex=${pageIndex}&itemsPage=${pageSize}&direction=${sortOrder}`;

        const response = await fetch(url);
        const data = await response.json();
        const result = data.communities.map(x => ({
          ...x,
          path: `${routes.communities.path}/${x.slug}`,
        }));
        setCommunities(result);
        setPaginationInfo(data.paginationInfo);
      } catch (e) {
        setError(e);
        trackException(e);
      }
      setLoaded(true);
    };
    fetchData();
  }, [pageNumber, pageSize, sortOrder]);

  const changePage = useCallback(newPageNumber => {
    setPageNumber(newPageNumber);
  }, []);

  const changeSortOrder = useCallback(newSortOrder => {
    setSortOrder(newSortOrder);
  }, []);

  return {
    error,
    isLoaded,
    communities,
    changePage,
    changeSortOrder,
    sortOrder,
    pageNumber,
    totalPages: paginationInfo ? paginationInfo.totalPages : 0,
  };
}
