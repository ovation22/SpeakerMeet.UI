import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';

export default function useConferences() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [conferences, setConferences] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(12);
  const [sortOrder, setSortOrder] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageIndex = pageNumber - 1;
        const url = `${endpoints.conferences}?pageIndex=${pageIndex}&itemsPage=${pageSize}&direction=${sortOrder}`;

        const response = await fetch(url);
        const data = await response.json();

        const result = data.conferences.map(x => ({
          ...x,
          path: `${routes.conferences.path}/${x.slug}`,
        }));

        setConferences(result);
        setPaginationInfo(data.paginationInfo);
      } catch (e) {
        setError(e);
        trackException(e);
      }
      setLoaded(true);
    };
    fetchData();
  }, [pageNumber, pageSize, sortOrder]);

  const changePage = useCallback(
    newPageNumber => {
      history.push(`${routes.conferences.path}?page=${newPageNumber}`);
      setPageNumber(newPageNumber);
    },
    [history],
  );

  const changeSortOrder = useCallback(newSortOrder => {
    setSortOrder(newSortOrder);
  }, []);

  return {
    error,
    isLoaded,
    conferences,
    sortOrder,
    changePage,
    changeSortOrder,
    pageNumber,
    totalPages: paginationInfo ? paginationInfo.totalPages : 0,
  };
}
