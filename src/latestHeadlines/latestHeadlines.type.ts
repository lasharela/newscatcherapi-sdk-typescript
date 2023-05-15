import { RequestBase, ResponseBase } from '../types'

export type LatestHeadlinesResponse = ResponseBase

export type LatestHeadlinesRequest = RequestBase

export interface LatestHeadlinesRequestAPI
  extends Omit<LatestHeadlinesRequest, 'lang' | 'countries' | 'not_countries'> {
  lang?: string
  countries?: string
  not_countries?: string
}
