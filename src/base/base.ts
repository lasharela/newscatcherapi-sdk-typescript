import axios from 'axios'
import { config } from '../../config'

console.log('KEEEY', config.NEWS_API_KEY)

export const api = axios.create({
  baseURL: config.NEWS_API_URL,
  headers: { 'x-api-key': config.NEWS_API_KEY },
})
