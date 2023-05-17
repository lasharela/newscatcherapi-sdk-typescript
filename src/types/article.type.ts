export interface Article {
  title: string;
  author: string;
  published_date: string;
  published_date_precision: string;
  link: string;
  clean_url: string;
  excerpt: string | null;
  summary: string;
  rights: string;
  rank: number;
  topic: string;
  country: string;
  language: string;
  authors: string;
  media: string | null;
  is_opinion: boolean;
  twitter_account: string | null;
  _score: null;
  _id: string;
}
