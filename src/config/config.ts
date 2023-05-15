export const config = {
  port: parseInt(process.env.PORT || '8080'),
  NEWS_API_KEY: process.env.NEWS_API_KEY,
  NEWS_API_URL: process.env.NEWS_API_URL ?? 'https://api.newscatcherapi.com/v2',
};
