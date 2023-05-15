import { Country, Lang, Topic } from '../types'

export interface SourceResponse {
  message: string
  sources: string[]
  user_input: {
    lang: Lang[]
    countries: Country[]
    topic: Topic[]
  }
}

export interface SourceRequest {
  lang?: Lang | Lang[]
  countries?: Country | Country[]
  topic?: Topic
}

export interface SourceRequestAPI extends Omit<SourceRequest, 'lang' | 'countries'> {
  lang?: string
  countries?: string
}
