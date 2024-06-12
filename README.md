# Juno

![Static Badge](https://img.shields.io/badge/juno-core-f54785) [![NPM version](https://img.shields.io/npm/v/@ringcentral/juno/latest.svg)](https://www.npmjs.com/package/@ringcentral/juno)

![Static Badge](https://img.shields.io/badge/juno-icon-f5c747) [![NPM version](https://img.shields.io/npm/v/@ringcentral/juno-icon/latest.svg)](https://www.npmjs.com/package/@ringcentral/juno-icon)

[![Static Badge](https://img.shields.io/badge/github-8A2BE2)](https://github.com/ringcentral/juno) [![Static Badge](https://img.shields.io/badge/stackblitz-8A2BE2)](https://stackblitz.com/edit/juno-vite-example-zksfob?file=src%2FApp.tsx) [![Static Badge](https://img.shields.io/badge/Codesandbox-8A2BE2)](https://codesandbox.io/s/4j370)

Ringcentral React Component library, make your app have the same user experience as Ringcentral Apps.

base on [MATERIAL-UI](https://material-ui.com/).

Explore Juno with the [interactive live Storybook instance](https://ringcentral.github.io/juno/).

### Install

```ts
npm i @ringcentral/juno @ringcentral/juno-icon styled-components dayjs
// or
yarn add @ringcentral/juno @ringcentral/juno-icon styled-components dayjs
```

### Quick Start

All components we using need contain in the `RcThemeProvider`.

```tsx
import {
  RcAvatar,
  RcTooltip,
  RcButton,
  RcIcon,
  RcLink,
  RcCircularProgress,
  RcThemeProvider,
} from '@ringcentral/juno';
```

```html
<RcThemeProvider>
  <RcAvatar color="lake">SH</RcAvatar>
  <RcButton>Button</RcButton>
  <RcLink>LINK</RcLink>
  <RcCircularProgress />
  <RcCircularProgress size="{30}" color="secondary" />
</RcThemeProvider>
```

### Use Juno Icon

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
