# react-data-wrapper

Simple React component (713 B) for rendering data with loading, failure & empty states.

## Usage

```bash
npm i -S react-data-wrapper
```

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

#### ErrorLoading interface:

```typescript jsx
interface ErrorLoadingProps {
  reloading?: boolean;
  onReloadClick?: () => Promise<void>;
}
```
