# react-data-wrapper

Simple ReactJS component for rendering data with loading, failure & empty states.

Note: required React v16.8+

## Usage

```typescript jsx
import DataWrapper from 'react-data-wrapper';

<DataWrapper
  fetchFunc={store.fetch}
  isEmpty={store.empty}
  loading={<div>Loading posts...</div>}
  failure={ErrorLoading}
  empty={<div>No data</div>}
>
  <PostsList posts={store.posts} />
</DataWrapper>
```

## Install

```bash
npm i -S react-data-wrapper
```
