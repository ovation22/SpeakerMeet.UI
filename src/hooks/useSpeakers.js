import { useCallback, useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
import { useHistory } from 'react-router';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';

export default function useSpeakers() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [speakers, setSpeakers] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState();
  const [pageNumber, setPageNumber] = useState(null);
  const [pageSize] = useState(12);
  const [sortOrder, setSortOrder] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageIndex = pageNumber - 1;
        const url = `${endpoints.speakers}?pageIndex=${pageIndex}&itemsPage=${pageSize}&direction=${sortOrder}`;

        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          const result = data.speakers.map(x => ({
            ...x,
            path: `${routes.speakers.path}/${x.slug}`,
          }));
          setSpeakers(result);
          setPaginationInfo(data.paginationInfo);
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
  }, [pageNumber, pageSize, sortOrder]);

  const changePage = useCallback(
    newPageNumber => {
      history.push(`${routes.speakers.path}?page=${newPageNumber}`);
      setPageNumber(newPageNumber);
    },
    [history],
  );

  const changeSortOrder = useCallback(newSortOrder => setSortOrder(newSortOrder), []);

  return {
    error,
    isLoaded,
    speakers,
    changePage,
    changeSortOrder,
    sortOrder,
    pageNumber,
    totalPages: paginationInfo ? paginationInfo.totalPages : 0,
  };
}
