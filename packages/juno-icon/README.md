# Juno-icon

### Install

```ts
npm i @ringcentral/juno-icon
// or
yarn add @ringcentral/juno-icon
```

## Use Icon

We can use any component with `RcIcon` prop `symbol`, pass component into symbol that will render svg icon with our `RcIcon` style.

```tsx
import { RcIcon } from '@ringcentral/juno';

import { Phone } from '@ringcentral/juno-icon';

const App = (props) => {
  return (
    <RcThemeProvider>
      <RcIcon symbol={Phone} />
    </RcThemeProvider>
  );
};
```
