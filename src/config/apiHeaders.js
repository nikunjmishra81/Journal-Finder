const API_HEADERS = {
  "content-type": "application/json",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
};

export const getCommonHeadersForAPI = () => {
  return API_HEADERS;
};
