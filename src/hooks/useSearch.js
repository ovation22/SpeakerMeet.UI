import { useCallback, useEffect, useMemo, useState } from 'react';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';

export default function useSearch() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [results, setResults] = useState([]);
  const [terms, setTerms] = useState();
  const [paginationInfo, setPaginationInfo] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(4);
  const [sortOrder, setSortOrder] = useState(null);

  const getPath = document => {
    return `${
      // eslint-disable-next-line no-nested-ternary
      document.type === 'Speaker'
        ? routes.speakers.path
        : document.type === 'Conference'
        ? routes.conferences.path
        : routes.communities.path
    }/${document.slug}`;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${endpoints.search}?terms=${terms}`);
        const json = await response.json();
        const result = json.results.map(x => ({
          ...x.document,
          score: x.score,
          path: getPath(x.document),
        }));

        const sortedResults = result.sort((a, b) => (a.score < b.score ? 1 : -1));

        setResults(sortedResults);

        const itemCount = sortedResults.length;
        const totalPages = Math.ceil(itemCount / pageSize);
        const newPaginationInfo = { totalPages };

        setPaginationInfo(newPaginationInfo);
      } catch (e) {
        setError(e);
        trackException(e);
      }
      setLoaded(true);
    };

    if (terms) fetchData();
  }, [pageSize, terms]);

  useEffect(() => {}, [sortOrder]);

  const search = useCallback(newSearchTerm => {
    setTerms(newSearchTerm);
  }, []);

  const changePage = useCallback(newPageNumber => {
    setPageNumber(newPageNumber);
  }, []);

  const changeSortOrder = useCallback(
    newSortOrder => {
      if (newSortOrder === 'asc') {
        const resultsAsc = [...results].sort((a, b) => (a.name > b.name ? 1 : -1));
        setResults(resultsAsc);
      }

      if (newSortOrder === 'desc') {
        const resultsDesc = [...results].sort((a, b) => (a.name < b.name ? 1 : -1));
        setResults(resultsDesc);
      }
      setSortOrder(newSortOrder);
    },
    [results],
  );

  const pagedResults = useMemo(() => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return [...results].slice(startIndex, endIndex);
  }, [pageNumber, pageSize, results]);

  const totalPages = useMemo(() => {
    return paginationInfo ? paginationInfo.totalPages : 0;
  }, [paginationInfo]);

  return {
    error,
    isLoaded,
    results: pagedResults,
    sortOrder,
    search,
    changePage,
    changeSortOrder,
    totalPages,
  };
}
