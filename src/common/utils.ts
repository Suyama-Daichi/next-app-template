export const makeQueryString = (queryObject: Record<string, string | number[] | number | undefined>) => {
  const queryString = new URLSearchParams(JSON.parse(JSON.stringify(queryObject)) as Record<string, string>).toString();
  return queryString;
};
