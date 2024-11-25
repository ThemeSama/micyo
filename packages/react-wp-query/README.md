# @micyo/react-wp-query

With the @micyo/react-wp-query library, you can develop web pages and applications within a few hours using the WordPress REST API. Thanks to the existing hooks and helper components in the library, you can easily make your customizations. All that’s left for you is to apply styling to your web page.

## Project Objective

- Enhancing code readability by making WordPress REST API calls using the React Hook method
- Quickly creating interface elements by combining helper components

## Installation

The package can be installed via npm

```bash
npm install @micyo/react-wp-query --save
```

or via yarn

```bash
yarn add @micyo/react-wp-query
```

## Configuration

Wrap your project with the WPProvider component and pass the WordPress REST API URL you want to connect to as the **api** prop to the component. With the **clickEvent** prop, you can handle virtual routing for post meta clicks. You can adjust the date format for all date components on the pages using the **formatDate** prop. The links are set up in this way to allow you to work with any react framework or library you prefer.

```js
import { useCallback } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WPProvider } from '@micyo/react-wp-query';

const queryClient = new QueryClient();

const App = ({ children }) => {
  const clickEvent = useCallback(({ event, values, type }) => {
    event.preventDefault();
    //
    if (type === 'author') {
      // redirect author page with **values** arguments
    }
  }, []);

  const formatDate = useCallback((date) => {
    // format your date here
    return date;
  }, []);

  return (
    <WPProvider
      api="https://wordpress.org/news/wp-json/"
      clickEvent={clickEvent}
      formatDate={formatDate}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WPProvider>
  );
};

export default App;
```

### Using Axios for Requests (Custom Fetch Handler)

The example below uses a custom fetch handler for making all the requests with axios.

```
import apiFetch from '@wordpress/api-fetch';
import axios from 'axios';

apiFetch.setFetchHandler( ( options ) => {
	const { url, path, data, method } = options;

	return axios( {
		url: url || path,
		method,
		data,
	} );
} );
```

## Hooks

Get posts with usePosts Hook

```js
import { usePosts, Post, Title, Meta, Excerpt } from '@micyo/react-wp-query';

const LatestNews = () => {
  const [page, setPage] = React.useState(1);
  const { posts, pagination } = usePosts({
    queryArgs: {
      page
    }
  });

  return posts?.isLoading ? (
    <>Loading...</>
  ) : (
    <>
      {Array.isArray(posts?.data) &&
        posts?.data?.map((post) => (
          <Post key={`posts-${post.id}`} post={post}>
            <Title />
            <Meta />
            <Excerpt />
          </Post>
        ))}

      <button onClick={() => setPage((p) => p - 1)} disabled={!pagination.hasPrev}>
        Prev Page
      </button>
      <button onClick={() => setPage((p) => p + 1)} disabled={!pagination.hasNext}>
        Next Page
      </button>
    </>
  );
};

export default LatestNews;
```

## License

Copyright (c) 2024 themesama and individual contributors. Licensed under MIT license, see [LICENSE](https://github.com/ThemeSama/micyo/tree/main/LICENSE.md) for the full license.
