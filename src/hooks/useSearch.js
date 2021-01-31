import endpoints from '../constants/endpoints';
import useRequest from './useRequest';
import routes from '../constants/routes';

export default function useSearch(searchTerm) {
  const { data, isLoaded, error } = useRequest(`${endpoints.search}?terms=${searchTerm}`);
  const results = !data
    ? null
    : data.results.map(x => ({
        ...x.document,
        score: x.score,
        path: `${
          // eslint-disable-next-line no-nested-ternary
          x.document.type === 'Speaker'
            ? routes.speakers.path
            : x.document.type === 'Conference'
            ? routes.conferences.path
            : routes.communities.path
        }/${x.document.slug}`,
      }));

  return {
    error,
    isLoaded,
    results,
  };
}
