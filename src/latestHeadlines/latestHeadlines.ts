import { api } from "../base/base";
import { formatProps } from "../utilities";
import {
  LatestHeadlinesRequest,
  LatestHeadlinesRequestAPI,
  LatestHeadlinesResponse,
} from "./latestHeadlines.type";
import { AxiosResponse } from "axios";

export const latestHeadlines = async (options?: LatestHeadlinesRequest) => {
  const optionsForAPI: LatestHeadlinesRequestAPI = {};

  if (options?.lang) {
    optionsForAPI.lang = formatProps(options.lang);
  }

  if (options?.countries) {
    optionsForAPI.countries = formatProps(options.countries);
  }

  if (options?.not_countries) {
    optionsForAPI.not_countries = formatProps(options.not_countries);
  }

  return await api.post<unknown, AxiosResponse<LatestHeadlinesResponse>>(
    "/latest_headlines",
    {
      ...options,
      ...optionsForAPI,
    }
  );
};
