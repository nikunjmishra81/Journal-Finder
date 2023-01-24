import { JournalsEndPoints } from "../config/apiEndpoints";
import axios from "axios";
import { getCommonHeadersForAPI } from "../config/apiHeaders";

export const getSearchedJournals = async (data = {}) => {
  const baseUrl = `${process.env.REACT_APP_BACKEND_BASE_URL}${JournalsEndPoints.SEARCH_JOURNALS}`;

  const options = {
    method: "POST",
    headers: getCommonHeadersForAPI(),
    data,
    url: baseUrl,
  };

  const result = axios(options)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  return result;
};
