import axios from "axios";
import { config } from "../config";

export const api = axios.create({
  baseURL: config.NEWS_API_URL,
  headers: { "x-api-key": config.NEWS_API_KEY },
});
