import endpoints from '../constants/endpoints';
import useRequest from './useRequest';
import routes from '../constants/routes';
import documentTypes from '../constants/documentTypes';

export default function useSearch(searchTerm) {
  const { data, isLoaded, error } = useRequest(`${endpoints.search}?terms=${searchTerm}`);

  const typePathMap = {
    [documentTypes.speaker]: routes.speakers.path,
    [documentTypes.conference]: routes.conferences.path,
    [documentTypes.community]: routes.communities.path,
  };
  const results = !data
    ? null
    : data.results.map(x => ({
        ...x.document,
        score: x.score,
        path: `${typePathMap[x.document.type]}/${x.document.slug}`,
      }));

  return {
    error,
    isLoaded,
    results,
  };
}
