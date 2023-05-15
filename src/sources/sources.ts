import { AxiosResponse } from 'axios'
import { api } from '../base/base'
import { SourceRequest, SourceRequestAPI, SourceResponse } from './sources.type'
import { formatProps } from '../utilities'

export const sources = async (options?: SourceRequest) => {
  const optionsForAPI: SourceRequestAPI = {}

  if (options?.lang) {
    optionsForAPI.lang = formatProps(options.lang)
  }

  if (options?.countries) {
    optionsForAPI.countries = formatProps(options.countries)
  }

  return await api.post<SourceRequestAPI, AxiosResponse<SourceResponse>>('/sources', {
    ...options,
    ...optionsForAPI,
  })
}
