import { Country } from './country.type'
import { Lang } from './lang.type'
import { Topic } from './topic.type'
import { When } from './when.type'

export interface RequestBase {
  when?: When
  lang?: Lang | Lang[]
  countries?: Country | Country[]
  not_countries?: Country | Country[]
  topic?: Topic
  sources?: string[]
  not_sources?: string[]
  ranked_only?: boolean // default: true
  page_size?: number // [1:100]
  page?: number
}
