# react-data-wrapper

Simple ReactJS component for rendering data with loading, failure & empty states.

Note: required React v16.9+

## Usage

```typescript jsx
import DataWrapper from 'react-data-wrapper';

<DataWrapper
  fetchFunc={store.fetch}
  isEmpty={store.empty}
  loading={<div>Loading posts...</div>}
  failure={reload => <ErrorLoading onReload={reload} />}
  empty={<div>No data</div>}
>
  <PostsList posts={store.posts} />
</DataWrapper>
```

📝 [Example code](https://github.com/SanichKotikov/react-hooks-mobx-demo/blob/master/src/posts/routes/Posts/Posts.tsx)

## Install

```bash
npm i -S react-data-wrapper
```
