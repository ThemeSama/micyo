export function isFetchResponse(response: any): response is Response {
  return response.json !== undefined;
}
