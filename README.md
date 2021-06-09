# react-data-wrapper

Simple ReactJS component for rendering data with loading, failure & empty states.

Note: required React v16.9+

## Usage

```typescript jsx
import DataWrapper from 'react-data-wrapper';

<DataWrapper
  fetcher={store.fetch}
  loading={<div>Loading posts...</div>}
  failure={<ErrorLoading />}
  isEmpty={store.empty}
  empty={<div>No data</div>}
>
  <PostsList posts={store.posts} />
</DataWrapper>
```

Note: ErrorLoading interface:

```typescript jsx
interface ErrorLoadingProps {
  reloading?: boolean;
  onReloadClick?: () => Promise<void>;
}
```

📝 [Example code](https://github.com/SanichKotikov/react-hooks-mobx-demo/blob/master/src/posts/routes/Posts/Posts.tsx)

## Install

```bash
npm i -S react-data-wrapper
```
