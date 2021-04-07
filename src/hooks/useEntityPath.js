export default function useEntityPath() {
  const addPath = (arr, path) =>
    arr.map(x => ({
      ...x,
      path: `${path}/${x.slug}`,
    }));

  return { addPath };
}
