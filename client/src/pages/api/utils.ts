export const setRequestToTheAPI = async (
  endpoint: string,
  requestOptions?: RequestInit
): Promise<Response> => {
  const res = await fetch(endpoint, requestOptions);
  return res;
};

export const getAPIData = async (endpoint: string) => {
  const res = await fetch(endpoint);
  const data = await res.json();
  return data;
};

export function getEndpoint(endpoint: string) {
  return async (extra: string) => {
    return await getAPIData(`https://${endpoint}${extra}`);
  };
}
