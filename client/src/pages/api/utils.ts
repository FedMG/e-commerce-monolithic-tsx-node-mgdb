import type { GetEndpointResponse, APIResponse } from 'additional'

export const setRequestToTheAPI = async (endpoint: string, requestOptions?: RequestInit): Promise<APIResponse> => {
  const res = await fetch(endpoint, requestOptions)
  return await res.json()
}

export const getAPIData = async (endpoint: string): Promise<any> => {
  const res = await fetch(endpoint)
  const data = await res.json()
  return data
}

export function getEndpoint (endpoint: string): GetEndpointResponse {
  return async (extra: string) => {
    return await getAPIData(`https://${endpoint}${extra}`)
  }
}
