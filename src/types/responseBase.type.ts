import { Article } from './article.type'

export interface ResponseBase {
  status: 'ok' | 'error'
  total_hits: number
  page: number
  total_pages: number
  page_size: number
  articles: Article[]
}
