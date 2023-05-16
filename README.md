# NewsCatcher News API V2 SDK for TypeScript

documentation is in progress

<!--
The official Python client library to manipulate [NewsCatcher News API V2](https://newscatcherapi.com/news-api) from your Python application.

Documentation is identical with the API documentation. The same parameters and filters are available.
And the same response structure. You can have a look at [docs.newscatcherapi.com](https://docs.newscatcherapi.com).

## Authentication

The Authentication is done via the `x_api_key` variable.

Receive your API key by registering at [app.newscatcherapi.com](https://app.newscatcherapi.com).

## Installation

`pip install newscatcherapi`

## Quick Start

Import installed package.

`from newscatcherapi import NewsCatcherApiClient`

Init the instance with an API key given after registration.

`newscatcherapi = NewsCatcherApiClient(x_api_key='YOUR_API_KEY') `

## Endpoints

An instance of `NewsCatcherApiClient` has three main methods that correspond to three endpoints available for NewsCatcher News API.

### Get News (/v2/search)

Main method that allows you to find news article by keyword, date, language, country, etc.

```
all_articles = newscatcherapi.get_search(q='Elon Musk',
                                         lang='en',
                                         countries='CA',
                                         page_size=100)
```

### Get News Extracting All Pages (/v2/search)

It is the same method as _get_search_, but you can program to extract all articles without changing `page` param manually.

For example: for a given search you have 1000 found articles. _get_search_ makes one API call and returns up to 100 articles.
_get_search_all_pages_ will make 10 API calls and will return all 1000 articles.

Two new parameters:

- `max_page` - The last page number to extract. To use when you want to limit the number of extracted pages.
- `seconds_pause` - Number of seconds waiting before each call. This parameter helps you deal with the rate limit on your subscription plan. By default, it is set to 1 second.

```
all_articles = newscatcherapi.get_search_all_pages(q='Elon Musk',
                                         lang='en',
                                         countries='CA',
                                         page_size=100,
                                         max_page=10,
                                         seconds_pause=1.0
                                         )
```

### Get News Extracting All Articles (/v2/search)

It is the same method as _get_search_, but you can fetch all articles without changing `page`, `from_`, and `to_` params manually.
​
For example: for a given search you have found more than 10000 articles. _get_search_ makes one API call and returns up to 100 articles.
_get_search_all_pages_ will make 100 API calls and will return 10000 articles. The _get_search_all_articles_ method will return all articles.
​

One new parameters:

- `by` - How to divide the the time interval between to* and from* in order to extract all articles for the given search query. By default it is set to `week`. Accepted values: `month`, `week`, `day`, `hour`.
  ​

```
all_articles = newscatcherapi.get_search_all_articles(q='Elon Musk',
                                         lang='en',
                                         countries='CA',
                                         page_size=100,
                                         by = 'day'
                                         )
```

### Get Latest Headlines (/v2/latest_headlines)

Get the latest headlines given any topic, country, sources, or language.

```
top_headlines = newscatcherapi.get_latest_headlines(lang='en',
                                                    countries='us',
                                                    topic='business')
```

### Get Latest Headlines Extracting All Pages (/v2/latest_headlines)

It is the same function as _get_latest_headlines_, but you can program to extract all articles without changing `page` param manually.

For example: for a given search you have 1000 found articles. _get_latest_headlines_ makes one API call and returns up to 100 articles.
_get_latest_headlines_all_pages_ will make 10 API calls and will return all 1000 articles.

Two new parameters:

- `max_page` - The last page number to extract. To use when you want to limit the number of extracted pages.
- `seconds_pause` - Number of seconds waiting before each call. This parameter helps you deal with the rate limit on your subscription plan. By default, it is set to 1 second.

```
top_headlines = newscatcherapi.get_latest_headlines_all_pages(lang='en',
                                                    countries='us',
                                                    topic='business',
                                                    max_page=10,
                                                    seconds_pause=1.0
                                                    )
```

### Get Sources (/v2/sources)

Returns a list of the top 100 supported news websites. Overall, we support over 60,000 websites. Using this method, you may find the top 100 for your specific language, country, topic combination.

```
sources = newscatcherapi.get_sources(topic='business',
                                     lang='en',
                                     countries='US')
```

### Every endpoint supports _proxies_ parameter

If you want to use proxies, you can add this parameter to all the endpoints we have.
Here is an example of a valid form proxies parameter and an example of using it with one of the endpoints.

```
proxies = {
   'http': 'http://proxy.example.com:8080',
   'https': 'http://secureproxy.example.com:8090',
}

all_articles = newscatcherapi.get_search(q='Elon Musk',
                                         lang='en',
                                         countries='CA',
                                         page_size=100,
                                         proxies=proxies)
```

### Use \_from\_\_ and \_to\__ instead of \_from_ and _to_ like in NewsCatcher News API

In Python, we are not allowed to reserve variable names _from_ and _to_. If you try to use them, you will get a syntax error:

`SyntaxError: invalid syntax`

So, here is an example on how to use time variables \_from\_\_ and \_to\__ in \_get_search_ method.

```
all_articles = newscatcherapi.get_search(q='Elon Musk',
                                         lang='en',
                                         countries='CA,US',
                                         from_='2021/08/20',
                                         to_='2021/08/31')
```

# Tools used

To bootstrap this npm package we used [TSDX](https://github.com/jaredpalmer/tsdx#npm-start-or-yarn-start)

## Feedback

Feel free to contact us if you have spot a bug or have any suggestion at maksym`[at]`newscatcherapi.com -->
