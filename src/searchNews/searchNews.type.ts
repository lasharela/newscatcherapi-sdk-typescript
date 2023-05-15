import { ResponseBase, RequestBase, Lang, Country, Topic } from '../types'

type SortedBy = 'relevancy' | 'date' | 'rank'
type PublishedDatePrecision = 'full' | 'timezone unknown' | 'date'

export interface SearchNewsResponse extends ResponseBase {
  user_input: {
    q: string
    search_in: string[]
    lang: Lang[] | null
    not_lang: Lang[] | null
    published_date_precision?: PublishedDatePrecision
    countries: Country[] | null
    not_countries: Country[] | null
    from: string | null
    to: string | null
    ranked_only: 'True' | 'False'
    from_rank: null
    to_rank: null
    sort_by: SortedBy | null
    page: number
    size: number
    sources: string[] | null
    not_sources: string[] | null
    topic: Topic[] | null
  }
}

export interface SearchNewsRequest extends RequestBase {
  q: string
  not_lang?: Lang[] | Lang
  published_date_precision?: PublishedDatePrecision
  not_sources?: string[]
  from_rank?: number
  to_rank?: number
  sort_by?: SortedBy
  to?: string
  from?: string
}

export interface SearchNewsRequestAPI
  extends Omit<SearchNewsRequest, 'lang' | 'not_lang' | 'countries' | 'not_countries'> {
  lang?: string
  not_lang?: string
  countries?: string
  not_countries?: string
}
