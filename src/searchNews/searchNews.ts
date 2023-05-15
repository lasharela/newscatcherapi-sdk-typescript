// import { AxiosResponse } from 'axios'
import { api } from '../base/base'
import { formatProps } from '../utilities'
import { SearchNewsResponse, SearchNewsRequest, SearchNewsRequestAPI } from './searchNews.type'
import { AxiosResponse } from 'axios'

export const searchNews = async (options: SearchNewsRequest) => {
  const optionsForAPI: SearchNewsRequestAPI = { q: options.q }

  if (options?.lang) {
    optionsForAPI.lang = formatProps(options.lang)
  }

  if (options?.not_lang) {
    optionsForAPI.not_lang = formatProps(options.not_lang)
  }

  if (options?.countries) {
    optionsForAPI.countries = formatProps(options.countries)
  }

  if (options?.not_countries) {
    optionsForAPI.not_countries = formatProps(options.not_countries)
  }

  return await api.post<SearchNewsRequestAPI, AxiosResponse<SearchNewsResponse>>('/search', {
    ...options,
    ...optionsForAPI,
  })
}
