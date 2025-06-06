
### [2.45.1](https://github.com/ringcentral/juno/compare/juno-core-v2.45.0...juno-core-v2.45.1) (2025-03-26)


### Bug Fixes

* **NumberPicker:** shall add aria-valuenow for current value when role is spinbutton, or it will read 0 ([2e47998](https://github.com/ringcentral/juno/commit/2e4799896ba6e6094588ac9e76aed83406ca6e9d))

## [2.45.0](https://github.com/ringcentral/juno/compare/juno-core-v2.44.0...juno-core-v2.45.0) (2025-03-17)


### Features

* **PickerTextField:** add aria-hidden="true" on picker icon in endAdornment since this icon is purely decorative ([e00ca33](https://github.com/ringcentral/juno/commit/e00ca33804df4db50950c2d925fe8a15d64785c8))

## [2.44.0](https://github.com/ringcentral/juno/compare/juno-core-v2.43.1...juno-core-v2.44.0) (2025-03-13)


### Features

* **NumberPicker:** Add role=spinbutton to achieve A11y requirement ([d6ec8ee](https://github.com/ringcentral/juno/commit/d6ec8ee0b4d4e6a08bec641a97526050b9dad919))

### [2.43.1](https://github.com/ringcentral/juno/compare/juno-core-v2.43.0...juno-core-v2.43.1) (2024-12-05)


### Features

* **TabList:** fix tabList child memo not working ([e0e5bb9](https://github.com/ringcentral/juno/commit/e0e5bb953abfa869b2dd280183e1a4833c553d9c))
* **TabList:** optimize TabList component with useMemo ([7d5c4cf](https://github.com/ringcentral/juno/commit/7d5c4cf96e982745dbc69a9de30bd5ceb15970b6))
* **TabList:** throw error if idPrefix is missing in TabList ([aa69996](https://github.com/ringcentral/juno/commit/aa6999647635c38876611f5c1ff6b78a879ba6d2))

## [2.43.0](https://github.com/ringcentral/juno/compare/juno-core-v2.42.3...juno-core-v2.43.0) (2024-12-04)


### Features

* **TabList:** separate the binding relationship between TabContext and RcTabList ([ee40215](https://github.com/ringcentral/juno/commit/ee4021581ee8bcf2ec75365b452fa414c00a4362))

### [2.42.3](https://github.com/ringcentral/juno/compare/juno-core-v2.42.2...juno-core-v2.42.3) (2024-09-12)


### Bug Fixes

* **List, Menu:** [juno-core] fix list item focus inside issue with mui focus-visible issue ([985231b](https://github.com/ringcentral/juno/commit/985231bce9fc05873f0bb6554babcbc9e1c1826a))
* **List, Menu:** [juno-core] remove not need class ([4b4a8b9](https://github.com/ringcentral/juno/commit/4b4a8b9fb7392e1f8bfa995c1223a572284d2d2c))

### [2.42.2](https://github.com/ringcentral/juno/compare/juno-core-v2.42.0...juno-core-v2.42.2) (2024-07-11)


### Features

* **Downshift:** [juno-core] fix ut and lint ([6a3fe95](https://github.com/ringcentral/juno/commit/6a3fe95024097535ca959a564043d1f5db8bbebe))
* **Downshift:** [juno-core] remove downshift lisbox useless aria attr ([57d59c0](https://github.com/ringcentral/juno/commit/57d59c09199dda4a6c9c2d3905c766df7a514643))

## [2.42.0](https://github.com/ringcentral/juno/compare/juno-core-v2.41.4...juno-core-v2.42.0) (2024-07-03)


### ⚠ BREAKING CHANGES

* **DialPad:** `useKeyAudio` change API change to `processor`, no longer have `volume` and `muted`

### Features

* **DialPad:** [juno-core] support DialPad with `sinkId` ([05622ad](https://github.com/ringcentral/juno/commit/05622adb22965c6661c16fc8ae4fdfcfcfacd2cd))

### [2.41.4](https://github.com/ringcentral/juno/compare/juno-core-v2.41.3...juno-core-v2.41.4) (2024-06-19)


### Bug Fixes

* **Select:** [juno-core] fix Select issue with aria-selected same as latest mui for fix a11y issue ([75d95de](https://github.com/ringcentral/juno/commit/75d95de790b5cbdd22eee36819f4f2d85c8e6b40))

### [2.41.3](https://github.com/ringcentral/juno/compare/juno-core-v2.41.2...juno-core-v2.41.3) (2024-06-12)

### [2.41.2](https://github.com/ringcentral/juno/compare/juno-core-v2.41.1...juno-core-v2.41.2) (2024-05-28)


### Features

* **juno-core:** support focus inside with Pickers ([7584a91](https://github.com/ringcentral/juno/commit/7584a91bb268ba7c35af450fb3849d20644063d8))

### [2.41.1](https://github.com/ringcentral/juno/compare/juno-core-v2.41.0...juno-core-v2.41.1) (2024-05-20)


### Bug Fixes

* **Dialer:** support external window ([1159cca](https://github.com/ringcentral/juno/commit/1159cca660ef22ee0079c2fdad40984089d7746e))

## [2.41.0](https://github.com/ringcentral/juno/compare/juno-core-v2.40.1...juno-core-v2.41.0) (2023-12-25)


### Features

* **juno-core:** update react-virtuoso version update to v4.6.2 ([feef2bb](https://github.com/ringcentral/juno/commit/feef2bb38a4c680e16e2479cc5cf2ba79dd6af04))


### Bug Fixes

* **Doc:** [juno-core] fix error doc ([dee6bcd](https://github.com/ringcentral/juno/commit/dee6bcd3babb6bbd55ca8dfcdf7ebbc71fb54d14))

### [2.40.1](https://github.com/ringcentral/juno/compare/juno-core-v2.40.0...juno-core-v2.40.1) (2023-12-21)


### Features

* **juno-core:** hide tooltip when host element be hidden or disappear ([12ea133](https://github.com/ringcentral/juno/commit/12ea133e952c5698a835562145f121ff09fb8068))


### Bug Fixes

* **Doc:** [juno-core] update example to OGG ([0162006](https://github.com/ringcentral/juno/commit/0162006462c645d94ff5c659f9865b702ea768b6))

## [2.40.0](https://github.com/ringcentral/juno/compare/juno-core-v2.39.2...juno-core-v2.40.0) (2023-12-19)


### ⚠ BREAKING CHANGES

* **DialerPad:** change default RcDialerPadSounds to MPEG format for better work with most browser, if you need ogg, please import by your self with `import { RcDialerPadSoundsOGG } from @ringcentral/juno;`

### Bug Fixes

* **DialerPad:** [juno-core] add DialerPad mpeg format sound for work with safari ([c64461a](https://github.com/ringcentral/juno/commit/c64461a0ac9d674a68d97b2f4720d6a575d2085d))
* **project:** [juno-core] update miss update dark json in example ([ff1fb7e](https://github.com/ringcentral/juno/commit/ff1fb7e396a6d51167ffb7d52ea0868b50d2d1fe))

### [2.39.2](https://github.com/ringcentral/juno/compare/juno-core-v2.39.1...juno-core-v2.39.2) (2023-12-04)


### Bug Fixes

* **juno-core:** fix datepicker style issue with small size ([fd8b4a0](https://github.com/ringcentral/juno/commit/fd8b4a0102ec2aa04e2441fafac9982667ced97e))

### [2.39.1](https://github.com/ringcentral/juno/compare/juno-core-v2.39.0...juno-core-v2.39.1) (2023-09-26)


### Bug Fixes

* **TimePicker:** fix time picker minute gap ([349323f](https://github.com/ringcentral/juno/commit/349323f8b9573ba8156d9e8b48129fce8b054393))

## [2.39.0](https://github.com/ringcentral/juno/compare/juno-core-v2.38.0...juno-core-v2.39.0) (2023-09-22)


### ⚠ BREAKING CHANGES

* **TimePicker:** update the minute step from 15 to 5

### Features

* **TimePicker:** update the minute step from 15 to 5 ([3d293db](https://github.com/ringcentral/juno/commit/3d293dbd21abad1073a20d2ff533b0f64ac1c2e3))

## [2.38.0](https://github.com/ringcentral/juno/compare/juno-core-v2.37.0...juno-core-v2.38.0) (2023-09-08)


### ⚠ BREAKING CHANGES

* **update-typography:** update fontSize of body1 and body2 to 14px; update lineHight of body1 and body2 to 20px

### Features

* **update-typography:** [Theme] update typography body1 and body2 ([bcd0d64](https://github.com/ringcentral/juno/commit/bcd0d64c507cd5f04dac7f05c4cf8030acd95ad4))

## [2.37.0](https://github.com/ringcentral/juno/compare/juno-core-v2.36.5...juno-core-v2.37.0) (2023-08-10)


### ⚠ BREAKING CHANGES

* **Browser compatibility:** remove prop fixWebKit154 of ThemeProvider; remove utils about safari 15.4  animation issue

### Features

* **Browser compatibility:** remove hack fixing about safari 15.4  animation issue ([e2818ac](https://github.com/ringcentral/juno/commit/e2818acb8ed9554e39a0ca582da4dd0f1827e434))


### Bug Fixes

* **VirtualizedMenu:** Fix menu position issue ([0dd5121](https://github.com/ringcentral/juno/commit/0dd51212c28480daf012c5bb6c0f4fafb284253e))

### [2.36.5](https://github.com/ringcentral/juno/compare/juno-core-v2.36.4...juno-core-v2.36.5) (2023-08-10)


### Bug Fixes

* **Tooltip:** Fix tooltip position when it is near the edge of the screen ([62580df](https://github.com/ringcentral/juno/commit/62580dfb9589e7a03926fca5dfcb3cbf7747227b))

### [2.36.4](https://github.com/ringcentral/juno/compare/juno-core-v2.36.3...juno-core-v2.36.4) (2023-08-03)


### Bug Fixes

* **Popper:** fix the issue with blurry rendering of popper. ([1d43bfa](https://github.com/ringcentral/juno/commit/1d43bfa114de77b5082d243f95f2cd1e25ee4a54))

### [2.36.3](https://github.com/ringcentral/juno/compare/juno-core-v2.36.2...juno-core-v2.36.3) (2023-07-13)


### Bug Fixes

* **typography-warning:** [typography] warning when typography is not existed ([35291e5](https://github.com/ringcentral/juno/commit/35291e5e7b52dc2cfb59071a7d39750edaee8527))

### [2.36.2](https://github.com/ringcentral/juno/compare/juno-core-v2.36.1...juno-core-v2.36.2) (2023-06-26)


### Bug Fixes

* **fix-typography-type:** [Types] improve RcLink, RcText, RcTypography, RcInlineEditable variant type for extension typography token ([67c2763](https://github.com/ringcentral/juno/commit/67c2763af841f8f397c849eafe83a5ec045c9352))

### [2.36.1](https://github.com/ringcentral/juno/compare/juno-core-v2.36.0...juno-core-v2.36.1) (2023-06-26)


### Bug Fixes

* **fix-typography-extend:** [DefaultTheme] fix typography type extension ([68680ba](https://github.com/ringcentral/juno/commit/68680ba9eea44524fdfda7ff44d55d8a9ead85bd))

## [2.36.0](https://github.com/ringcentral/juno/compare/juno-core-v2.35.5...juno-core-v2.36.0) (2023-06-02)


### Features

* **JMX-3428:** [SubMenu] support touch interaction on mobile ([641c74c](https://github.com/ringcentral/juno/commit/641c74cad1493fc0d72bacc8570b03521cfa354b))

### [2.35.5](https://github.com/ringcentral/juno/compare/juno-core-v2.35.4...juno-core-v2.35.5) (2023-05-31)


### Bug Fixes

* **Presence:** fix issue on 1080p dark theme ([8a4e921](https://github.com/ringcentral/juno/commit/8a4e921ce2389b6fd940f06f3284b4bf18aec3f3))

### [2.35.4](https://github.com/ringcentral/juno/compare/juno-core-v2.35.3...juno-core-v2.35.4) (2023-05-19)


### Bug Fixes

* **fix-dot-badge:** [Badge] fix issue about dot Badge does not support `invisible` and `showZero` ([4600aca](https://github.com/ringcentral/juno/commit/4600acac9fe80d1b45d1d04777cd8e1fff717b45))

### [2.35.3](https://github.com/ringcentral/juno/compare/juno-core-v2.35.2...juno-core-v2.35.3) (2023-05-11)


### Bug Fixes

* **fix-DatePicker:** [DatePicker] get document/window from RcPortalWindowContext ([8413810](https://github.com/ringcentral/juno/commit/84138106eab9eb80f53a94da0d4a089e46214175))

### [2.35.2](https://github.com/ringcentral/juno/compare/juno-core-v2.35.1...juno-core-v2.35.2) (2023-05-08)


### Bug Fixes

* **fix-more-tabs:** [MoreMenuTabs] fix issue about update groupInfo incorrectly ([938dbb2](https://github.com/ringcentral/juno/commit/938dbb2c4fc5b1c85e9cc2e5f9e786682c2d591d))

### [2.35.1](https://github.com/ringcentral/juno/compare/juno-core-v2.35.0...juno-core-v2.35.1) (2023-05-08)


### Bug Fixes

* **JMX-3143:** [useTouchMouseEvent] fix ios touch issue ([8ae344c](https://github.com/ringcentral/juno/commit/8ae344cee65f47919b53383d6517e93af3ead6a3))
* **juno-core:** [Presence] fix not pick custom props ([486efdb](https://github.com/ringcentral/juno/commit/486efdb36f0f1b55326955c9c1a768545475d72e))

## [2.35.0](https://github.com/ringcentral/juno/compare/juno-core-v2.34.0...juno-core-v2.35.0) (2023-04-27)


### Features

* **undockMoreMenu:** [MoreMenuTabs] support external window ([e86467b](https://github.com/ringcentral/juno/commit/e86467b0fa537aca5bc3fee1afc7768b6c3a5112))

## [2.34.0](https://github.com/ringcentral/juno/compare/juno-core-v2.33.0...juno-core-v2.34.0) (2023-04-25)


### ⚠ BREAKING CHANGES

* **Presence:** Change the `xsmall` size of RcPresence from 8px to 10px.

### Features

* **JMX-2860:** [MoreMenuTabs] refactor more menu responsive logic ([3b14711](https://github.com/ringcentral/juno/commit/3b14711e26e4b1a97ede0b43d1364b7ca045d050))
* **JMX-2860:** [useDebounce/useThrottle] support `leading` and `trailing` setting ([2c86c88](https://github.com/ringcentral/juno/commit/2c86c88bb60e784f3e8d83d08a6679e12040bb96))
* **Presence:** update presence size for xsmall ([3077e88](https://github.com/ringcentral/juno/commit/3077e88f73390bd582bfdff409ba233c33092a20))


### Bug Fixes

* **Presence:** change align draft when zoom in ([3cda8f2](https://github.com/ringcentral/juno/commit/3cda8f22fc58f57632f2cd9c0586fc67f9a77d81))

## [2.33.0](https://github.com/ringcentral/juno/compare/juno-core-v2.32.0...juno-core-v2.33.0) (2023-03-22)


### Features

* **JMX-2378:** [MoreMenuTab] support custom icon by menu open state ([9c417d8](https://github.com/ringcentral/juno/commit/9c417d8090d3294c1c14cbb01b5cfb3368f730bc))
* **JMX-2378:** [TabList] memo children to reduce moreMenu variant re-render ([84c3ff1](https://github.com/ringcentral/juno/commit/84c3ff1d3450b2f9f691637111b35c8115d05214))
* **Presence:** update style of offline, unavailable, notReady,DND status ([95ab7a6](https://github.com/ringcentral/juno/commit/95ab7a66bb01deb36abd4464b3e80ba1d22c39dd))


### Bug Fixes

* **Presence:** change presence border to box shadow to avoid zoom in/ zoom out issue ([44fc213](https://github.com/ringcentral/juno/commit/44fc213d04d66c3ba3e61920246f8dd01e7171b8))
* **Presence:** change presence border to box shadow to avoid zoom in/ zoom out issue ([91812d1](https://github.com/ringcentral/juno/commit/91812d1df4bbf3f6b80b3f5c56005f99dced195c))

## [2.32.0](https://github.com/ringcentral/juno/compare/juno-core-v2.31.0...juno-core-v2.32.0) (2023-03-13)


### Features

* **TimePicker:** support custom period text ([31b17ee](https://github.com/ringcentral/juno/commit/31b17ee9286d5d71ed8f5beaa939cc4caaf37560))


### Bug Fixes

* **focusRing:** fix focusRing color ([0a237d3](https://github.com/ringcentral/juno/commit/0a237d393de9f1d9f85d694ed378062fbd1b00e9))
* **VirtualizedMenu:** fix VirtualizedMenu position issue ([d09675a](https://github.com/ringcentral/juno/commit/d09675a05c5449c217e799a380047d8821e0b8ea))

## [2.31.0](https://github.com/ringcentral/juno/compare/juno-core-v2.30.1...juno-core-v2.31.0) (2023-03-08)


### Features

* **Presence:** revert changes for Presence icon ([6a75e4b](https://github.com/ringcentral/juno/commit/6a75e4be392b9423c692c1851a0f678605281a1a))

### [2.30.1](https://github.com/ringcentral/juno/compare/juno-core-v2.30.0...juno-core-v2.30.1) (2023-03-08)


### Features

* **RCUI:** [TextField] support placeholder ellipsis ([f2e460c](https://github.com/ringcentral/juno/commit/f2e460cbfbcc53bfe87c076b762e12e417c1e620))

## [2.30.0](https://github.com/ringcentral/juno/compare/juno-core-v2.29.0...juno-core-v2.30.0) (2023-03-06)


### Features

* **Icon:** update icon PresenceDnd ([da22fd8](https://github.com/ringcentral/juno/commit/da22fd8fc0734a911f0b63b27b8582c4bd81af06))
* **Presence:** update style of offline, unavailable, notReady status and remove unused CircleDiv component ([48a8f25](https://github.com/ringcentral/juno/commit/48a8f25229ee2947f7cdfdbcf76c2ef3942370f4))

## [2.29.0](https://github.com/ringcentral/juno/compare/juno-core-v2.28.0...juno-core-v2.29.0) (2023-02-22)


### Features

* **Presence:** add new icon support for Presence ([9a31c98](https://github.com/ringcentral/juno/commit/9a31c980a81ce48d7dbc69dd71cd778194f0a1c1))

## [2.28.0](https://github.com/ringcentral/juno/compare/juno-core-v2.27.0...juno-core-v2.28.0) (2023-02-16)


### Features

* **improve-more-menu-tabs-resize:** [Tabs] add prop `resizeThrottleTime` to improve resize performance ([1578f1a](https://github.com/ringcentral/juno/commit/1578f1a2d111db454fb9da13f466bbd76cf8db37))

## [2.27.0](https://github.com/ringcentral/juno/compare/juno-core-v2.26.2...juno-core-v2.27.0) (2023-01-16)


### ⚠ BREAKING CHANGES

* **JMX-1543:** Remove `overcan` of VirtualizedMenuList. If you need this to improve performance, please use `increaseViewportBy` to replace it.
* **JMX-1543:** Remove `retryOptions` of useOnlyOneFocusable. If you need this, please use `useRetry` directly

### Features

* **Icon:** add icon `calls`, `calls-border`, `phone-inbox`, `phone-inbox-border`, `transcript-bottom` ([26cb576](https://github.com/ringcentral/juno/commit/26cb5762f6b0426e5771d51dc4dbf19a104133e8))
* **JMX-1543:** [useOnlyOneFocusable] remove retry logic of `focusIndex` ([d24b3ac](https://github.com/ringcentral/juno/commit/d24b3acd3830592642cb44e9cb53669343c0f08a))
* **JMX-1543:** [VirtualizedMenuList] improve focus logic ([2f8d491](https://github.com/ringcentral/juno/commit/2f8d4919460678202e8596982f3801fa015463b0))


### Bug Fixes

* **JMX-1543:** [Virtuoso] fix virtuoso root HtmlElement type ([07e2dc2](https://github.com/ringcentral/juno/commit/07e2dc293893b8067b28e2ae7d2141f02a13f603))

### [2.26.2](https://github.com/ringcentral/juno/compare/juno-core-v2.26.1...juno-core-v2.26.2) (2023-01-04)


### Features

* **FiJI-59870:** [DatePicker] change focusVisible style to focusRing style ([956ebc9](https://github.com/ringcentral/juno/commit/956ebc982de44c9138aa1a2e96c35d806349d922))

### [2.26.1](https://github.com/ringcentral/juno/compare/juno-core-v2.26.0...juno-core-v2.26.1) (2023-01-03)


### Features

* **TimePicker:** change TimePicker open focus to hour ([908b75c](https://github.com/ringcentral/juno/commit/908b75cf39d082f2012f86e261f4d4e2f77097ee))

## [2.26.0](https://github.com/ringcentral/juno/compare/juno-core-v2.25.1...juno-core-v2.26.0) (2023-01-03)


### Bug Fixes

* **DatePicker/TimePicker:** revert improve DatePicker/TimePicker first focus ([b90a190](https://github.com/ringcentral/juno/commit/b90a190641ac975580a104864e5a66f677f316cf))

### [2.25.1](https://github.com/ringcentral/juno/compare/juno-core-v2.25.0...juno-core-v2.25.1) (2022-12-14)


### Bug Fixes

* **FIJI-56688:** [Tab] fix MoreMenuTabs compute tab error ([15bf2bb](https://github.com/ringcentral/juno/commit/15bf2bbfd95f87a930134c618daa4d1bc86db50c))
* **JUP-911:** [A11y] fix IconButton, Button, Switch focusRing style issue in safari ([ba1df4e](https://github.com/ringcentral/juno/commit/ba1df4ed4bf005f440ce3196439386e6b805ee6d))

## [2.25.0](https://github.com/ringcentral/juno/compare/juno-core-v2.24.0...juno-core-v2.25.0) (2022-12-13)


### Features

* **FIJI-55778:** [DatePicker/TimePicker] improve DatePicker/TimePicker first focus ([cf3b38d](https://github.com/ringcentral/juno/commit/cf3b38dd07057b9d06e37fe7b0096a51a2c939a0))

## [2.24.0](https://github.com/ringcentral/juno/compare/juno-core-v2.23.1...juno-core-v2.24.0) (2022-12-12)


### Features

* **FIJI-53990:** [Downshift] improve Downshift focus logic ([c667abb](https://github.com/ringcentral/juno/commit/c667abb91d3195da2f7a20bb36cc6f5528604f71))


### Bug Fixes

* **FIJI-53990:** [Form] fix issue about screen reader cannot read label if id are not passed to Select and TextField ([de6e3ce](https://github.com/ringcentral/juno/commit/de6e3ce72a9cdc7c4b0263f1b368522fd0081a63))

### [2.23.1](https://github.com/ringcentral/juno/compare/juno-core-v2.23.0...juno-core-v2.23.1) (2022-12-05)


### Bug Fixes

* **FIJI-59449:** [Switch] fix switch overflow issue ([d932f65](https://github.com/ringcentral/juno/commit/d932f65d7779ed3044326b1881809f1b7e774c0f))

## [2.23.0](https://github.com/ringcentral/juno/compare/juno-core-v2.22.1...juno-core-v2.23.0) (2022-11-23)


### Features

* **FIJI-58646:** [DatePicker] replace moment with dayjs ([15ce1ab](https://github.com/ringcentral/juno/commit/15ce1abc889e543bf7fea5e8c872d79eb2112b39))

### [2.22.1](https://github.com/ringcentral/juno/compare/juno-core-v2.22.0...juno-core-v2.22.1) (2022-11-22)


### Bug Fixes

* **fix-theme-props:** [Components] fix ThemeProvider cannot set default focusVariant issue ([b2852b8](https://github.com/ringcentral/juno/commit/b2852b8a7bd5bf72811baa71e5f29ec033d49861))

## [2.22.0](https://github.com/ringcentral/juno/compare/juno-core-v2.21.2...juno-core-v2.22.0) (2022-11-18)


### Features

* **FIJI-58545:** [A11y] Button, IconButton, ListItem, MenuItem support focusRing; improve Switch focusRing ([4881099](https://github.com/ringcentral/juno/commit/4881099339f27c18e5573d6f7f9501152e0d785f))

### [2.21.2](https://github.com/ringcentral/juno/compare/juno-core-v2.21.1...juno-core-v2.21.2) (2022-11-02)


### Bug Fixes

* **fix-downshift-blurry:** [Downshift] fix downshift blurry issue ([3e120b6](https://github.com/ringcentral/juno/commit/3e120b6bce7a951e349493f6dc55cb69994e34ea))

### [2.21.1](https://github.com/ringcentral/juno/compare/juno-core-v2.21.0...juno-core-v2.21.1) (2022-10-20)


### Bug Fixes

* **IconButton:** [juno-core] remove autoFocus pick and error autoFocus deprecated ([0f6038c](https://github.com/ringcentral/juno/commit/0f6038c157596a6dbab61a3988a5a9ceecb9c15b))

## [2.21.0](https://github.com/ringcentral/juno/compare/juno-core-v2.20.3...juno-core-v2.21.0) (2022-10-20)


### Features

* **imporve-downshift-focus:** [downshift] imporve downshift focus when delete chip by clicking remove icon ([ed61369](https://github.com/ringcentral/juno/commit/ed61369d732402f979ad30e5a4d03180090477f0))

### [2.20.3](https://github.com/ringcentral/juno/compare/juno-core-v2.20.1...juno-core-v2.20.3) (2022-09-30)


### Bug Fixes

* **FIJI-56688:** [MoreMenuTab] fix re-calculate logic at “moreMenu” mode ([abb89b6](https://github.com/ringcentral/juno/commit/abb89b62c85490bed78d4990eddddff8841ec143))

### [2.20.1](https://github.com/ringcentral/juno/compare/juno-core-v2.20.0...juno-core-v2.20.1) (2022-09-19)


### Bug Fixes

* **Badge:** change badge default color to `umi.mentioned` and text color to `umi.text` ([0258805](https://github.com/ringcentral/juno/commit/0258805a112499fbf391a141743f7b0fb08ab67d))

## [2.20.0](https://github.com/ringcentral/juno/compare/juno-core-v2.19.2...juno-core-v2.20.0) (2022-08-30)


### Features

* **Downshift:** support toggleWithInput with autocomplete variant ([6f55077](https://github.com/ringcentral/juno/commit/6f550774d4a97a6585bc14d775d42e65466547ec))


### Bug Fixes

* **Downshift:** not focus again when toggle with input ([d030c70](https://github.com/ringcentral/juno/commit/d030c707b503dbb45443d4f84b2528c7c953ba5b))

### [2.19.2](https://github.com/ringcentral/juno/compare/juno-core-v2.19.0...juno-core-v2.19.2) (2022-08-26)


### Bug Fixes

* **Downshift:** accept custom style outside ([9667d3b](https://github.com/ringcentral/juno/commit/9667d3b0eacab3282c9434910cc4e11993374b15))
* **Downshift:** fix autoComplete mode scroll init position ([3f14de9](https://github.com/ringcentral/juno/commit/3f14de9556c02401ec1c1d38e42ae0b72bd3b14e))

## [2.19.0](https://github.com/ringcentral/juno/compare/juno-core-v2.18.0...juno-core-v2.19.0) (2022-08-25)

### Features

* **vite-support:** [Package] add createESMPkg script to create package.json for all subpath

## [2.18.0](https://github.com/ringcentral/juno/compare/juno-core-v2.17.0...juno-core-v2.18.0) (2022-08-15)

### Features
* **update-backdrop-color:** [Dialog] bump up the backdrop color to 70% opacity

## [2.17.0](https://github.com/ringcentral/juno/compare/juno-core-v2.16.1...juno-core-v2.17.0) (2022-08-02)


### ⚠ BREAKING CHANGES

* **Cleanup:** [Autocomplete] remove autocomplete should use downshift
* **Cleanup:** [Grid] remove deprecated Grid, should use new Grid
* **Cleanup:** [ImageView] remove ImageView
* **Cleanup:** [Tables] remove deprecated Tables, should use new Table
* **Cleanup:** [TextWithEllipsis, TextWithHighlight, TextWithLink, TextWithTooltip] remove all not need Text related components, should use Text Component

### Features

* **Cleanup:** [Components] remove all not need deprecated components ([ed79974](https://github.com/ringcentral/juno/commit/ed79974fad985f861a92d57fa4e27ea74ff4be20))

### [2.16.1](https://github.com/ringcentral/juno/compare/juno-core-v2.16.0...juno-core-v2.16.1) (2022-07-19)


### Bug Fixes

* **fix-downshift-type-issue:** [downshift] fix highlighted type of RcDownshiftRenderOptionState ([16b222e](https://github.com/ringcentral/juno/commit/16b222e38b725d792a236c22bfc1db21fd7e336f))

## [2.16.0](https://github.com/ringcentral/juno/compare/juno-core-v2.15.0...juno-core-v2.16.0) (2022-07-19)

### ⚠ BREAKING CHANGES

* **RCUI-707:** [Downshift] change `renderOptions` callback function field `selected` rename to `highlighted`

> if you use RcMenu `selected` to show highlighted, you need to change to `focused`
> if you use `selected` to show highlighted, you need to change to `highlighted`


example:

```tsx
renderOption={(
  { label, id, error, unSelectable, isSuggestion, isError, ...restProps },
  state,
) => (
  <RcMenuItem
    id={`${id}`}
    {...{ ...restProps, component: 'div' }}
    selected={state.selected}
    key={`${id || label}-${state.index}`}
  >
    {label}
  </RcMenuItem>
)}

// switch to =>

renderOption={(
  { label, id, error, unSelectable, isSuggestion, isError, ...restProps },
  state,
) => (
  <RcMenuItem
    id={`${id}`}
    {...{ ...restProps, component: 'div' }}
    // props: `selected` => `focused`
    // value: `selected` => `highlighted`
    focused={state.highlighted}
    key={`${id || label}-${state.index}`}
  >
    {label}
  </RcMenuItem>
)}
```

### Features

* **Downshift:** change `renderOptions` callback function field `selected` rename to `highlighted` ([4db0c3a](https://github.com/ringcentral/juno/commit/4db0c3a99dbdbb8f97c4fb4a268cf1cecfe3190b))
* **Downshift:** separate highlighted and selected when in `autocomplete` variant ([2e450cb](https://github.com/ringcentral/juno/commit/2e450cb98c0188cdfcee9521adb10614312cdcec))
* **Downshift:** support custom `PopperComponent` ([e68721e](https://github.com/ringcentral/juno/commit/e68721e86f8c1a9c630821f557e11b751aa233d5))


### Bug Fixes

* **MenuItem, ListItem:** support focused for add focused style ([6672509](https://github.com/ringcentral/juno/commit/6672509c04483a9823d60e6c4b3bbe8c78ff40ac))
* **MenuItem, ListItem:** sync `MenuItem` and `ListItem` style ([757e7d8](https://github.com/ringcentral/juno/commit/757e7d88090155fc73769915834806ca597bba8c))

## [2.15.0](https://github.com/ringcentral/juno/compare/juno-core-v2.14.0...juno-core-v2.15.0) (2022-07-18)


### ⚠ BREAKING CHANGES

* **Downshift:** [Downshift] that popper root element will be wrap a `div` for support animation work

### Features

* **Downshift:** support animation with menu and non virtualize mode ([7b97be3](https://github.com/ringcentral/juno/commit/7b97be3374ca240916365596c66525df62ad4103))
* **Downshift:** support custom anchorElType with `PopperProps.anchorElType` ([eb74ead](https://github.com/ringcentral/juno/commit/eb74ead7581b7b6e71fd77ae08e5d6dc19669e20))
* **Downshift:** support custom toggleButton with `getToggleButtonProps` ([3848237](https://github.com/ringcentral/juno/commit/3848237416d5dc197fedcf1a84b903e98fba467d))


### Bug Fixes

* **Downshift:** fix popper position show position with `bottom-start` and `top-start` ([45149bd](https://github.com/ringcentral/juno/commit/45149bd9f9a063272e18bb704ebb59127b499065))

## [2.14.0](https://github.com/ringcentral/juno/compare/juno-core-v2.13.1...juno-core-v2.14.0) (2022-06-22)


### ⚠ BREAKING CHANGES

* **Select:** [Select] when add title in `RcSelet` title will move to root element not in input element

### Bug Fixes

* **Select:** [Select] fix select title prop pass in incorrect dom ([4bd94f9](https://github.com/ringcentral/juno/commit/4bd94f9b110593753e32ddcbca72cd10a0f46549))

### [2.13.1](https://github.com/ringcentral/juno/compare/juno-core-v2.13.0...juno-core-v2.13.1) (2022-05-26)


### Bug Fixes

* **fix-dialog-size:** [Dialog] make sure `fullScreen` can work correctly when `maxWidth` is `xs` ([95e3014](https://github.com/ringcentral/juno/commit/95e3014cc0c9865f76dbbdf66c8b11560ee0d538))

## [2.13.0](https://github.com/ringcentral/juno/compare/juno-core-v2.12.3...juno-core-v2.13.0) (2022-05-25)


### ⚠ BREAKING CHANGES

* **fix-dialog-size:** change Dialog `max-width` to 400px from 444px when maxWidth=`xs`

### Bug Fixes

* **fix-card-hover-action:** [CardHoverActions] add `z-index` to make sure `CardHoverActions` would not be covered by `CardSelectionArea` ([e4e80bc](https://github.com/ringcentral/juno/commit/e4e80bca4b806fc479ae38f6dcb43eecfcfe67f4))
* **fix-dialog-size:** [Dialog] change Dialog `max-width` to to follow design when maxWidth=`xs` ([c92cec7](https://github.com/ringcentral/juno/commit/c92cec7312f9d45957a3e4c80820f02f19c16bdb))
* **fix-useEventListener-type:** [useEventListener] fix `callback` and `event` type issues ([9a04229](https://github.com/ringcentral/juno/commit/9a04229a2bfd1dfe74ae368c0777be3a64fcb14a))

### [2.12.4](https://github.com/ringcentral/juno/compare/juno-core-v2.12.3...juno-core-v2.12.4) (2022-05-19)


### Bug Fixes

* **fix-card-hover-action:** [CardHoverActions] add `z-index` to make sure `CardHoverActions` would not be covered by `CardSelectionArea` ([e4e80bc](https://github.com/ringcentral/juno/commit/e4e80bca4b806fc479ae38f6dcb43eecfcfe67f4))
* **fix-useEventListener-type:** [useEventListener] fix `callback` and `event` type issues ([9a04229](https://github.com/ringcentral/juno/commit/9a04229a2bfd1dfe74ae368c0777be3a64fcb14a))

### [2.12.3](https://github.com/ringcentral/juno/compare/juno-core-v2.12.2...juno-core-v2.12.3) (2022-05-11)


### Bug Fixes

* **fix-dialog-a11y:** [Dialog] add `aria-modal=true` attribute ([38895cd](https://github.com/ringcentral/juno/commit/38895cdb63bb432d1067b018d0f48a506dedc675))

### [2.12.2](https://github.com/ringcentral/juno/compare/juno-core-v2.12.1...juno-core-v2.12.2) (2022-05-09)


### Bug Fixes

* **FIJI-50300:** [PortalManager] fix `_feedbackMap` memory leak issue ([216ac96](https://github.com/ringcentral/juno/commit/216ac96298aac897a178bd9540a2e5940e66b90e))

### [2.12.1](https://github.com/ringcentral/juno/compare/juno-core-v2.12.0...juno-core-v2.12.1) (2022-05-05)


### Bug Fixes

* **Virtuoso:** [Virtuoso] ignore flushSync cause framer still not support that flushSync ([273e897](https://github.com/ringcentral/juno/commit/273e8978f601d45d541dc4ddb10ed61953c79bac))

## [2.12.0](https://github.com/ringcentral/juno/compare/juno-core-v2.11.0...juno-core-v2.12.0) (2022-04-28)


### ⚠ BREAKING CHANGES

* **DialPad:** fix externalWindow for DialPadButton

### Features

* **DialPad:** support externalWindow for RcDialPadButton ([13d935e](https://github.com/ringcentral/juno/commit/13d935e85b1320e9ce951ef4dc11d723fcd85976))


### Bug Fixes

* **fix-change-log:** [PortalHost] export `HasPortalParentProvider` ([dd1aadd](https://github.com/ringcentral/juno/commit/dd1aadd1991265a46c2aa707423bbfcf92fb5524))

## [2.11.0](https://github.com/ringcentral/juno/compare/juno-core-v2.10.0...juno-core-v2.11.0) (2022-04-28)


### Features

* **FIJI-50006:** [virtuoso] upgrade virtuoso version to v2.10.1 ([ad9cdf7](https://github.com/ringcentral/juno/commit/ad9cdf7e17b39ba664727be1406144022e85d2ab))
* **Tabs:** support updateAllTabsSize in computeWhetherToUseMoreMode ([622264f](https://github.com/ringcentral/juno/commit/622264f5f3d6a0f6636e427abf48d578ac40fb03))


### Bug Fixes

* **FIJI-50006:** [PortalHost] fix issue about nested components that support portalManager ([dba0426](https://github.com/ringcentral/juno/commit/dba042698bd7adc1f12fb577198b7f704b031037))
* **FIJI-50006:** [TextField] fix issue about clear button lost when TextField is uncontrolled ([2707280](https://github.com/ringcentral/juno/commit/270728012ffaae1110e72f921a2294c572ff3c2f))
* **FIJI-50006:** [VirtualizedMenu] change vl menu animation to fade ([d4d2864](https://github.com/ringcentral/juno/commit/d4d28642ef48ce071a86d8d5b79310c43d061051))

## [2.9.0](https://github.com/ringcentral/juno/compare/juno-core-v2.8.1...juno-core-v2.9.0) (2022-04-21)


### Features

* **fix-iconButton-disabled:** [Themes] update palette.light ([c644b98](https://github.com/ringcentral/juno/commit/c644b98c636f517d715c1a22a25310c685f2b5df))


### Bug Fixes

* **fix-iconButton-disabled:** [IconButton] fix contained IconButton `disabled` style issue ([b9a216c](https://github.com/ringcentral/juno/commit/b9a216cf1897a739efb5684b67c6d7603087149c))

### [2.8.1](https://github.com/ringcentral/juno/compare/juno-core-v2.8.0...juno-core-v2.8.1) (2022-04-20)


### Bug Fixes

* **fix-iconButton-contained:** [IconButton] fix icon size issue ([60af026](https://github.com/ringcentral/juno/commit/60af02656b3315659864619d1cf3160be24526a5))

## [2.8.0](https://github.com/ringcentral/juno/compare/juno-core-v2.7.0...juno-core-v2.8.0) (2022-04-20)


### ⚠ BREAKING CHANGES

* **fix-iconButton-contained:** By default, RcIcon color will inherit RcIconButton color. No more set RcIcon color directly anyway

### Bug Fixes

* **fix-iconButton-contained:** [IconButton] fix custom icon color issue when variant of IconButton is contained ([fa661c6](https://github.com/ringcentral/juno/commit/fa661c68f8bfab08be07820319b4aa1deed23b0e))

## [2.7.0](https://github.com/ringcentral/juno/compare/juno-core-v2.7.0...juno-core-v2.7.0) (2022-04-19)

## [2.7.0](https://github.com/ringcentral/juno/compare/juno-core-v2.6.0...juno-core-v2.7.0) (2022-04-19)


### ⚠ BREAKING CHANGES

* **fix-iconButton-contained:** By default, RcIcon color will inherit RcIconButton color when variant of IconButton is contained. No more set RcIcon color directly

### Features

* **DialPad:** [DialPad] support `autoSize` prop for use can custom dialpad style ([747a7f7](https://github.com/ringcentral/juno/commit/747a7f750840816a3966c6f3254d60fd74d1b6d6))


### Bug Fixes

* **fix-iconButton-contained:** [IconButton] fix custom icon color issue when variant of IconButton is contained ([e9506a5](https://github.com/ringcentral/juno/commit/e9506a50bba5c7a2241c554a3ac67e51aac4c28e))

## [2.6.0](https://github.com/ringcentral/juno/compare/juno-core-v2.5.0...juno-core-v2.6.0) (2022-04-18)


### ⚠ BREAKING CHANGES

* **foundation:** [useLongPress] no longer export `onTouchStart` and `onTouchEnd` and `onContextMenu`, those to be inside handle with addEventListener, if you still need preventDefault, use `isPreventDefault` config

### Features

* **foundation:** [useGlobalListener] support startImmediately ([d0f819f](https://github.com/ringcentral/juno/commit/d0f819f878d0d14ffb306d30839e816d0c12eba3))
* **IconButton:** [IconButton] support `IconProps` ([4febee3](https://github.com/ringcentral/juno/commit/4febee3f08d194b9a381d91a9aba3ea77a43014f))


### Bug Fixes

* **foundation:** [useGlobalListener] support listener options with overload method ([0b85147](https://github.com/ringcentral/juno/commit/0b85147941407e3e078e161973d020d16bd81e23))
* **foundation:** [useLongPress] switch to use useGlobalListener and fix touch screen logic ([0527057](https://github.com/ringcentral/juno/commit/05270571eef2fe87beb6aae0e2f94d7feddaf01b))
* **foundation:** [useTouchMouseEvent] remove addition check because in production should never switch between touch and mouse ([65986d6](https://github.com/ringcentral/juno/commit/65986d6a9224d147b5529098e1115a5b73b78332))

### [2.4.2](https://github.com/ringcentral/juno/compare/juno-core-v2.4.1...juno-core-v2.4.2) (2022-04-14)


### Bug Fixes

* **ThemeProvider:** add isSafari154 check point with 15_4 ([4b62831](https://github.com/ringcentral/juno/commit/4b6283118e411abddf74c777d82f8d20aa099d7f))

### [2.4.1](https://github.com/ringcentral/juno/compare/juno-core-v2.4.0...juno-core-v2.4.1) (2022-04-13)


### Bug Fixes

* **ThemeProvider:** add more check with iPhone, iPad ([00de83a](https://github.com/ringcentral/juno/commit/00de83ae67e8421057e69d11c89d08fcc26d910f))
* **ThemeProvider:** support outside custom should enable `fixSafari154` style fix ([935bc0e](https://github.com/ringcentral/juno/commit/935bc0ed124d7a40efa06fd51596543755e33330))

## [2.4.0](https://github.com/ringcentral/juno/compare/juno-core-v2.3.7...juno-core-v2.4.0) (2022-04-12)


### Bug Fixes

* **BaseProps:** fix RcVirtualizedDivider to optional ([7435083](https://github.com/ringcentral/juno/commit/7435083bb8948e0ab8e246bc78132e5b0951e1ac))
* **Grow:** fix Grow issue with safari issue ([77aadc1](https://github.com/ringcentral/juno/commit/77aadc1191ee83373a6c18d7dbb48de247406c60))
* **SubMenu:** fix error binding transform-origin ([53fc7b8](https://github.com/ringcentral/juno/commit/53fc7b8bdd628c6b6e14e8df106817a05a06be98))

### [2.3.7](https://github.com/ringcentral/juno/compare/juno-core-v2.3.6...juno-core-v2.3.7) (2022-04-08)


### Bug Fixes

* **Bug:** [Downshift] fix Downshift clearBtn style error with CleanBtnRefactor ([16f9add](https://github.com/ringcentral/juno/commit/16f9addca4c016866d66ae92096f41ec348e71e6))

### [2.3.6](https://github.com/ringcentral/juno/compare/juno-core-v2.3.5...juno-core-v2.3.6) (2022-04-08)


### Bug Fixes

* **Bug:** [useA11yKeyEvent] fix a11yKeyEvent error binding with key as Space to ' ' ([4920e49](https://github.com/ringcentral/juno/commit/4920e49ff88f602203894ac0334bd46dd25c49b7))

### [2.3.5](https://github.com/ringcentral/juno/compare/juno-core-v2.3.4...juno-core-v2.3.5) (2022-04-07)


### Features

* **VirtualizedMenuList:** [VirtualizedMenuList] support disablePadding ([fcf9222](https://github.com/ringcentral/juno/commit/fcf9222267c8a5b8dee44d223951fa47b3211d4d))

### [2.3.4](https://github.com/ringcentral/juno/compare/juno-core-v2.3.3...juno-core-v2.3.4) (2022-04-02)


### Bug Fixes

* **table-issue:** [DialogContent] fix default color ([daf8c46](https://github.com/ringcentral/juno/commit/daf8c46a42567ab57ca961a31ad734c4e25fdc20))
* **table-issue:** [Table] fix some css issue and mui warning ([76aa08c](https://github.com/ringcentral/juno/commit/76aa08c09d1d40df961019e31c7be0bb93fd9e6a))

### [2.3.3](https://github.com/ringcentral/juno/compare/juno-core-v2.3.1...juno-core-v2.3.3) (2022-04-01)


### Bug Fixes

* **fix-portalmanager-issue:** [portalmanager] fix ThrottleScheduler issue ([f3e66e2](https://github.com/ringcentral/juno/commit/f3e66e22e4ef1dbfde86cbbf7a6fc570d73a895c))

### [2.3.1](https://github.com/ringcentral/juno/compare/juno-core-v2.3.0...juno-core-v2.3.1) (2022-03-31)


### Bug Fixes

* **Badge:** [Badge] fix bug with combine classes ([b81895d](https://github.com/ringcentral/juno/commit/b81895dc7639e437fd0e672b19e7ac2ebd49b92e))
* **FIJI-48582:** [TextField] fix issue about tooltip show incorrectly after click textField clean button ([39b6749](https://github.com/ringcentral/juno/commit/39b674914bc026ede0de910861053bb4323c02ee))

## [2.3.0](https://github.com/ringcentral/juno/compare/juno-core-v2.3.0...juno-core-v2.3.0) (2022-03-31)

## [2.3.0](https://github.com/ringcentral/juno/compare/juno-core-v2.2.0...juno-core-v2.3.0) (2022-03-29)


### Features

* **Deprecated Tables:** remove tables export ([3a62ba0](https://github.com/ringcentral/juno/commit/3a62ba0adf65365c2aaa718235c38dd5ade5a9d1))
* **foundation:** [foundation] implement `useGlobalListener` for share event ([6e6e05a](https://github.com/ringcentral/juno/commit/6e6e05aa58a865431de0a2e5babad4fcda636fe0))
* **foundation:** [foundation] support getRefElement for some element event related method ([bcc321e](https://github.com/ringcentral/juno/commit/bcc321e27190fca6a2066a4bc7a59fdea8da1b13))
* **Table:** new table base on mui ([c29f8e7](https://github.com/ringcentral/juno/commit/c29f8e72203657e69da169d977d77ceb578b13de))


### Bug Fixes

* **Foundation:** [useGlobalListener] change array to Set ([d4fcad2](https://github.com/ringcentral/juno/commit/d4fcad29a8c7baf88bd9325317541d07be544c7b))
* **Highlight:** fix `action` prop type ([888bba1](https://github.com/ringcentral/juno/commit/888bba1c7ece7f0fb8c51ad80cd59f77378225af))
* **juno-core:** [Tooptip] fix tooltipForceHide alway binding event issue ([b4ceeae](https://github.com/ringcentral/juno/commit/b4ceeaeb01749a83b8b7b0ccdba395b0c018b78b))

## [2.2.0](https://github.com/ringcentral/juno/compare/juno-core-v2.1.2...juno-core-v2.2.0) (2022-03-15)


### Features

* **Badge:** support round overlap ([06d67a1](https://github.com/ringcentral/juno/commit/06d67a1ea0dcd5e4ba5c85f993080384524e3a18))
* **Chip:** support component prop with overridableStyled ([ee650aa](https://github.com/ringcentral/juno/commit/ee650aa9f2d1680afd4727557ddc35d0e985a544))
* **MoreMenuTab:** support custom MenuItemComponent for moreMenu variant ([49c59fc](https://github.com/ringcentral/juno/commit/49c59fc80a595fb32f375a055027cc1f98b9de0b))

### [2.1.2](https://github.com/ringcentral/juno/compare/juno-core-v2.1.1...juno-core-v2.1.2) (2022-03-11)


### Features

* **Badge:** support round overlap ([af73059](https://github.com/ringcentral/juno/commit/af73059345fe39ceb1f0c492db749cd13cc0682f))

### [2.1.1](https://github.com/ringcentral/juno/compare/juno-core-v2.1.0...juno-core-v2.1.1) (2022-03-10)


### Bug Fixes

* **RcTab:** fix dynamic children ([48f9c77](https://github.com/ringcentral/juno/commit/48f9c77433ea8333ceb9e9629a9ae9a8d1dc66f1))
* **RcTab:** fix dynamic children ([d1d085e](https://github.com/ringcentral/juno/commit/d1d085e7c5075f4566eb373bf9a23b7a508e32bf))
* **RcTab:** update snapshot ([91093c7](https://github.com/ringcentral/juno/commit/91093c79494685e3e0992c10d485fbcc6f4785de))

## [2.1.0](https://github.com/ringcentral/juno/compare/juno-core-v2.0.3...juno-core-v2.1.0) (2022-03-09)


### Features

* **Chip:** support outlined variant ([d3f6308](https://github.com/ringcentral/juno/commit/d3f630851600faa5d633355a410204b9d57fd65b))


### Bug Fixes

* **juno-core:** [Menu] re-export RcMenuOnCloseReasonsType ([fd78631](https://github.com/ringcentral/juno/commit/fd786310a284725ccd4e47209e6e0d6de5df71cb))

### [2.0.3](https://github.com/ringcentral/juno/compare/juno-core-v2.0.1...juno-core-v2.0.3) (2022-02-28)


### Bug Fixes

* **DatePicker:** fix DatePicker error when RcThemeProvider are provided `prefixGlobalClass` prop ([8fad20a](https://github.com/ringcentral/juno/commit/8fad20a05a71499320c67100ecf259e40102efc4))

### [2.0.2](https://github.com/ringcentral/juno/compare/juno-core-v2.0.1...juno-core-v2.0.2) (2022-02-22)

### [2.0.1](https://github.com/ringcentral/juno/compare/juno-core-v2.0.0...juno-core-v2.0.1) (2022-02-21)


### Bug Fixes

* **Tabs Tabs:** fix tabs children change not re-render issue ([31de650](https://github.com/ringcentral/juno/commit/31de650cd5b237f727d730a8357e55be00ad9180))

## 2.0.0 (2022-02-21)


### Features

* **DetachedWindow:** remove  deprecated props `replace` ([b81cf02](https://github.com/ringcentral/juno/commit/b81cf0296657725704e9ee8aecb8c1288b0aeb44))
* **Monorepo:** migrate to monorepo ([7f72715](https://github.com/ringcentral/juno/commit/7f727156f5716f6dc1d0894ffd2faf46d9ebce06))


### Bug Fixes

* **Text:** fix title issue check, let user can set null to cancel title ([c6355c4](https://github.com/ringcentral/juno/commit/c6355c445061e9c617b340ee22e3862d84910786))

### [1.12.6](https://github.com/ringcentral/juno/compare/1.12.5...1.12.6) (2022-02-09)


### ⚠ BREAKING CHANGES

* **RCUI-667:** remove min-width
* **RCUI-667:** [TimePicker] remove prop `times`, pelease migrate to `value`

### Features

* **RCUI-667:** [AppBar] remove min-width ([149d73c](https://github.com/ringcentral/juno/commit/149d73c9e21c60a48024d2cdb5c0027613c265a6))
* **RCUI-667:** fix current day styles ([0c33f55](https://github.com/ringcentral/juno/commit/0c33f559797e2bb8c9992a35c3b542d50465d342))
* **RCUI-667:** support default picker value; remove prop `times` ([35070fc](https://github.com/ringcentral/juno/commit/35070fc587e8870fa9b60b6ce27ffc1a64ec6747))


### Bug Fixes

* **RCUI-667:** [storybook] fix story name ([8b88a09](https://github.com/ringcentral/juno/commit/8b88a09fd57a133205c400925192f68ab2cd9476))

### [1.12.5](https://github.com/ringcentral/juno/compare/1.12.4...1.12.5) (2022-01-27)


### ⚠ BREAKING CHANGES

* **RCUI-678:** [ThemeProvider] remove `RcSubThemeProvider`

### Features

* **RCUI-678:** [ThemeProvider] remove `RcSubThemeProvider` and make `RcThemeProvider` support nesting ([948061c](https://github.com/ringcentral/juno/commit/948061c46aca67441b63917fe88f2a1d6096e68b))
* **RCUI-681:** [a11y] Convert role none presentation to presentation ([54758ef](https://github.com/ringcentral/juno/commit/54758ef4172417978460eb18371516338ed507dc))
* **RCUI-681:** update icon ([834df67](https://github.com/ringcentral/juno/commit/834df67bd6b6e82e65c7e28bc11df8e4a40b141d))


### Bug Fixes

* **RCUI-679:** [Textarea] remove not support `variant` prop ([356875f](https://github.com/ringcentral/juno/commit/356875fa1a338340bfaab63edd092be94c954f05))
* **RCUI-679:** [TextField] fix outline variant multiline height not auto issue ([241a871](https://github.com/ringcentral/juno/commit/241a871cf1852a1108258e98cec589de43726d7e))
* **RCUI-679:** [TextField] outline mode remove non multiline padding issue ([32ae13f](https://github.com/ringcentral/juno/commit/32ae13fa0246ea124fd4764a30b4593e810c352f))
* **RCUI-682:** [Select] fix defaultValue not work issue, and open some miss props ([aeb88a8](https://github.com/ringcentral/juno/commit/aeb88a88dc2070267f1b3c177e0d0f6fa796b530))
* **RCUI-682:** [Select] fix Select MenuProps not working issue ([1db387b](https://github.com/ringcentral/juno/commit/1db387b7bbc35c5c3ad9cefcb1472c6afd97b86d))
* **RCUI-683:** [PlainSelect] re-export miss PlainSelect ([c499c94](https://github.com/ringcentral/juno/commit/c499c947f9298af6d49c3b1f65425891b2aad1f6))

### [1.12.4](https://github.com/ringcentral/juno/compare/1.12.3...1.12.4) (2021-12-27)


### ⚠ BREAKING CHANGES

* **RCUI-674:** [TimePicker] emit `null` when click clear, previous is `undefined`

### Features

* **RCUI-672:** [ThemeProvider][jss] support prefix class ([29c6fbe](https://github.com/ringcentral/juno/commit/29c6fbe377518374cff89d69ddc6bf9cf12f3748))
* **RCUI-673:** [Fix runtime error when render in next.js] detect window existed ([e44ccb7](https://github.com/ringcentral/juno/commit/e44ccb7d43d16a488b4298fa88325038b0e8172d))
* **RCUI-675:** [useEver] provide hook for return `true` when the value ever to be `you want value` once. ([e288f84](https://github.com/ringcentral/juno/commit/e288f84417df2504e6fa46471957a2393cb69abe))
* **RCUI-675:** [SplitButton] improve the render performance ([e288f84](https://github.com/ringcentral/juno/commit/e288f84417df2504e6fa46471957a2393cb69abe))
* **RCUI-676:** [Downshift] support indexInOwnGroup field ([556eeb3](https://github.com/ringcentral/juno/commit/556eeb3ce69f03ec7c808c5a7a79fabc47491296))
* **RCUI-677:** [Type] improve PortalManager and SubThemeProvider type ([ff85a94](https://github.com/ringcentral/juno/commit/ff85a94efc803fd8e403fd5cde9e3d57dbe9a0fb))


### Bug Fixes

* **RCUI-674:** [TimePicker] add description for time picker utils, and re-export that ([efe6d8e](https://github.com/ringcentral/juno/commit/efe6d8ee057891ea85e8cb0990d06ec34f819ed3))
* **RCUI-674:** [TimePicker] fix TimePicker text be empty when is 00:00 ([ff498ce](https://github.com/ringcentral/juno/commit/ff498ce07c4a2594a30c0612e997652b4e9bc496))
* **RCUI-674:** [TimePicker] support dateMode type generic and emit `null` when click clear ([9253eba](https://github.com/ringcentral/juno/commit/9253eba0ca59e2cd81a1754e0a39b6851763809a))

### [1.12.3](https://github.com/ringcentral/juno/compare/1.12.2...1.12.3) (2021-12-16)


### Features

* **RCUI-665:** [PortalManager] updateProps support 'function' param ([976fdec](https://github.com/ringcentral/juno/commit/976fdec18f993490e93630ef6552fbd703a0254e))
* **RCUI-665:** [Webstorm] add .idea ([8f4ace9](https://github.com/ringcentral/juno/commit/8f4ace90134c6b08c20b968e4bada0018cbc13da))
* **RCUI-665:** [withTooltip] fix withTooltip type error ([f80522e](https://github.com/ringcentral/juno/commit/f80522e102f79a532aa1d12e492a4fa22fe9c0e3))
* **RCUI-666:** [Downshift] provide autocomplete mode default filter and export inputChanged state for outside use ([f4d8951](https://github.com/ringcentral/juno/commit/f4d89519030615b816dde73baec9682d1a1d854a))
* **RCUI-666:** [SuggestionList] support useSuggestionList ([f4897e0](https://github.com/ringcentral/juno/commit/f4897e0a25669256f433bdd049c74ecb0713bac8))
* **RCUI-666:** [useSuggestionList, useDownshift] export id ([f72c373](https://github.com/ringcentral/juno/commit/f72c3737204f1a30ac452cfe17fd827cf2cdfa9a))
* **RCUI-669:** [SubMenu] added ability to set placement via props ([8c853a8](https://github.com/ringcentral/juno/commit/8c853a817709f503d4081ee071e1cb069bb380e1))
* **RCUI-670:** [Card] rename type name ([a4168f7](https://github.com/ringcentral/juno/commit/a4168f74e9388e6dc1e0a50db1cf3e93a88b81c1))
* **RCUI-670:** [Chid] support `color` and `focused` prop ([3450df9](https://github.com/ringcentral/juno/commit/3450df9cb9f50e814300e0f5d8165f939b89b5b6))
* **RCUI-670:** [TextField, Select, Downshift] support color prop ([39bbd2b](https://github.com/ringcentral/juno/commit/39bbd2b8377c2661e6d44787813910d3e6d0290e))
* **RCUI-670:** [TextField] color follow color prop in normal status ([c30409b](https://github.com/ringcentral/juno/commit/c30409bb1e617395555332d26d3fc7463e2fb009))


### Bug Fixes

* **RCUI-666:** [Downshift] fix inputChanged type to optional ([a4847bd](https://github.com/ringcentral/juno/commit/a4847bd8f21bb836d150f17df609e65352a06edf))
* **RCUI-666:** [Downshift] fix padding issue with ([94c66ae](https://github.com/ringcentral/juno/commit/94c66ae967b538063e9b404f20b9c7b63e97fa66))
* **RCUI-666:** [Downshift] support groupDefaultExpanded and fill miss type ([d59ea5b](https://github.com/ringcentral/juno/commit/d59ea5b23c1ac949a70976b3cb424a2488b47c80))
* **RCUI-666:** [useKeyboardMoveFocus] fix when focusedIndex is -1 and move to 0 not move issue ([77e21a4](https://github.com/ringcentral/juno/commit/77e21a4a8e48b7c64413edc1340be622a03fbc20))
* **RCUI-670:** [Button] fix button color prop to RcPaletteProp ([51ec458](https://github.com/ringcentral/juno/commit/51ec458016a725218eb43aa0bd9bb0d400d94f3f))
* **RCUI-670:** [PlainSelect] fix wrapper with width issue ([0d654ad](https://github.com/ringcentral/juno/commit/0d654ad6c4bf83f06ac7ed7ea4380dd0737c85b9))
* **RCUI-671:** [TimePicker] add Math.floor check for minute ([bb36c40](https://github.com/ringcentral/juno/commit/bb36c408a128669a56e64b4b76829063200704c1))
* **RCUI-671:** [TimePicker] remove time number disabled check, always be clickable ([e637df8](https://github.com/ringcentral/juno/commit/e637df842c979c7355557fe5d7da733835e32b8c))

### [1.12.2](https://github.com/ringcentral/juno/compare/1.12.1...1.12.2) (2021-12-11)


### Bug Fixes

* **RCUI-664:** [Dialog, PopupBox, Snackbar] fix error TransitionProps combine, and remove `disableBackdropClick` ([965a606](https://github.com/ringcentral/juno/commit/965a6068ba2cad242f7c449f87369fa9cbe016c9))

### [1.12.1](https://github.com/ringcentral/juno/compare/1.12.0...1.12.1) (2021-12-10)


### Features

* **RCUI-647:** [Icon] update icon ([379f8c9](https://github.com/ringcentral/juno/commit/379f8c9c383d245df8eb7201b2c041b061352596))
* **RCUI-660:** [Icon] update icon (Description) ([0ff9f4f](https://github.com/ringcentral/juno/commit/0ff9f4f926495d4a0a415e69d27b26e1b0791b6e))
* **RCUI-661:** [Hooks] implement controllable interval ([354d03e](https://github.com/ringcentral/juno/commit/354d03ef490c629638ff3359fbd343f9b1e5ba23))


### Bug Fixes

* **Project:** [DialPad] add miss export ([61e2791](https://github.com/ringcentral/juno/commit/61e279157707806d704528e34e0feefed4241cf4))
* **RCUI-663:** [TextField] fix type with rows ([f67d15f](https://github.com/ringcentral/juno/commit/f67d15f2bb583298c835d899f0f81a4e2128153a))

## [1.12.0](https://github.com/ringcentral/juno/compare/1.11.5...1.12.0) (2021-11-23)


### ⚠ BREAKING CHANGES

* **RCUI-655:** [Dialog, Snackbar, TimePicker, VirtualizedMenu] move `onXXX` inside `TransitionProps`
* **RCUI-655:** [Badge] rename circle and rectangle to 'circular' and 'rectangular'
* **RCUI-655:** [TablePagination] change deprecated props to new name `onChangePage` => `onPageChange`,  `onRowsPerPageChange` => `onChangeRowsPerPage`
* **RCUI-655:** [StepContent] remove StepContent temporary, because we not support orientation vertical
* **RCUI-655:** [Badges] remove deprecated `Badges`
* **RCUI-655:** [ButtonBar] remove deprecated `ButtonBar`
* **RCUI-655:** [Menu] remove deprecated `Menu`
* **RCUI-655:** [Text] remove deprecated `Text`
* **RCUI-655:** [ThemeProvider] remove deprecated `ThemeProvider`

### Features

* **RCUI-649:** [ThemeProvider] subThemeProvider use parent theme as default when not pass theme into ([ddc31a1](https://github.com/ringcentral/juno/commit/ddc31a1616ab687b0214d085818f3f4c5a388bcc))
* **RCUI-652:** [AppBar] cleanup AppBar ([61bb924](https://github.com/ringcentral/juno/commit/61bb92492f1f64b3a4dd95a30abdbb437fd54c22))
* **RCUI-654:** [InlineEditable] change default word break rules like textarea ([d2adcba](https://github.com/ringcentral/juno/commit/d2adcba78e90db00515e7e429019199f93820dae))
* **RCUI-655:** [Package] update mui version to v4.12.3 for prepare upgrade to v5 ([ada509c](https://github.com/ringcentral/juno/commit/ada509caccb303b717a96fdc69f2b723dec03e8c))
* **RCUI-657:** [Link] support underline prop ([f984f64](https://github.com/ringcentral/juno/commit/f984f645f07cf914bdc22ea089481ca707013080))


### Bug Fixes

* **Project:** [Package] fix type for ready to upgrade type to latest styled-components ([6666cfb](https://github.com/ringcentral/juno/commit/6666cfb114181b391e8478cfe12012a29422ee1c))
* **RCUI-651:** [Tag] remove not need `margin-left` ([e6d378e](https://github.com/ringcentral/juno/commit/e6d378e803d11af960c5987b6ffb632cf84c336b))
* **RCUI-654:** [InlineEditable] change 'anwhere' to 'anywhere' ([e2d1d5c](https://github.com/ringcentral/juno/commit/e2d1d5ca8a067192d93a9f3d274c591efeef42da))
* **RCUI-655:** [AppBar] use RcAppBarProps ([9527047](https://github.com/ringcentral/juno/commit/9527047ad84c3f6e6d5bdc15a46b499987a6bd7e))
* **RCUI-655:** [Badge] rename circle and rectangle to 'circular' and 'rectangular' ([c4581f6](https://github.com/ringcentral/juno/commit/c4581f6d2c278158eb77666eb7a88dd1a5f29d0d))
* **RCUI-655:** [createTheme] rename mud createTheme to createTheme, fade to alpha ([cef352d](https://github.com/ringcentral/juno/commit/cef352ddd88cbc6090d9f41010901c1f12ba4138))
* **RCUI-655:** [Dialog, Snackbar, TimePicker, VirtualizedMenu] move `onXXX` inside `TransitionProps` ([0bb80e0](https://github.com/ringcentral/juno/commit/0bb80e0415264fa5b4065f03bcac47740e6bf163))
* **RCUI-655:** [Icon] change icon dep on juno main library to @material-ui/core ([c41c964](https://github.com/ringcentral/juno/commit/c41c9646050a43da1620fe324eafd68cfc306cbf))
* **RCUI-655:** [MenuList] pick forget props `maxHeight` ([cb6df9b](https://github.com/ringcentral/juno/commit/cb6df9b8f16b3a6b31bc0de134928441b4679782))
* **RCUI-655:** [Stepper] remove StepContent temporary, because we not support orientation vertical ([32fa9ad](https://github.com/ringcentral/juno/commit/32fa9add92a0eeb916357fbb3e16201a5568cb4f))
* **RCUI-655:** [TablePagination] change deprecated props to new name onChangePage, onChangeRowsPerPage ([f8a5704](https://github.com/ringcentral/juno/commit/f8a5704773ea7598967ef4d0ce53d8c9e3bf49c6))
* **RCUI-655:** [TextField, Textarea, Select] remove rowsMax and rows, and switch to new props minRows, maxRows ([66f9b69](https://github.com/ringcentral/juno/commit/66f9b691d8423b7a92013c350814d23c7173fc31))

### [1.11.6](https://github.com/ringcentral/juno/compare/1.11.5...1.11.6) (2021-11-20)


### ⚠ BREAKING CHANGES

* **RCUI-655:** [Dialog, Snackbar, TimePicker, VirtualizedMenu] move `onXXX` inside `TransitionProps`
* **RCUI-655:** [Badge] rename circle and rectangle to 'circular' and 'rectangular'
* **RCUI-655:** [TablePagination] change deprecated props to new name `onChangePage` => `onPageChange`,  `onRowsPerPageChange` => `onChangeRowsPerPage`
* **RCUI-655:** [StepContent] remove StepContent temporary, because we not support orientation vertical

### Features

* **RCUI-649:** [ThemeProvider] subThemeProvider use parent theme as default when not pass theme into ([ddc31a1](https://github.com/ringcentral/juno/commit/ddc31a1616ab687b0214d085818f3f4c5a388bcc))
* **RCUI-652:** [AppBar] cleanup AppBar ([61bb924](https://github.com/ringcentral/juno/commit/61bb92492f1f64b3a4dd95a30abdbb437fd54c22))
* **RCUI-654:** [InlineEditable] change default word break rules like textarea ([d2adcba](https://github.com/ringcentral/juno/commit/d2adcba78e90db00515e7e429019199f93820dae))
* **RCUI-655:** [Package] update mui version to v4.12.3 for prepare upgrade to v5 ([ada509c](https://github.com/ringcentral/juno/commit/ada509caccb303b717a96fdc69f2b723dec03e8c))
* **RCUI-657:** [Link] support underline prop ([f984f64](https://github.com/ringcentral/juno/commit/f984f645f07cf914bdc22ea089481ca707013080))


### Bug Fixes

* **RCUI-651:** [Tag] remove not need `margin-left` ([e6d378e](https://github.com/ringcentral/juno/commit/e6d378e803d11af960c5987b6ffb632cf84c336b))
* **RCUI-654:** [InlineEditable] change 'anwhere' to 'anywhere' ([e2d1d5c](https://github.com/ringcentral/juno/commit/e2d1d5ca8a067192d93a9f3d274c591efeef42da))
* **RCUI-655:** [AppBar] use RcAppBarProps ([9527047](https://github.com/ringcentral/juno/commit/9527047ad84c3f6e6d5bdc15a46b499987a6bd7e))
* **RCUI-655:** [Badge] rename circle and rectangle to 'circular' and 'rectangular' ([c4581f6](https://github.com/ringcentral/juno/commit/c4581f6d2c278158eb77666eb7a88dd1a5f29d0d))
* **RCUI-655:** [createTheme] rename mud createTheme to createTheme, fade to alpha ([cef352d](https://github.com/ringcentral/juno/commit/cef352ddd88cbc6090d9f41010901c1f12ba4138))
* **RCUI-655:** [Dialog, Snackbar, TimePicker, VirtualizedMenu] move `onXXX` inside `TransitionProps` ([0bb80e0](https://github.com/ringcentral/juno/commit/0bb80e0415264fa5b4065f03bcac47740e6bf163))
* **RCUI-655:** [Icon] change icon dep on juno main library to @material-ui/core ([c41c964](https://github.com/ringcentral/juno/commit/c41c9646050a43da1620fe324eafd68cfc306cbf))
* **RCUI-655:** [MenuList] pick forget props `maxHeight` ([cb6df9b](https://github.com/ringcentral/juno/commit/cb6df9b8f16b3a6b31bc0de134928441b4679782))
* **RCUI-655:** [Stepper] remove StepContent temporary, because we not support orientation vertical ([32fa9ad](https://github.com/ringcentral/juno/commit/32fa9add92a0eeb916357fbb3e16201a5568cb4f))
* **RCUI-655:** [TablePagination] change deprecated props to new name onChangePage, onChangeRowsPerPage ([f8a5704](https://github.com/ringcentral/juno/commit/f8a5704773ea7598967ef4d0ce53d8c9e3bf49c6))
* **RCUI-655:** [TextField, Textarea, Select] remove rowsMax and rows, and switch to new props minRows, maxRows ([66f9b69](https://github.com/ringcentral/juno/commit/66f9b691d8423b7a92013c350814d23c7173fc31))

### [1.11.6](https://github.com/ringcentral/juno/compare/1.11.5...1.11.6) (2021-11-20)


### ⚠ BREAKING CHANGES

* **RCUI-655:** [Dialog, Snackbar, TimePicker, VirtualizedMenu] move `onXXX` inside `TransitionProps`
* **RCUI-655:** [Badge] rename circle and rectangle to 'circular' and 'rectangular'
* **RCUI-655:** [TablePagination] change deprecated props to new name `onChangePage` => `onPageChange`,  `onRowsPerPageChange` => `onChangeRowsPerPage`
* **RCUI-655:** [StepContent] remove StepContent temporary, because we not support orientation vertical

### Features

* **RCUI-649:** [ThemeProvider] subThemeProvider use parent theme as default when not pass theme into ([ddc31a1](https://github.com/ringcentral/juno/commit/ddc31a1616ab687b0214d085818f3f4c5a388bcc))
* **RCUI-652:** [AppBar] cleanup AppBar ([61bb924](https://github.com/ringcentral/juno/commit/61bb92492f1f64b3a4dd95a30abdbb437fd54c22))
* **RCUI-654:** [InlineEditable] change default word break rules like textarea ([d2adcba](https://github.com/ringcentral/juno/commit/d2adcba78e90db00515e7e429019199f93820dae))
* **RCUI-655:** [Package] update mui version to v4.12.3 for prepare upgrade to v5 ([ada509c](https://github.com/ringcentral/juno/commit/ada509caccb303b717a96fdc69f2b723dec03e8c))
* **RCUI-657:** [Link] support underline prop ([f984f64](https://github.com/ringcentral/juno/commit/f984f645f07cf914bdc22ea089481ca707013080))


### Bug Fixes

* **RCUI-651:** [Tag] remove not need `margin-left` ([e6d378e](https://github.com/ringcentral/juno/commit/e6d378e803d11af960c5987b6ffb632cf84c336b))
* **RCUI-654:** [InlineEditable] change 'anwhere' to 'anywhere' ([e2d1d5c](https://github.com/ringcentral/juno/commit/e2d1d5ca8a067192d93a9f3d274c591efeef42da))
* **RCUI-655:** [AppBar] use RcAppBarProps ([9527047](https://github.com/ringcentral/juno/commit/9527047ad84c3f6e6d5bdc15a46b499987a6bd7e))
* **RCUI-655:** [Badge] rename circle and rectangle to 'circular' and 'rectangular' ([c4581f6](https://github.com/ringcentral/juno/commit/c4581f6d2c278158eb77666eb7a88dd1a5f29d0d))
* **RCUI-655:** [createTheme] rename mud createTheme to createTheme, fade to alpha ([cef352d](https://github.com/ringcentral/juno/commit/cef352ddd88cbc6090d9f41010901c1f12ba4138))
* **RCUI-655:** [Dialog, Snackbar, TimePicker, VirtualizedMenu] move `onXXX` inside `TransitionProps` ([0bb80e0](https://github.com/ringcentral/juno/commit/0bb80e0415264fa5b4065f03bcac47740e6bf163))
* **RCUI-655:** [Icon] change icon dep on juno main library to @material-ui/core ([c41c964](https://github.com/ringcentral/juno/commit/c41c9646050a43da1620fe324eafd68cfc306cbf))
* **RCUI-655:** [MenuList] pick forget props `maxHeight` ([cb6df9b](https://github.com/ringcentral/juno/commit/cb6df9b8f16b3a6b31bc0de134928441b4679782))
* **RCUI-655:** [Stepper] remove StepContent temporary, because we not support orientation vertical ([32fa9ad](https://github.com/ringcentral/juno/commit/32fa9add92a0eeb916357fbb3e16201a5568cb4f))
* **RCUI-655:** [TablePagination] change deprecated props to new name onChangePage, onChangeRowsPerPage ([f8a5704](https://github.com/ringcentral/juno/commit/f8a5704773ea7598967ef4d0ce53d8c9e3bf49c6))
* **RCUI-655:** [TextField, Textarea, Select] remove rowsMax and rows, and switch to new props minRows, maxRows ([66f9b69](https://github.com/ringcentral/juno/commit/66f9b691d8423b7a92013c350814d23c7173fc31))

### [1.11.5](https://github.com/ringcentral/juno/compare/1.11.4...1.11.5) (2021-10-14)


### ⚠ BREAKING CHANGES

* **RCUI-647:** [Icon]  Info => InfoBorder

### Bug Fixes

* **RCUI-648:** [type error] fix PortalManager.open return type, it would lost after build ([a74d0b3](https://github.com/ringcentral/juno/commit/a74d0b373ef64ffe3d97f99209454dfc4cf0948c))


* **RCUI-647:** [Icon] update icon ([b278720](https://github.com/ringcentral/juno/commit/b2787202ee84536f133db8f55447434e993745d1))

### [1.11.4](https://github.com/ringcentral/juno/compare/1.11.3...1.11.4) (2021-09-27)


### ⚠ BREAKING CHANGES

* **update-icon:** [Icon] add custom tab icon, delete menu fax icon

### Features

* **DetachedWindow:** RcDetachedWindowStylesProvider ([158ba6d](https://github.com/ringcentral/juno/commit/158ba6d66f6408ca735c2d9db5bfa6ecee174e84))
* **RCUI-643:** [Picker] add PickerBaseIconButton for picker use ([a260fe7](https://github.com/ringcentral/juno/commit/a260fe76f516dbed6fdee3f1c4c6b1ed590af661))
* **RCUI-643:** [TimePicker] forwardRef with TimePicker ([97ca673](https://github.com/ringcentral/juno/commit/97ca673a3078b47716675b4a2ff8a4af6432f935))
* **update-icon:** [update-icon] update ([1392864](https://github.com/ringcentral/juno/commit/139286475e2b33040a8de5490a98b4fb193494bc))


### Bug Fixes

* **RCUI-643:** [DatePicker] fix whole date picker range logic, and make that support uncontrolled component ([649e7a6](https://github.com/ringcentral/juno/commit/649e7a629d6a85ba1256e048656fc27e7904b64e))
* **RCUI-643:** [DatePicker] migrate and cleanup to new PickerBaseButton ([cf83ae5](https://github.com/ringcentral/juno/commit/cf83ae5aabbb73a07e3c6a82fdfd1aa04f08b540))
* **RCUI-643:** [IconButton] fix interaction state color ([41f1c57](https://github.com/ringcentral/juno/commit/41f1c572e00d6c0d9ace04aa01465613ed554942))
* **RCUI-643:** [IconButton] follow interation color, `inverse` background color from .20=>.16 ([fb25099](https://github.com/ringcentral/juno/commit/fb25099e428620907a53d28af04b56d68ae8743c))
* **RCUI-643:** [IconButton] follow interation color, `inverse` hover 0.4=>0.24, focus 0.4=>0.32 ([2da0f1d](https://github.com/ringcentral/juno/commit/2da0f1d99f7872e578ae8d619c8eb21153bdb235))
* **RCUI-643:** [IconButton] text inside icon also set color style ([ced39ba](https://github.com/ringcentral/juno/commit/ced39bad869d956adb44bc66f90f78cacb3d2f41))
* **RCUI-643:** [Picker] fix not need memo and error naming ([9fdfaf1](https://github.com/ringcentral/juno/commit/9fdfaf1ff96d062a639ec2b901df57b6a69e88b0))
* **RCUI-643:** [TimePicker] migrate and cleanup to new PickerBaseButton ([033c6fb](https://github.com/ringcentral/juno/commit/033c6fb2754addab93f6de1ecbc8d15dda5f26af))
* **RCUI-645:** fix DatePicker disabled bug ([a3621a3](https://github.com/ringcentral/juno/commit/a3621a34c00494646c5ba05b0218e8907bdbd9ee))

### [1.11.3](https://github.com/ringcentral/juno/compare/1.11.2...1.11.3) (2021-09-13)


### ⚠ BREAKING CHANGES

* **RCUI-639:** [DialogActions] vertical from `spacing(4)` to `spacing(2)`
* **update-icon:** [Icon] add connect icon
* **RCUI-618:** [Downshift] change default group way to normal group, previous is expanded group

### Features

* **RCUI-593:** fix some problem and refactor types ([e5c6603](https://github.com/ringcentral/juno/commit/e5c66036d7f09e412c77f40a2507045ce1c815ec))
* **RCUI-593:** make Dialog, Snackbar support portalMnager ([0158f31](https://github.com/ringcentral/juno/commit/0158f31b01a30de281b26e5141b22293fe54998b))
* **RCUI-593:** PortalHost ([862f645](https://github.com/ringcentral/juno/commit/862f6454eddfcd9cb3403e5269a72388203a5ed5))
* **RCUI-593:** PortalManager ([6796908](https://github.com/ringcentral/juno/commit/6796908e915100cf0200c475d8726e8ca9035d24))
* **RCUI-618:** [Downshift] support `groupVariant` and `groupExpanded` ([31c34a1](https://github.com/ringcentral/juno/commit/31c34a13e0bdcace853bf5746b78d1f2a8ae737d))
* **RCUI-618:** [Downshift] support action with `getFilterResultItems` to get current filter result items ([f40f34b](https://github.com/ringcentral/juno/commit/f40f34b712f29b730ca95bcd99428a7734ee8217))
* **RCUI-618:** [useHighlightScroll] support custom topHighlightIndex ([c8a9347](https://github.com/ringcentral/juno/commit/c8a9347dc427fb46c04061e4bbde7ce99630685a))
* **RCUI-639:** [DatePicker] migrate deprecated `RcButtonBar` to `RcIconButtonGroup` ([400ab9e](https://github.com/ringcentral/juno/commit/400ab9e67785e5cdb2737a52a151d817cd54badc))
* **RCUI-639:** [Dialog] support childrenSize with `DialogActions`, `DialogContent`, `DialogTitle` ([82ac221](https://github.com/ringcentral/juno/commit/82ac2215156019e5d9548602767397e454bc4122))
* **RCUI-639:** [Dialog] support typography size with DialogContentText and Title ([90a742e](https://github.com/ringcentral/juno/commit/90a742eb6a5ddcc4bf3ca4ca0d7aafcc24f3ef2c))
* **RCUI-639:** [DialogActions] change default space between items to `spacing(2)` ([56c514d](https://github.com/ringcentral/juno/commit/56c514df572129332456c530cac4a14ae306e196))
* **RCUI-639:** [DialogActions] support `reverse` and fix mui gutterBottom bug ([0d6671b](https://github.com/ringcentral/juno/commit/0d6671b7ec3d9134e4733b3807be76438e8c81ef))
* **RCUI-639:** [DialogActions] when size is `small` default  direction to be  `vertical` ([29d2f05](https://github.com/ringcentral/juno/commit/29d2f054e4feae26c0cfc215e790022bebb68f69))
* **RCUI-639:** [PopupBox] migrate to Dialog new API ([82796d2](https://github.com/ringcentral/juno/commit/82796d217ccfbef59befe7208796b18e84d496f3))
* **RCUI-642:** [Switch] fix error token from `highContrast` to `neutral-f11` ([1801b7d](https://github.com/ringcentral/juno/commit/1801b7ddca3244019340d121104f1ebebecf7da9))
* **RCUI-643:** [DatePicker] support today disabled when today is not validate item ([4241d9c](https://github.com/ringcentral/juno/commit/4241d9cf95eed9b5600a91c7985362f7c5abb263))
* **update-icon:** [update-icon] update ([6f7414c](https://github.com/ringcentral/juno/commit/6f7414c073ec4a1ca78171149dbed0d87c953cf0))


### Bug Fixes

* **RCUI-618:** [Downshift] fix groupStateMap logic with group name ([34760c2](https://github.com/ringcentral/juno/commit/34760c2eb979dc620430b225babe85c985efefb5))
* **RCUI-640:** [ListItem] move default baseColorProp into style ([f47fe3a](https://github.com/ringcentral/juno/commit/f47fe3a916be4c763385382b5640ece64e004672))

### [1.11.2](https://github.com/ringcentral/juno/compare/1.11.1...1.11.2) (2021-08-26)


### ⚠ BREAKING CHANGES

* **RCUI-638:** [TextField] `variant=“outline”` font-size from `subheading1` to `body1`
* **RCUI-638:** [TextField] `variant=“outline”` clear icon follow size auto change
* **RCUI-633:** [Button] when loading, default will disabled button
* **update-icon:** [Icon] gif-D rename to gif-file-D

### Features

* **RCUI-633:** [Button] support `mask` disabledVariant ([b1255d8](https://github.com/ringcentral/juno/commit/b1255d863f773f7304c5a92e8fa9f674927473c6))
* **RCUI-633:** [Button] support loading mask ([96404a2](https://github.com/ringcentral/juno/commit/96404a23103d7b62c7f51e6899301bdb83a7a566))
* **RCUI-633:** [SplitButton] support `loading` ([60c1dab](https://github.com/ringcentral/juno/commit/60c1dab1810c00f8eaa35a4846b17c724cc6c224))
* **update-icon:** [update-icon] fix gif dark icon name ([c86edcb](https://github.com/ringcentral/juno/commit/c86edcb8801de2d4e7f0a50c4d38163e8fbcf92d))


### Bug Fixes

* **RCUI-633:** [Button] loading mask use `neutral.b01` with `0.32` opacity ([70b6de8](https://github.com/ringcentral/juno/commit/70b6de8bb84f89de81995d3eed8b9af03445b8ac))
* **RCUI-633:** [Button] when loading button always be disabled ([b4bdf6a](https://github.com/ringcentral/juno/commit/b4bdf6a2d649b626cf5490acbe9c385e77268cb0))
* **RCUI-635:** [InlineEditable] fix empty placeholder problem ([c7ca1f5](https://github.com/ringcentral/juno/commit/c7ca1f5b7cc057e6cc0d8c72b5b547db2d38669f))
* **RCUI-636:** [Downshift] fix autocomplete mode value be clear issue ([c329a84](https://github.com/ringcentral/juno/commit/c329a842d05a67feacffb3c46f7ce0214b433c13))
* **RCUI-638:** [OutlineTextField] add OutlineTextField sizes with token ([ee3415e](https://github.com/ringcentral/juno/commit/ee3415eefa2947d80a0991423e1b3983b0589029))
* **RCUI-638:** [OutlineTextField] fix typography size miss use in OutlineTextField ([a998b16](https://github.com/ringcentral/juno/commit/a998b164e7ff3794bb15c74752c6190ebf69746d))
* **script:** export miss `RcThemeProviderProps` ([1d4e715](https://github.com/ringcentral/juno/commit/1d4e7152980eefab9a6f26bce5f2a098207028ac))

### [1.11.1](https://github.com/ringcentral/juno/compare/1.11.0...1.11.1) (2021-08-16)


### Features

* **RCUI-631:** [[Icon] update icon] update icon ([ffdba00](https://github.com/ringcentral/juno/commit/ffdba00cb2ffeb912aeb8deb042544887fb03551))


### Bug Fixes

* **Box:** change RcBox to forwardable component ([bc33225](https://github.com/ringcentral/juno/commit/bc33225a599f544de733225212acfc404fbbf0c5))
* **RCUI-632:** [Downshift] fix useDownshift set inner input value not emit issue ([29cc6e4](https://github.com/ringcentral/juno/commit/29cc6e408f02b5a0b0ae909e164c9ac871f25333))
* **RCUI-632:** [Downshift]: fix init don't have textFieldRef open issue, and change `onInputChange` type to non optional ([c2f044e](https://github.com/ringcentral/juno/commit/c2f044e55dd763a1f49542add3db3b81334b1f02))


## [1.11.0](https://github.com/ringcentral/juno/compare/1.10.1...1.11.0) (2021-08-13)

### ⚠ BREAKING CHANGES

* **RCUI-625:** [Responsive] breakpoint pattern follow mui, use small than logic currently (before is large than)
* **RCUI-629:** [Tooltip] tooltip `medium` size `padding-top` and `padding-bottom` to be `4px` (before is `1px`), `font-size` to be `caption1` (before is `body1`)
* **RCUI-629:** [Tooltip] tooltip `large` size `padding-top` and `padding-bottom` to be `4px` (before is `3px`)

### Features

* **RCUI-619:** [[Icon] add dark prop to svg component] add story ([ebbe618](https://github.com/ringcentral/juno/commit/ebbe618690f761c415e93f2202a76d8d0df9e649))
* **RCUI-619:** [[Icon] add dark prop to svg component] make svg comp use global theme default ([8994565](https://github.com/ringcentral/juno/commit/8994565c60130e1d61c9cde9e6897a6da904b2c1))
* **RCUI-619:** [[Icon] add dark prop to svg component] update icon ([5454c7a](https://github.com/ringcentral/juno/commit/5454c7adb2adf8dee204c0372fa95e1ba647b913))
* **RCUI-625:** [Responsive] breakpoint pattern follow mui ([4f7f815](https://github.com/ringcentral/juno/commit/4f7f815816f5c04192c1831a7eae01ea287e62e3))
* **RCUI-625:** [Responsive] update storybook ([52a9923](https://github.com/ringcentral/juno/commit/52a99233ffcf35f93eecd852d9965ae87614dcd7))
* **RCUI-629:** [Tooltip] clean up tooltip spec and new size `xlarge` ([e1cf5d5](https://github.com/ringcentral/juno/commit/e1cf5d57d58e68c047ee4f24339c4c11f766575b))


### Bug Fixes

* **RCUI-628:** [Presence] add `box-sizing: content-box` to prevent reset outside ([99c2c4e](https://github.com/ringcentral/juno/commit/99c2c4e8cde8ad904e280a578268dff43c5b26fc))
* **RCUI-630:** [TimePicker] reset view to main page when open ([284c8a2](https://github.com/ringcentral/juno/commit/284c8a27d1c598739fac4c169d28ff45f26adddb))

### [1.10.1](https://github.com/ringcentral/juno/compare/1.10.0...1.10.1) (2021-08-06)


### Features

* **RCUI-616:** [Drawer] add multi drawer example ([23ae2c2](https://github.com/ringcentral/juno/commit/23ae2c276667e2823ce39a5496e4beeacb467176))
* **RCUI-622:** [Dialog] add Responsive dialog Example ([6ec071d](https://github.com/ringcentral/juno/commit/6ec071d39b71c5b6aeec81899a356e06380dd0ae))
* **RCUI-623:** implement `useAudio` get Browser `Audio` instance, and auto destroy when component be destroyed. ([424dc38](https://github.com/ringcentral/juno/commit/424dc38ffa6a801031329698336ed2f7eb9d5db8))
* **RCUI-624:** [Hidden] reexport Hidden component ([47b8293](https://github.com/ringcentral/juno/commit/47b82931583b6d50b9c9a2bae5cddfaa0add39fd))


### Bug Fixes

* **RCUI-617:** [ListItem] list item interaction style follow spec ([1da96c4](https://github.com/ringcentral/juno/commit/1da96c4bbfbc1339941e9d722b3a23004de6a5f0))
* **RCUI-621:** [Deepmerge] switch deepmerge to mui inner deepmerge ([56af37a](https://github.com/ringcentral/juno/commit/56af37a2c7c966cc8eec0f99e0dce1e6adf70331))
* **RCUI-623:** [DialPad] switch to useAudio ([77ae33a](https://github.com/ringcentral/juno/commit/77ae33adab416cd3a47769e1fd118e32d95e0de7))

## [1.10.0](https://github.com/ringcentral/juno/compare/1.9.0...1.10.0) (2021-07-27)


### ⚠ BREAKING CHANGES

* **RCUI-609:** [switchSize] move foundation switchSize into `Icon` component
* **RCUI-609:** [useHiddenToFocus] rename to `useHiddenTabindex`
* **RCUI-609:** [Deprecated] remove `TextField`
* **RCUI-609:** [Deprecated] remove `Textarea`
* **RCUI-609:** [Deprecated] remove `RcFabButton`, `RcFabIconButton`, `RoundButton`
* **RCUI-609:** [foundation] whole file structure  have a big cleanup, should switch all import to '@ringcentral/juno', if there is not have that file, should move that file into your repo, that will no longer provide from juno
* **RCUI-609:** [theme style] remove not need style method
* **RCUI-609:** [lineClamp] maxHeight not more have height * 4
* **RCUI-609:** [Deprecated] remove `AnnotationRightRail`
* **RCUI-609:** [Deprecated] remove `BorderLessTextField`, `OutlineTextField`, `TextField`
* **RCUI-609:** [Deprecated] remove `BoxSelect`, `LineSelect`
* **RCUI-609:** [Deprecated] remove `LozengeButton`, `ExpansionPanel`
* **RCUI-607:** [Autocomplete] deprecated `Autocomplete`

### Features

* **FIJI-36407:** [RcInlineEditable] support custom inputProps ([d08ca41](https://github.com/ringcentral/juno/commit/d08ca41be0cf40ad0f868dbbdfed3c28d0ded872))
* **RCUI-550:** [[Card] move Jui card example into Juno] add media card example and icon card example & remove knob in simple card example ([719c812](https://github.com/ringcentral/juno/commit/719c8123cdd98acf5cac57882debdc7080f0f511))
* **RCUI-583:** [[Text] support two(or more) line ellipsis] add jsdoc and remove useless style ([73f0fa9](https://github.com/ringcentral/juno/commit/73f0fa915c7abff781f944c68b570c6f4ad52df5))
* **RCUI-583:** [[Text] support two(or more) line ellipsis] add line clamp support ([90480a6](https://github.com/ringcentral/juno/commit/90480a646539f6c0a1469eb7fefcdb9ef856b2cf))
* **RCUI-596:** [CustomTheme] support custom theme with styled-component type, and palette2 ([7cbb331](https://github.com/ringcentral/juno/commit/7cbb33194aaf77684c25debae7aa550e3bb5d9b3))
* **RCUI-597:** [Test] add UT for `useKeyboardMoveFocus` ([5a617af](https://github.com/ringcentral/juno/commit/5a617afdec6aa932c52a3b3772c8a8ed8ab19064))
* **RCUI-607:** [Downshift] support `onOpen` and `onClose` and `open` ([10354e8](https://github.com/ringcentral/juno/commit/10354e8f59a83e9172ee2623aa37ec14a7f4f799))
* **RCUI-607:** [Downshift] support autocomplete mode ([4d68958](https://github.com/ringcentral/juno/commit/4d689586eb2ebf592f9789aaf72ef4785a254b8e))
* **RCUI-607:** [Downshift] support custom `renderInput` ([21d2cd4](https://github.com/ringcentral/juno/commit/21d2cd401830cdbe3753ff5fec674ac4abb154a1))
* **RCUI-607:** [Downshift] support padding with SuggestionList ([11c9c54](https://github.com/ringcentral/juno/commit/11c9c545b3a72f6149a4e0e65d67330e9beeeb84))
* **RCUI-611:** [Theme] fix token use ([6f965f1](https://github.com/ringcentral/juno/commit/6f965f1e4c58a7c87c7e05a85323b8bed3ff241e))
* **RCUI-611:** [Theme] not merge mui base theme token ([34c273e](https://github.com/ringcentral/juno/commit/34c273eb89a833c349b72093cfaa8ee0fbac6860))
* **RCUI-611:** [Theme] update scss theme ([d49e54f](https://github.com/ringcentral/juno/commit/d49e54f1878288ace0fbf1842af3d26747bc4f7a))
* **RCUI-613:** [Button] change button small font-size to `caption2` ([83d2548](https://github.com/ringcentral/juno/commit/83d2548269386302f7573dd6e5955769d8e16775))
* **RCUI-613:** [Button] change button small padding from 12px to 16px ([8a1f540](https://github.com/ringcentral/juno/commit/8a1f54041fcec1a262f3c84d03a0a27bd7fdcd6f))


### Bug Fixes

* **package:** remove not need `@types/smoothscroll-polyfill` ([3309f11](https://github.com/ringcentral/juno/commit/3309f11bb4a04d9a8a6934e1994489a609f91c3b))
* **RCUI-606:** [DafaultTheme] fix error default theme ([be432ff](https://github.com/ringcentral/juno/commit/be432ff8ca1b49bb2f6ffd75988f13825fd2a06b))
* **RCUI-607:** [Autocomplete] deprecated `Autocomplete` ([5710b0b](https://github.com/ringcentral/juno/commit/5710b0b94c33920eca43e1b3f99fb9281991a8b5))
* **RCUI-607:** [useKeyboardMoveFocus] fix loop when total is zero ([af548a3](https://github.com/ringcentral/juno/commit/af548a3878a7d7f017b64002b98e3e5222612e5d))
* **RCUI-608:** [IconButton] remove transition delay and easing ([a0faa54](https://github.com/ringcentral/juno/commit/a0faa540dbd8441df82dfef6e48561dd9114fe45))
* **RCUI-609:** [Deprecated] migrate width and height to directly write down value ([214326f](https://github.com/ringcentral/juno/commit/214326f2232dcca2bb67302ea1509fb1677541eb))
* **RCUI-609:** [Deprecated] remove `AnnotationRightRail` ([d63aece](https://github.com/ringcentral/juno/commit/d63aece418bd846725ef3e674ef742ef449b8152))
* **RCUI-609:** [Deprecated] remove `BorderLessTextField`, `OutlineTextField`, `TextField` ([2a08ecf](https://github.com/ringcentral/juno/commit/2a08ecff476eb68e6b164deae82c0230461e409d))
* **RCUI-609:** [Deprecated] remove `BoxSelect`, `LineSelect` ([b1e009a](https://github.com/ringcentral/juno/commit/b1e009a23ef4abc92dea21a01e69184d8fc185f2))
* **RCUI-609:** [Deprecated] remove `LozengeButton`, `ExpansionPanel` ([201d748](https://github.com/ringcentral/juno/commit/201d748718ec80f23fd548fccea6d8527cbdd906))
* **RCUI-609:** [Deprecated] remove `RcFabButton`, `RcFabIconButton`, `RoundButton` ([ef6c000](https://github.com/ringcentral/juno/commit/ef6c000e4fb0aa8e3f44a1cad6c735db8ffdbc59))
* **RCUI-609:** [Deprecated] remove `Textarea` ([e667275](https://github.com/ringcentral/juno/commit/e6672753ff172cda4ee4111c82bd9d2dd98256fc))
* **RCUI-609:** [Deprecated] remove `TextField` and move inner TextField outside ([6c19858](https://github.com/ringcentral/juno/commit/6c19858bfc4e074acb71217c5d0eb50be5095d5b))
* **RCUI-609:** [Downshift] fix safari tab and enter in composition mode issue ([920f10c](https://github.com/ringcentral/juno/commit/920f10ce18f51acd585c9e48f3ba472cea518524))
* **RCUI-609:** [FormLabel] cleanup FormLablel ([8289235](https://github.com/ringcentral/juno/commit/82892351a840e8e57f4114e76c932bd9586bd9ec))
* **RCUI-609:** [foundation] cleanup whole foundation ([5b97ed9](https://github.com/ringcentral/juno/commit/5b97ed9b1d76f969620a712aef15a4fda479e2fe))
* **RCUI-609:** [lineClamp] maxHeight not more have height * 4 ([45e53c8](https://github.com/ringcentral/juno/commit/45e53c8f52f053f980941de91caa1aab1761601b))
* **RCUI-609:** [Path] TextField related path change ([25ffd5f](https://github.com/ringcentral/juno/commit/25ffd5f038243823d2decf9172f85aacff890dec))
* **RCUI-609:** [Script] fix json to scss method ([680e426](https://github.com/ringcentral/juno/commit/680e426d158b91e721cd4d49b12431f42836012b))
* **RCUI-609:** [switchSize] move foundation switchSize into `Icon` component ([744b639](https://github.com/ringcentral/juno/commit/744b639f768ab9cc07fb01582511832623d2bfce))
* **RCUI-609:** [theme style] remove not need style method ([1d4a964](https://github.com/ringcentral/juno/commit/1d4a964f2fc429b29409f8adaf585529550d3deb))
* **RCUI-609:** [Type] fix rippleStyle type ([564fc99](https://github.com/ringcentral/juno/commit/564fc99ff48547d428369fbc9cb6529c5fa2aca8))
* **RCUI-609:** [useHiddenToFocus] rename to `useHiddenTabindex` ([78a9390](https://github.com/ringcentral/juno/commit/78a9390316c917574fa3dff05cb9de1e6f0a5235))
* **RCUI-609:** [useSleep] support `getSleeping` to get current sleeping state ([a4972e4](https://github.com/ringcentral/juno/commit/a4972e4bec1ac7a82642d17879510d70214f5119))
* **RCUI-615:**  [DialPad] also set srcObject as null ([3e75f16](https://github.com/ringcentral/juno/commit/3e75f16e53d39894a63ea3943a24e045582e745e))
* **RCUI-615:**  [DialPad] remove audio instance after destroy ([13e5363](https://github.com/ringcentral/juno/commit/13e53631c720e6247e48300369d5e85d37b87899))

## [1.9.0](https://github.com/ringcentral/juno/compare/1.8.7...1.9.0) (2021-07-13)


### ⚠ BREAKING CHANGES

* **RCUI-605:** [ThemeProvider] deprecated old ThemeProvider, RcIconService, RcThemeHandler

### Features

* **RCUI-605:** [ThemeProvider] deprecated old ThemeProvider ([115c3ac](https://github.com/ringcentral/juno/commit/115c3acc0c14e157ac48973dccd11aa68773396e))
* **RCUI-605:** [ThemeProvider] support subThemeProvider ([5b2f55a](https://github.com/ringcentral/juno/commit/5b2f55a49d26b23b1ebee75c7ff2d43619d8b5cb))


### Bug Fixes

* **RCUI-605:** [createTheme] fix error createTheme ([091d6fe](https://github.com/ringcentral/juno/commit/091d6feca2af64e7253426698456b870da31ab40))

### [1.8.7](https://github.com/ringcentral/juno/compare/1.8.6...1.8.7) (2021-07-12)


### ⚠ BREAKING CHANGES

* **RCUI-604:** [ZoomArea] remove ZoomArea
* **RCUI-603:** [useA11yKeyDown] rename to `useA11yKeyEvent` and change api using way
* **RCUI-601:** [Deprecated] remove Deprecated ListItemIcon
* **RCUI-603:** [Deprecated] remove Deprecated IconButton
* **RCUI-603:** [Deprecated] AutoSizer, DeprecteadDownshift, DeprecatedInlineEditable, VirtualizedList, VirtualizedMenus, VirtualizedSelects, useCallbackWithTimeout, useFocusHelper, useHoveredOnceHelper, useHoverHelper, useLazyRender, usePopupHelper, useRenderedOnceHelper, useShallowDependency

### Features

* **RCUI-595:** [add useThemeProps to components] add forwardRef and remove useThemeProps in deprecated components ([d381f3a](https://github.com/ringcentral/juno/commit/d381f3a73f182dfa4ddd4a30855ea1cb2888e86d))
* **RCUI-595:** [add useThemeProps to components] add useThemeProps ([59da666](https://github.com/ringcentral/juno/commit/59da666c94c50abe5d1c310e14a539cfb37d4999))
* **RCUI-595:** [add useThemeProps to components] add useThemeProps story and update custom theme doc ([be950be](https://github.com/ringcentral/juno/commit/be950be2ef1663bb392dbb582f5bc09814d917c3))
* **RCUI-595:** [add useThemeProps to components] add useThemePropsd ([f01dd61](https://github.com/ringcentral/juno/commit/f01dd61f0f3dfbcbcbd2bc730429150776b75b5f))
* **RCUI-595:** [add useThemeProps to components] fix circular type reference cause by 'typeof' ([ab2f487](https://github.com/ringcentral/juno/commit/ab2f4877887bfd07f84187e495d401378e1f4059))
* **RCUI-595:** [add useThemeProps to components] fix menu ([594041d](https://github.com/ringcentral/juno/commit/594041d0145acf76f9826ef9f4f63503dc31cadb))
* **RCUI-595:** [add useThemeProps to components] fix prettier problem ([1abbd14](https://github.com/ringcentral/juno/commit/1abbd1466830fe50475f85eebb63f0ec8094f415))
* **RCUI-595:** [add useThemeProps to components] fix tablepagination ([d858494](https://github.com/ringcentral/juno/commit/d85849431ef022f6e3783463c6e17a1eacbce9ea))
* **RCUI-595:** [add useThemeProps to components] rm DialPadButton in theme.ts ([c46b11a](https://github.com/ringcentral/juno/commit/c46b11a9ae386217ed5e0318ee2a35a933d1397e))
* **RCUI-595:** [add useThemeProps to components] update story snapshot ([c6f9234](https://github.com/ringcentral/juno/commit/c6f9234135375aa6a2ff8f4f5126cafb1f77eb01))
* **RCUI-598:** [[build] Support tree-shaking when importing by subpath] config ([049383f](https://github.com/ringcentral/juno/commit/049383f199138bce57e74a395ae2227e9a5dbf52))
* **RCUI-600:** [Virtuoso] clone virtuoso into project 1.9.3 ([c3f6f93](https://github.com/ringcentral/juno/commit/c3f6f9399f8d62a09665b6207da7d25353c11d25))
* **RCUI-600:** [Virtuoso] format and fix eslint with package ([2f82880](https://github.com/ringcentral/juno/commit/2f828802cfbfb1ba6a8e24883f09543070ff1290))
* **RCUI-600:** [Virtuoso] support `PortalWindowContext` ([e6a98e3](https://github.com/ringcentral/juno/commit/e6a98e39aec248ccd57a12f0ff9dad6dc803cca9))
* **RCUI-600:** [Virtuoso] update virtuoso version to 1.9.3 ([7dd3958](https://github.com/ringcentral/juno/commit/7dd3958922cebb2f02adf05a84139cdc8672162a))
* **RCUI-602:** [TablePagination] implement whole new TablePagination ([0fd3c9d](https://github.com/ringcentral/juno/commit/0fd3c9d8848161fe06b23c5797c623ca28cc7efb))
* **RCUI-603:** [Downshift] remove deprecated component ([1d81a37](https://github.com/ringcentral/juno/commit/1d81a37c11bc7ada2dd0297186bfb2c63fc0f156))
* **RCUI-603:** [Downshift] remove deprecated component ([3f0dd2e](https://github.com/ringcentral/juno/commit/3f0dd2e45619afccdbe8c3280a8bcb76ef1e265b))
* **RCUI-603:** [Theme] fix create theme for dark and light palette ([c8f5abc](https://github.com/ringcentral/juno/commit/c8f5abc4d9f99c695a34e22426d029acd49715ea))
* **RCUI-604:** [dependencies] remove dependencies, downshift,  react-resize-detector, react-sortable-hoc, smoothscroll-polyfill ([465fd18](https://github.com/ringcentral/juno/commit/465fd18400ba5472029a905ab9b548b31632190c))
* **RCUI-604:** [Icon] update icon ([965dd27](https://github.com/ringcentral/juno/commit/965dd2783316986f249285d52fec6d7c304b1e78))
* **RCUI-604:** [ZoomArea] remove ZoomArea ([b635e54](https://github.com/ringcentral/juno/commit/b635e54475402cc66a228aa6914e018ec29978d2))


### Bug Fixes

* **RCUI-595:** [add useThemeProps to components] remove any ([efe6e6c](https://github.com/ringcentral/juno/commit/efe6e6ced9f0b92546870b3be94dd78c7f9c3def))
* **RCUI-595:** [Type] add miss WithTooltip props type ([f1e8167](https://github.com/ringcentral/juno/commit/f1e8167f522f9dcf6331e53c8fc1ce2be0e8cbe2))
* **RCUI-601:** [Deprecated] remove Deprecated ListItemIcon ([c5052ee](https://github.com/ringcentral/juno/commit/c5052eefd1ddbed1847385524bb244d1fb3b3c8a))
* **RCUI-601:** [Tooltip] fix forceHide logic, also bind blur event with item ([1ed8407](https://github.com/ringcentral/juno/commit/1ed8407344dc7f39d35dc2153b9c7d3181333858))
* **RCUI-601:** [VisuallyHidden] share style between useAnnouncer and VisuallyHidden ([3b1f983](https://github.com/ringcentral/juno/commit/3b1f983b56c481f1bc1edebccf14dfd3a15c7f83))
* **RCUI-603:** [Deprecated] remove deprecated export ([86b4532](https://github.com/ringcentral/juno/commit/86b4532c9a312d6a8268bed42c336c42fc7fdc23))
* **RCUI-603:** [Deprecated] remove Deprecated IconButton ([f88c852](https://github.com/ringcentral/juno/commit/f88c8524d7ee0ea81d1edb5cb02247566265f187))
* **RCUI-603:** [Deprecated] remove VirtualizedList related code ([358e5b8](https://github.com/ringcentral/juno/commit/358e5b83bc2df43b2ad807939ddb1a6659ea4119))
* **RCUI-603:** [Hoc] migrate withDelay import path ([406bf39](https://github.com/ringcentral/juno/commit/406bf393f592de4a7c8330b6f088bb5c89bffe3f))
* **RCUI-603:** [Hoc] move hoc into foundation ([8b7e096](https://github.com/ringcentral/juno/commit/8b7e09661b96d5da6c91eceb3c6e82c879ff6103))
* **RCUI-603:** [Hoc] move withToolTip into Tooltip component ([93d6ca0](https://github.com/ringcentral/juno/commit/93d6ca0aed210382d293d9ec7f2cb50c18563cc1))
* **RCUI-603:** [TableHeadCell] switch error import from util to lodash method ([5f2d860](https://github.com/ringcentral/juno/commit/5f2d860b5bbc64ad6a92728cf84adc77d736a97f))
* **RCUI-603:** [useA11yKeyDown] rename to `useA11yKeyEvent` and change api using way ([36528bd](https://github.com/ringcentral/juno/commit/36528bd82dfb3516a3a2725d4bd57c74dff0b24c))
* **RCUI-603:** [VirtualizedDivider] fix VirtualizedDivider style ([5e65917](https://github.com/ringcentral/juno/commit/5e65917013d4d0fee6c3c0067ae045334284df3c))
* **RCUI-603:** [withToolTip] migrate withToolTip import path ([ee62c3e](https://github.com/ringcentral/juno/commit/ee62c3e7629c680e748df64440ddb9b7e6eaf4a0))

### [1.8.6](https://github.com/ringcentral/juno/compare/1.8.5...1.8.6) (2021-07-07)


### ⚠ BREAKING CHANGES

* **RCUI-594:** [MenuList] Remove not need min-width and max-width for menu list
* **RCUI-594:** [Downshift] rename `noSkip` to `disabledItemsHighlightable`, follow `MenuList` like prop naming.
* **RCUI-514:** [SuggestionList] rename to RcSuggestionList and move folder location
* **RCUI-594:** [Select] that old menu props with old vl props will broken
* **RCUI-594:** [VirtualizedMenu] mark old `VirtualizedMenu`, `VirtualizedMenuList` deprecated
* **RCUI-584:** [Portal] remove `useportal`, `animejs` dependencies. should use `RcPortal`
* **RCUI-584:** [Animation] old animation be remove, should switch to new Transitions, Animations
* **RCUI-584:** [ZoomArea] `RcZoomProps` rename to `RcZoomAreaProps`

### Features

* **RCUI-514:** [Downshift] provide groupBy feature ([5d6554c](https://github.com/ringcentral/juno/commit/5d6554c9181218382a7f22b4ed99d33b37ee98dc))
* **RCUI-584:** [Animation] implement whole animations ([4e59265](https://github.com/ringcentral/juno/commit/4e59265fece1fc7956d7edafc495947a32c4acec))
* **RCUI-584:** [Portal] provide Mui portal outside, remove `useportal` ([7ae8866](https://github.com/ringcentral/juno/commit/7ae8866fdc409da20d97fdc038f872a95fc56bfb))
* **RCUI-590:** [[VirtualizedList]Make virtualized list compatible with chrome 91+] only use overflow-anchor in chrome and do not use both solutions at the same time ([8b7e0d9](https://github.com/ringcentral/juno/commit/8b7e0d9f7dca8336e292ebf8becce229a2eed9bc))
* **RCUI-591:** [Avatar] provide shortName and colorToken hook ([4d7dda3](https://github.com/ringcentral/juno/commit/4d7dda3d419aa189b09a220be6925d44f2c89eb9))
* **RCUI-594:** [Downshift] migrate to `useKeyboardMoveFocus` to control all focus behaviours. ([4112940](https://github.com/ringcentral/juno/commit/411294053c1b68120417dae50cab89984205e595))
* **RCUI-594:** [Hook] provide `useHiddenToFocus` to move focus from hidden element ([3cd4cd7](https://github.com/ringcentral/juno/commit/3cd4cd7a8ce9f3baf3053956e90743918e5f8fdd))
* **RCUI-594:** [Hook] provide cancelable sleep method ([26350ba](https://github.com/ringcentral/juno/commit/26350ba55fb610aac718e5234222d9d55dfbb0b9))
* **RCUI-594:** [Hook] provide hook for useKeyboardMoveFocus, useOnlyOneFocusable ([31cc258](https://github.com/ringcentral/juno/commit/31cc258d512e974b26187f331584ed4d4f5bf7bd))
* **RCUI-594:** [Hook] provide useRetry for retry times when exec callback fail ([4f132b8](https://github.com/ringcentral/juno/commit/4f132b81bd31a05bb077961ba83a433a585efc96))
* **RCUI-594:** [RcPortalWindowContext] init document ad default value ([23e8de4](https://github.com/ringcentral/juno/commit/23e8de4b2ddd6278dd7a4199aae20ad2315c5c2a))
* **RCUI-594:** [Select] migrate to new VirtualizedMenu with `Virtuoso` ([55f7d75](https://github.com/ringcentral/juno/commit/55f7d7595e94db8e107bc0b9c6fd36ecc6dc3b4d))
* **RCUI-594:** [Utils] provide getScrollbarSize from Mui ([0bc53ce](https://github.com/ringcentral/juno/commit/0bc53ce43eb968dcb14549bcefa15e513a7f852d))
* **RCUI-594:** [VirtualizedMenu]  new VirtualizedMenu with `Virtuoso` ([a54ab71](https://github.com/ringcentral/juno/commit/a54ab71b3a6cd00acb141b366bf4e98cad8b6c1e))
* **RCUI-594:** [Virtuoso] provide `useDynamicHeight`, `useHighlightScroll` ([116ec8b](https://github.com/ringcentral/juno/commit/116ec8b6def2b68fd6aa8c49ed8ff461d197431f))
* **RCUI-594:** [Virtuoso] provide utils with `isOutOfRange` ([06581b8](https://github.com/ringcentral/juno/commit/06581b8d1201e2a13400f78e58ede2bfa9025d24))
* **RCUI-594:** [Virtuoso] re-export virtuoso ([ee661a0](https://github.com/ringcentral/juno/commit/ee661a03fb0e344ec184aaff7b21772c126fcb7e))
* **RCUI-599:** [Hook] `useOverflow`  hook for trigger when overflow state change ([3ff8723](https://github.com/ringcentral/juno/commit/3ff87231982f5e5f23f6bc8e3df4b9fb627660c2))
* **RCUI-601:** [focusVisible] change focusVisible color to `interactive.f01` ([66970dd](https://github.com/ringcentral/juno/commit/66970dd7c8feb6b810ac1dbd5067bdd72747da68))


### Bug Fixes

* **RCUI-584:** [Animation] remove all old animation ([4425358](https://github.com/ringcentral/juno/commit/4425358ba1332a5fe870d0c5efd9ac490c5edcfa))
* **RCUI-584:** [Hoc] re-export Hoc ([8e6d987](https://github.com/ringcentral/juno/commit/8e6d9871de9f60a0bfd7bba0db1621a7ddfc0169))
* **RCUI-584:** [ZoomArea] fix ZoomArea type naming ([1baa7f3](https://github.com/ringcentral/juno/commit/1baa7f3ddea71622d634128a6979656d871a1b83))
* **RCUI-586:** [Select] boxSelect should have outline in highContast Theme ([2a75772](https://github.com/ringcentral/juno/commit/2a75772273b7bb3f857e005495a6110ee33f6842))
* **RCUI-590:** [[VirtualizedList]Make virtualized list compatible with chrome 91+] fix check logic code ([18ad833](https://github.com/ringcentral/juno/commit/18ad8337b0d8726fc1b7df832e86560d2e15739c))
* **RCUI-592:** [Responsive] change default breakpointMap same with theme breakpoint tokens ([b85dc26](https://github.com/ringcentral/juno/commit/b85dc26a253f07574a25aef0b5c91f44f7859901))
* **RCUI-594:** [Dialer] migrate to useKeyboardMoveFocus ([ecdd0f8](https://github.com/ringcentral/juno/commit/ecdd0f8d34dfc89057050514383f615c10b50afb))
* **RCUI-594:** [MenuItem] fix menu item menuItemId with useId ([a97bdb2](https://github.com/ringcentral/juno/commit/a97bdb26fc2afc3b42969a5981f5b452f6789443))
* **RCUI-594:** [MenuList] remove MenuList min-width and max-width for use easy ([5ea4b19](https://github.com/ringcentral/juno/commit/5ea4b1902fafcd14a4137e1275b2669ad76ab493))
* **RCUI-594:** [VirtualizedMenus]  deprecated old VirtualizedMenu ([fc9bb85](https://github.com/ringcentral/juno/commit/fc9bb85f4a785f378ce6eb547c42aad280cd33d7))
* **RCUI-599:** [Text] fix useRcTooltip with open error, migrate to `useOverflow` ([4b44aee](https://github.com/ringcentral/juno/commit/4b44aee30312275cc190247225effa4e40bc541e))

### [1.8.5](https://github.com/ringcentral/juno/compare/1.8.4...1.8.5) (2021-06-30)

## Main change:

## 🎉🎉🎉🎉Remove deprecated palette tokens🎉🎉🎉🎉🎉


### Features

- **[Palette, Typography]**: pick only our palette and typography type
- **InlineEditable**: release component.
- **Dialer**: support keypadMode with Dialer.
- **Downshift**: support noSkip that will no skip disabled item highlight.

### ⚠ BREAKING CHANGES

* **RCUI-587:** [foundation] rename `getCursorPosition` to  `getSelectionPosition`
* **RCUI-391:** [InlineEditable] cleanup component, old InlineEditable mark as deprecated

### Features

* **RCUI-391:** [InlineEditable] cleanup InlineEditable ([b13ad4c](https://github.com/ringcentral/juno/commit/b13ad4c92f1685d5936bf9efdde2b5c69c777435))
* **RCUI-580:** [SplitButton] keep active style when menu open ([6d85069](https://github.com/ringcentral/juno/commit/6d850690104c031358eca1993462bb77d354dc41))
* **RCUI-581:** [Foundation] provide GlobalScrollBarStyle ([a61633a](https://github.com/ringcentral/juno/commit/a61633a087c0b103261069d0aabafa403144b88e))
* **RCUI-585:** [Theme] remove deprecated token ([efb872b](https://github.com/ringcentral/juno/commit/efb872b1fe8ca3e600bdf614379c368b9c7e4ec1))
* **RCUI-585:** [Theme] remove deprecated token ([77a15aa](https://github.com/ringcentral/juno/commit/77a15aade8f74f58815b36a9780db4f59a0f2a56))
* **RCUI-585:** [Theme] remove mui default typography ([3c462dd](https://github.com/ringcentral/juno/commit/3c462ddd2fccb49207497cc934e8de8583474214))
* **RCUI-585:** [Theme] Sync themes and change default theme to rcBlue ([5e32ff0](https://github.com/ringcentral/juno/commit/5e32ff00a3c337b241e4c85e9da13d473cb9fda3))
* **RCUI-585:** [Theme] Sync themes and change default theme to rcBlue ([7281f55](https://github.com/ringcentral/juno/commit/7281f5568ead2d9ac442340a4e065db6e1702d73))
* **RCUI-585:** [Theme] Sync themes and update scss ([3af58cb](https://github.com/ringcentral/juno/commit/3af58cb0fa83725db81f3c1c1fecc942e15b9c36))
* **RCUI-586:** [Theme] fix theme merge ([d0d1f9d](https://github.com/ringcentral/juno/commit/d0d1f9d63062a7923239b48d6018509c05bb0441))
* **RCUI-586:** [Theme] update default theme ([270171a](https://github.com/ringcentral/juno/commit/270171a5f58a1bdb4531d91d531bf5476d4aec75))
* **RCUI-587:** [Dialer] support keypadMode with Dialer, new util setSelectionPosition, useFixedEndSelection ([a07cc1e](https://github.com/ringcentral/juno/commit/a07cc1eb1ae1f6a27c1fcc533d078834446acb6a))
* **RCUI-588:** [Downshift] support noSkip that will no skip disabled item highlight ([7a76dc7](https://github.com/ringcentral/juno/commit/7a76dc794841333b297242d1557566e6ddfb7e56))


### Bug Fixes

* **RCUI-585:** [Palette, Typography] pick only our palette and typography type ([86b0c7e](https://github.com/ringcentral/juno/commit/86b0c7e18e8267448ff7307c0f95947bd17deb91))
* **RCUI-585:** [Scss] update scss ([cc59c9e](https://github.com/ringcentral/juno/commit/cc59c9eb7b1e56556cc43c2f2b933e684ca19316))
* **RCUI-586:** [Theme] defined spacing ([b019361](https://github.com/ringcentral/juno/commit/b019361ac9eb0ebdeeb09b9fcb86c80aa924856e))
* **RCUI-586:** [Theme] update sass ([44a7c51](https://github.com/ringcentral/juno/commit/44a7c517c1818355e12d572fd526a2ba8644e66a))
* **RCUI-587:** [Dialer] fix error refactor with delete char ([5a5294c](https://github.com/ringcentral/juno/commit/5a5294cbd267c249d553bbf113b7a38d0ad97249))
* **RCUI-590:** [Make virtualized list compatible with chrome 91+] fix the scrollTop jump after load more data ([12a3854](https://github.com/ringcentral/juno/commit/12a3854a5ad78e73605bf601fd391562cb330eae))
* **RCUI-590:** [Virtualized List] fix some code ([59e2d31](https://github.com/ringcentral/juno/commit/59e2d31d0942d9e5c45d561b09569fc2f65b5005))

### [1.8.4](https://github.com/ringcentral/juno/compare/1.8.3...1.8.4) (2021-06-11)


### ⚠ BREAKING CHANGES

* **RCUI-578:** remove RcSizeMeasurer
* **RCUI-578:** remove RcSizeDetector
* **RCUI-578:** remove RcMarquee
* **RCUI-578:** remove RcVirtualList Version 2
* **RCUI-578:** remove RcVideoPlayer
* **RCUI-578:** remove RcDragArea
* **RCUI-578:** remove RcAtMention
* **RCUI-578:** remove RcAudioPlayer
* **RCUI-578:** remove RcAutoCollapseActions

### Features

* **RCUI-576:** [DialTextField] support onlyAllowKeypadValue ([887a253](https://github.com/ringcentral/juno/commit/887a25305662e07d89098c9c2728470400ba3803))
* **RCUI-576:** [Downshift] support `SuggestionList`, `useDownshift` export, support `maxContainerHeight` ([b322a20](https://github.com/ringcentral/juno/commit/b322a20dee47a81eb0860914bc68882a0502b3dd))
* **RCUI-576:** [foundation] `flexWidth` Provide utils for set width in flex box ([9a54778](https://github.com/ringcentral/juno/commit/9a54778efa1987007ea564772e7d47688125e6ff))
* **RCUI-576:** [IconButton] support elevation and activeElevation ([e96a6d8](https://github.com/ringcentral/juno/commit/e96a6d80e0872a4a898158ed19399aff7221e1eb))
* **RCUI-576:** [Select] support Select with textVariant ([952d7d8](https://github.com/ringcentral/juno/commit/952d7d8077a1709a1f33a8c00d2be89671d04a36))
* **RCUI-578:** [Deprecated] move deprecated to jupiter ([1045518](https://github.com/ringcentral/juno/commit/10455187af210a6c0cf101c0a19856924c65acc2))
* **RCUI-578:** [Deprecated] move deprecated to jupiter ([5277229](https://github.com/ringcentral/juno/commit/5277229b37d872e1c9eaaeac1fdd4505d192dd91))
* **RCUI-578:** [Deprecated] move deprecated to jupiter ([e2081a5](https://github.com/ringcentral/juno/commit/e2081a576f6470e6e2ee66e81d7464df9d144352))
* **RCUI-578:** [Deprecated] move deprecated to jupiter ([f1f9beb](https://github.com/ringcentral/juno/commit/f1f9beb335a85379fc4809d6de4765fc86301499))
* **RCUI-578:** [Deprecated] move deprecated to jupiter ([7daf0f0](https://github.com/ringcentral/juno/commit/7daf0f0b1c81dc88ec5148d8d1f1b7cd25249298))
* **RCUI-578:** [Deprecated] move deprecated to jupiter ([8fd55b8](https://github.com/ringcentral/juno/commit/8fd55b8b1a6b5d042385a07aef92f45b3a2edb0e))
* **RCUI-578:** [Deprecated] move deprecated to jupiter ([c1bd0e5](https://github.com/ringcentral/juno/commit/c1bd0e56a4e84176a9ffd13c51fd26e7e0934ba8))
* **RCUI-578:** [Deprecated] move deprecated to jupiter ([d7aacdf](https://github.com/ringcentral/juno/commit/d7aacdf216783acdd7fea26a3416c0e19aba48e5))
* **RCUI-578:** [Deprecated] move deprecated to jupiter ([14a598a](https://github.com/ringcentral/juno/commit/14a598ad10ee868b230976fcf9910355a5a4da85))
* **RCUI-578:** [Deprecated] remove all __mock__ folder ([02e82a9](https://github.com/ringcentral/juno/commit/02e82a9b900aca1887bb44400aeac7d860679488))


### Bug Fixes

* **RCUI-576:** [Export] re-export missing components ([e327bc7](https://github.com/ringcentral/juno/commit/e327bc7bfdd1f710a047276b4949718f788a5a7f))
* **RCUI-576:** [Typography] fix typography with inherit variant not have font-family issue ([17f2522](https://github.com/ringcentral/juno/commit/17f2522af8668206a5f86f62bdc0147501b06211))

### [1.8.3](https://github.com/ringcentral/juno/compare/1.8.2...1.8.3) (2021-06-10)

## Main change:

## 🎉🎉🎉🎉Full Support touch device style🎉🎉🎉🎉🎉

### Features

- **Dialer**: full support dialer logic with touch device and accessibility.
- **Drawer**: new component Drawer

### Fix

- **TimePicker**: fix min and max check timing when range change

### Others

- **foundation**: provide clearWindowSelection method to clear window current selection cursor
- **useDepsChange**: provide a deps listen for sync check is that value have change
- **useRefState**: provide a deps listen for sync check is that value have change
- **foundation**: useKeyDownOnce Provide user trigger onKeyDown only one time when hold press on key.
- **foundation**: useLongPress Provide longPress helper, both click/tab/keydown will trigger event.
- **foundation**: useTouchMouseEvent Provide a utils for switch trigger touch event or mouse event between different device

### Features

- **FIJI-34913:** [Icons] update icon list ([2b60791](https://github.com/ringcentral/juno/commit/2b60791c525c38ab686b0d7fb30021d05727a7a3))
- **RCUI-391:** [foundation] provide clearWindowSelection method to clear window current selection cursor ([9d7cc42](https://github.com/ringcentral/juno/commit/9d7cc42b846d773b028509de4455d33f57343df4))
- **RCUI-391:** [foundation] provide getCursorPosition utils for get current input element cursor position and is that selectRange state ([18528b3](https://github.com/ringcentral/juno/commit/18528b392e2594048336a5eee12ad4cf277e200d))
- **RCUI-519:** [nonTouchHoverMedia] apply hover style to all need only have hover style in desktop components ([b53d353](https://github.com/ringcentral/juno/commit/b53d3533465f51ab97339bbc13af2e8e72672d0f))
- **RCUI-519:** [nonTouchHoverMedia] apply to clean button ([517e79a](https://github.com/ringcentral/juno/commit/517e79a8b9ca1e215cd5534a141c04b123f18ef6))
- **RCUI-533:** [Global Theme Props] support set props global with Downshift ([3a80ae2](https://github.com/ringcentral/juno/commit/3a80ae2939f89befa1b670dec95f2ac9865b6fad))
- **RCUI-562:** [Timepicker] provide getTimestampFromHourAndMin ([898f91b](https://github.com/ringcentral/juno/commit/898f91b3d52682e04e1cb99f42e17b4acd762394))
- **RCUI-562:** [useDepsChange] provide a deps listen for sync check is that value have change ([ba180c9](https://github.com/ringcentral/juno/commit/ba180c92aba5cb6c34e7ed7313c1be4e0f6c93bf))
- **RCUI-562:** [useRefState] provide a deps listen for sync check is that value have change ([0132f3e](https://github.com/ringcentral/juno/commit/0132f3ec3b80151225941609e5dd71d935cd0c63))
- **RCUI-570:** [Drawer] new component `Drawer` ([927b8c8](https://github.com/ringcentral/juno/commit/927b8c853389ea34863bfc433100f8524137bed0))
- **RCUI-574:** [Dialer] add token color for dialer icon second text ([1c74648](https://github.com/ringcentral/juno/commit/1c7464833b5cc5461eed322bce263679cc6ec718))
- **RCUI-576:** [Dialer] init whole dialer related components ([cbeab72](https://github.com/ringcentral/juno/commit/cbeab72909acfcd764aafd7f5d64c935119370c4))
- **RCUI-576:** [Dialer] refactor whole dialer with useLongPress ([d0bca54](https://github.com/ringcentral/juno/commit/d0bca54d51848bbaf2867c0a7c83f2bc95a0c4ef))
- **RCUI-576:** [Dialer] support touch device ([45b7331](https://github.com/ringcentral/juno/commit/45b7331fada5d19e8d64c9a15aa46a06387c1c57))
- **RCUI-576:** [DialerPad] support arrow direction ([37446a9](https://github.com/ringcentral/juno/commit/37446a952c5504526b8059eb198c93bf42cd8524))
- **RCUI-576:** [foundation] `useKeyDownOnce` Provide user trigger `onKeyDown` only one time when hold press on key. ([605b709](https://github.com/ringcentral/juno/commit/605b70947a260aad8a17418fb8cf0fe9ab2b67d4))
- **RCUI-576:** [foundation] `useLongPress` Provide longPress helper, both `click`/`tab`/`keydown` will trigger event ([3b9df3d](https://github.com/ringcentral/juno/commit/3b9df3d13ff8c0616fc1c6d59474e02dc3925cc8))
- **RCUI-576:** [foundation] `useTouchMouseEvent` Provide a utils for switch trigger touch event or mouse event between different device ([b1be608](https://github.com/ringcentral/juno/commit/b1be6088841a0378bbd6e73d413c8847dd6c1977))
- **RCUI-576:** [IconButton] support persistBg class, let user can set color by className ([51f9f07](https://github.com/ringcentral/juno/commit/51f9f0734ba41d2c1ddb3c22b9022683adf44c86))

### Bug Fixes

- **RCUI-391:** [DialPad] comment for props type ([327d53f](https://github.com/ringcentral/juno/commit/327d53f69eb8fd934c17f7b643f2c2b9038df8e7))
- **RCUI-391:** [foundation] fix useDebounce and useThrottle type ([9b0a576](https://github.com/ringcentral/juno/commit/9b0a576e76e736bedf1d19a7bc343974757148b2))
- **RCUI-391:** [foundation] remove useEventListener warning, just destroy listener ([fdee13a](https://github.com/ringcentral/juno/commit/fdee13a97df8868a49b680192a43c548aae3d994))
- **RCUI-533:** [Downshift] fix array polluted issue ([9c09be1](https://github.com/ringcentral/juno/commit/9c09be16339a16f68139f641a77f515f238b63ed))
- **RCUI-533:** [Downshift] fix copy paste when disableCloseOnSelect={true} not open issue ([d1936db](https://github.com/ringcentral/juno/commit/d1936db495ffdf3d8c397479ece3655b4f49e37e))
- **RCUI-533:** [Downshift] fix jest issue ([d5a7df9](https://github.com/ringcentral/juno/commit/d5a7df9c46dba797355225ea671bf0a4c58bf243))
- **RCUI-533:** [Downshift] fix popper position issue when at the bottom and item number small that max ([53f6c83](https://github.com/ringcentral/juno/commit/53f6c8396d70f88800e25b77a97165e67ada809d))
- **RCUI-533:** [Downshift] fix scroll scrollIssue, when optionItems.length is zero, just return -1 ([1037ed3](https://github.com/ringcentral/juno/commit/1037ed3f2a7b38fc4fcced02d4d441180723f02f))
- **RCUI-554:** [Tooltip] fix logic with forceHide ([7a1bf7b](https://github.com/ringcentral/juno/commit/7a1bf7bf8c5edb0f09bfb0286bfb9dae71ae19b3))
- **RCUI-554:** [Tooltip] fix when children button is `disabled` that error in Mui ([43ce47b](https://github.com/ringcentral/juno/commit/43ce47b5c99933d6df5b6081a4b8913770a1d3f8))
- **RCUI-554:** [Tooltip] support show tooltip when switch tooltipForceHide ([e543b5a](https://github.com/ringcentral/juno/commit/e543b5a2f0d6e23f5ba7c893d534100603b136a6))
- **RCUI-560:** [Timepicker] fix min and max check timing when range change ([6c2b0bf](https://github.com/ringcentral/juno/commit/6c2b0bfa7c3d883ea86310c472c044863b7051e4))
- **RCUI-562:** [Snapshot] update snapshot ([fcb8b11](https://github.com/ringcentral/juno/commit/fcb8b111c5c7c6181abce6e49464c6dd310d208d))
- **RCUI-562:** [TimePicker] check boundary after get original show hour value ([a9862c3](https://github.com/ringcentral/juno/commit/a9862c300ecd59a85c81f32f29cde3b5b1f05dab))
- **RCUI-562:** [TimePicker] fix init selectionView init value when no value and has range set error show ([a163e1d](https://github.com/ringcentral/juno/commit/a163e1dc75fd2c9e44f431d9235ee1120b27e0c1))
- **RCUI-562:** [TimePicker] fix min and max logic ([a0d7ddc](https://github.com/ringcentral/juno/commit/a0d7ddce2a839e121cd193f5de0ac9f55b322f70))
- **RCUI-562:** [TimePicker] fix period init value with undefined ([2018519](https://github.com/ringcentral/juno/commit/201851911a4738217fefcdc78ff66ebee76f29bb))
- **RCUI-562:** [TimePicker] fix period switch logic when only have min ([39c2df7](https://github.com/ringcentral/juno/commit/39c2df7c925f990c3d28198962a71fde5054df36))
- **RCUI-565:** [Card Pressed State] Apply card pressed state when ripple is disabled ([ca90fcc](https://github.com/ringcentral/juno/commit/ca90fcc60ac7ebc97009016ac6bf2c8b539ce45d))
- **RCUI-565:** [Card Pressed State] Removed unused vars ([dfaea59](https://github.com/ringcentral/juno/commit/dfaea59f94477a7efc5b543e365dd0f8bb3b37f5))
- **RCUI-565:** [Card Pressed State] Updated story ([ae39394](https://github.com/ringcentral/juno/commit/ae39394bc3114854b896e39607c9f8662aab1eca))
- **RCUI-565:** [Card] fix logic with `useThemeProps` ([8ef5196](https://github.com/ringcentral/juno/commit/8ef519680106b85c87062f4f41e7b23b8cb49f67))
- **RCUI-565:** [Types] fix RcComponentsProps type for that can use Mui base props ([8b5df58](https://github.com/ringcentral/juno/commit/8b5df58c69c448b2e033697b28b95693da96cbd2))
- **RCUI-566:** [PortalWindow] add some miss PortalWindow ([feb4c5b](https://github.com/ringcentral/juno/commit/feb4c5bc7f8ecdf2835d4df5fd342c2208330c84))
- **RCUI-566:** [SubMenu] fix DetchedWindow popper postiton ([839d3fb](https://github.com/ringcentral/juno/commit/839d3fb131c37f12bff564ee347092f3f67cfe47))
- **RCUI-567:** [Tabs] should not reorder the fixed item when switch to first item in MoreMenu varaint ([b631d79](https://github.com/ringcentral/juno/commit/b631d791ca0423eaaad5f17cdd6b02c079962819))
- **RCUI-570:** [Drawer] set default radius as `lg` ([0262262](https://github.com/ringcentral/juno/commit/026226255a2e6493308c49f8371f9c1acc0e00ff))
- **RCUI-572:** [Menu] deprecated menu support detachWindow ([44317c1](https://github.com/ringcentral/juno/commit/44317c113a216919d369d06c6282ad92273fca95))
- **RCUI-575:** [Menu] popper outside the viewport ([b35b827](https://github.com/ringcentral/juno/commit/b35b82714d62dbf8c8c4f31863d80eb8d06295d5))
- **RCUI-576:** [DialerPad] fix keydown delete button not re-focus issue ([20f80d4](https://github.com/ringcentral/juno/commit/20f80d4dc3fe4a6ed9798bab480dc44832a759b2))
- **RCUI-577:** [IconButton] fix style with plain logic ([2636f2c](https://github.com/ringcentral/juno/commit/2636f2c5da6360c81c6adade52c0abd177e6e917))

### [1.8.2](https://github.com/ringcentral/juno/compare/1.8.1...1.8.2) (2021-05-26)

### ⚠ BREAKING CHANGES

- **RCUI-533:** [Downshift] migrate VirtualizedList to 3rd react-virtuoso, when you use dynamic item height, you need add `dynamic` prop
- **RCUI-426:** [Avatar Type] when set clickable that component type will switch to HTMLButtonElement

### Features

- **Package:** [Lodash] update lodash to 4.17.21 ([6c3fbe4](https://github.com/ringcentral/juno/commit/6c3fbe4dc0ceceb86bf839fe2be8766b6e9c4871))
- **RCUI-426:** [Avatar] move opacity to wrapper ([da66eb1](https://github.com/ringcentral/juno/commit/da66eb14e3d53b51570fc5f96c49f2a6a74e513b))
- **RCUI-426:** [Avatar] support disabled when clickable ([0d9bfde](https://github.com/ringcentral/juno/commit/0d9bfdeb0d9c137a6dc9efb87285352504297c38))
- **RCUI-533:** [Downshift] migrate VirtualizedList to 3rd react-virtuoso ([a7c131b](https://github.com/ringcentral/juno/commit/a7c131bc78117bd6e0f96cb6054f6121ddda91e2))
- **RCUI-533:** [Downshift] support debug with popup menu ([01f6a9e](https://github.com/ringcentral/juno/commit/01f6a9e0269544a464a4a0874608246be8e5c649))
- **RCUI-533:** [outerSize] provide a utils for get element outerSize ([fee4ebf](https://github.com/ringcentral/juno/commit/fee4ebff2d597ca1443b8bf264ac0161653a9fae))
- **RCUI-533:** [useResizeObserver] support ignoreFireWhenObserve ([47d4a1b](https://github.com/ringcentral/juno/commit/47d4a1b65331853fe8d614e5a96986e9a61391df))
- **RCUI-549:** [SubMenu] support DetachedWindow ([9d09cd4](https://github.com/ringcentral/juno/commit/9d09cd4c865ac87fa4d88a613eb376c25b68ad2b))
- **RCUI-549:** [Token] add palette type dark ([288d85f](https://github.com/ringcentral/juno/commit/288d85f1b25f3539baee07e5388bba2469fa45ef))
- **RCUI-549:** [Token] update theme ([63965b3](https://github.com/ringcentral/juno/commit/63965b39b0e84db16882c1ffe16455ea81a2ec41))
- **RCUI-549:** [Token] update theme ([a059cd8](https://github.com/ringcentral/juno/commit/a059cd85b0fe8c92a9b9ed640882872574f96013))
- **RCUI-555:** [DialPad] support addition props on DialPadButton ([72962d9](https://github.com/ringcentral/juno/commit/72962d9361d38336c0f65dee54e79a29867bdd4e))

### Bug Fixes

- **Package:** [Eslint] update eslint related change ([f8802f5](https://github.com/ringcentral/juno/commit/f8802f5f2bd095a5e1a94ed5910e8cd8eb6492b9))
- **Package:** [Jest] fix tsConfig to tsconfig ([2162994](https://github.com/ringcentral/juno/commit/2162994b42134777d6f4d02ad9be15e17ccd3a52))
- **RCUI-533:** [Downshift] fix init with zero items height issue ([a06fe23](https://github.com/ringcentral/juno/commit/a06fe23b28def2641cb2b7f4a3c1c13ba888c270))
- **RCUI-533:** [Downshift] fix scroll logic ([b8bbf23](https://github.com/ringcentral/juno/commit/b8bbf23c3a32cf88a51e29a6b1ec0fb4a489dd99))
- **RCUI-533:** [Downshift] migrate virtual list to `react-virtuoso` ([23b241d](https://github.com/ringcentral/juno/commit/23b241d3f620c929661b0126bd3923464a9b18b3))
- **RCUI-533:** [useVirtualDynamicHeight] refactor whole with Hoc and make that easy to use ([2881d24](https://github.com/ringcentral/juno/commit/2881d24a28a610ecbcecd0e7e84b543c8be918a6))
- **RCUI-533:** [useVirtualDynamicHeight] remove not need `useVirtualDynamicHeight` ([e745efd](https://github.com/ringcentral/juno/commit/e745efddc54527dcf26d84842baee60432f42e6a))
- **RCUI-533:** [VirtualizedList] relive vl ([cf176d4](https://github.com/ringcentral/juno/commit/cf176d4d5821fb22de3b63aafaa3bc79a8c98b25))
- **RCUI-545:** [Styled-component] support outside custom theme with DefaultTheme ([f28faa5](https://github.com/ringcentral/juno/commit/f28faa5a3e2c13a6b52195931fe2ffec2aa47570))
- **RCUI-545:** [styled-components] migrate inner lot of styled-components to foundation ([1984ac5](https://github.com/ringcentral/juno/commit/1984ac52c34b1c8d6ca76f68903f7c7334bb7218))
- **RCUI-545:** [Type] fix Hoc type implement way ([920950e](https://github.com/ringcentral/juno/commit/920950e08328cfc07a35e633a64c09826df718d4))
- **RCUI-551:** [Scss] fix variable non correct string type issue ([1778c0b](https://github.com/ringcentral/juno/commit/1778c0bb33f6565aa17ebf503a2ee18e01d6bacb))
- **RCUI-553:** [TimePicker] error with max ([509e4ed](https://github.com/ringcentral/juno/commit/509e4ed8b83a89a8f8dd257df72a372a05c8063a))

### [1.8.1](https://github.com/ringcentral/juno/compare/1.8.0...1.8.1) (2021-05-13)

## Main change:

## 🎉🎉🎉🎉Upgrade React default support version to v17🎉🎉🎉🎉🎉

### Features

- **Downshift**: provide action `keepHighlightedIndex()` when options change not want reset highlighted item
- **Button**: support xlarge size
- **Tag**: support support custom radius
- **SubMenu**: add onClose prop to MenuList and SubMenu

### New hooks

- **Ripple**: support disabled all ripple in Mui theme with all component
- **useResizeObserver**: support detachedWindow with externalWindow
- **useId**: add useId hook, support auto increase id

### Others

- **Token**: apply all miss new tokens

### ⚠ BREAKING CHANGES

- **RCUI-164:** [Dialog] remove deprecated Dialog
- **RCUI-538:** [palette3] remove palette3
- **RCUI-535:** remove RcPopperMenu

### Features

- **RCUI-271:** [React] upgrade react/react-dom version to 17.0.2 and enzyme-adapter-react-17 ([62ce09b](https://github.com/ringcentral/juno/commit/62ce09b56700211d48e1527a5d0e3e7f6968c456))
- **RCUI-271:** [React] upgrade react/react-dom version to 17.0.2 and enzyme-adapter-react-17 ([333c473](https://github.com/ringcentral/juno/commit/333c473c7b01cf54da87368db841346fe2c52fd2))
- **RCUI-511:** [SubMenu] add onClose prop to MenuList and SubMenu ([02a02b2](https://github.com/ringcentral/juno/commit/02a02b24af389235d719164bf2a6920f7fa01d35))
- **RCUI-518:** [Menu] use useId in menu component ([9589d81](https://github.com/ringcentral/juno/commit/9589d813f99db9ea2ed39013d9194c1a668969fd))
- **RCUI-518:** [Package] remove not need @react-aria/utils ([761603a](https://github.com/ringcentral/juno/commit/761603a45a9ee0fd7e849703ff378dabb85bd537))
- **RCUI-518:** [useId] add useId hook ([7e40e75](https://github.com/ringcentral/juno/commit/7e40e7588fba9829a32dc1cf930514d883be4a88))
- **RCUI-523:** [Downshift] support click area focus on input ([d2349d6](https://github.com/ringcentral/juno/commit/d2349d603d468293830c67f0b51f084b362c98f4))
- **RCUI-524:** [Downshift] set z-index for before and after to prevent line behind tags ([5360594](https://github.com/ringcentral/juno/commit/5360594cdfc4e49bb773f84f38979a5f12607b98))
- **RCUI-525:** [RCTable - Make sort arrows consistent with DataGrid] Changed sort arrow display to match JUI DataGrid. Temporarily using arrowUp and arrowDown icons ([9fad59f](https://github.com/ringcentral/juno/commit/9fad59f5ddb45c83e0fb6619edf70745de306c0b))
- **RCUI-526:** [ResizeObserver Polyfill] fix ([29a1ba4](https://github.com/ringcentral/juno/commit/29a1ba44cd94817a618199b4ad11b41742a8f288))
- **RCUI-526:** [ResizeObserver Polyfill] fix ([96b830d](https://github.com/ringcentral/juno/commit/96b830dfb584ae81485a9923dd0dc3117914f0ea))
- **RCUI-526:** [Tabs] add ResizeObserver polyfill ([d757bec](https://github.com/ringcentral/juno/commit/d757bec3828df1f69325b2fdc00747986b07303e))
- **RCUI-526:** [Tabs] add window for ResizeObserver polyfill ([014d784](https://github.com/ringcentral/juno/commit/014d7840ba3b4e12cfd934d275e814c27c18b7aa))
- **RCUI-526:** [useResizeObserver] fix type ([8e7b0f7](https://github.com/ringcentral/juno/commit/8e7b0f70ed58d2808abc89c90212da758ac51560))
- **RCUI-526:** [useResizeObserver] support detachedWindow with externalWindow ([d184ac7](https://github.com/ringcentral/juno/commit/d184ac704ab3045107784ed2b9d34bdf764ecd47))
- **RCUI-529:** [Downshift] `keepHighlightedIndex` when options change reset highlightedIndex ([764788c](https://github.com/ringcentral/juno/commit/764788ca24e52db5e38fb7d1ff98be32a998ee94))
- **RCUI-529:** [Downshift] trim value for avoid paste with newline end ([23ca997](https://github.com/ringcentral/juno/commit/23ca9974c3743a493c3127a8dba03560df2d7221))
- **RCUI-534:** [Menu] support in DecatedWindow ([da59426](https://github.com/ringcentral/juno/commit/da594261312b5cc6d15ed665c81687772231d048))
- **RCUI-535:** [PopperMenu] fix type ([46c674f](https://github.com/ringcentral/juno/commit/46c674fdfe2735b06f3d96e958cfb13d0dd6d084))
- **RCUI-535:** [PopperMenu] remove component ([2e144d4](https://github.com/ringcentral/juno/commit/2e144d4336073d8535b97bfff8c4966ecaa0e56a))
- **RCUI-536:** [Ripple] fix component disableRipple prop ([a519c26](https://github.com/ringcentral/juno/commit/a519c26814a0198cadfc086d651b59f6bf0d3158))
- **RCUI-536:** [Tab] remove not need observed prop ([36d24c6](https://github.com/ringcentral/juno/commit/36d24c677cfd8ae330bb0ef4e95cd3ce8a3a51c2))
- **RCUI-536:** [Tab] remove rename prop ([69a2c79](https://github.com/ringcentral/juno/commit/69a2c7986a34909662e2727a062091ca4ef60a5f))
- **RCUI-536:** [Tabs] support Custom MoreButton when variant is moreMenu ([0c7da8c](https://github.com/ringcentral/juno/commit/0c7da8c112ee90012ef8e82eb66985ca31000b8f))
- **RCUI-536:** [Tabs] support Custom MoreButton when variant is moreMenu ([5a91f88](https://github.com/ringcentral/juno/commit/5a91f88482a2fbf83f54bd71e0ed6771640ab8a5))
- **RCUI-536:** [Tabs] update story example ([a15f33e](https://github.com/ringcentral/juno/commit/a15f33e0779882df04ab715080d7913270eb05ed))
- **RCUI-538:** [SnackbarAction] support color ([111a831](https://github.com/ringcentral/juno/commit/111a8319decd40c02f9bceb83c74cf5d051e650e))
- **RCUI-540:** [Animation] remove tinycolor2 replace with mui fade ([fe4fce1](https://github.com/ringcentral/juno/commit/fe4fce1ebe1b746983848b862cb7b6f776cfeaf0))
- **RCUI-540:** [IconButton] support radius for IconButton ([5a96683](https://github.com/ringcentral/juno/commit/5a96683c345c82e6f298b458e6c8bdc6cf41a9e8))
- **RCUI-540:** [Tag] support radius for Tag ([21ad16b](https://github.com/ringcentral/juno/commit/21ad16bd54df0f7662ed575775aa3e5ba5d4e8bd))
- **RCUI-541:** [Button] support xlarge size with Button ([14372f1](https://github.com/ringcentral/juno/commit/14372f150dff1e8276d710f5fedc27d881e945e2))
- **RCUI-547:** [ResizeObserver] remove fork resize-observer-polyfill, provide getResizeObserver for check is that have `ResizeObserver` ([915327e](https://github.com/ringcentral/juno/commit/915327e9bf8caafd84ae59452be5f6ebb64cb3ce))

### Bug Fixes

- **RCUI-:** [Icon] update icons ([c7243ba](https://github.com/ringcentral/juno/commit/c7243ba273d28dca9ab59d21ee034bfcb87dd9e2))
- **RCUI-164:** [dependencies] move not need dependency shelljs to devDependencies ([8d12046](https://github.com/ringcentral/juno/commit/8d120460c1ee65693bd74e452a8ce021d23ebbba))
- **RCUI-164:** [Dependencies] remove re-resizable dep ([e5356db](https://github.com/ringcentral/juno/commit/e5356db23b05cef44d7ffb2b42b711c7ae1aae4e))
- **RCUI-164:** [Deprecated] remove deprecated Dialog ([cf9ebd7](https://github.com/ringcentral/juno/commit/cf9ebd7c2ab4f42a984895b87abf1395477514e4))
- **RCUI-164:** [foundation] fix some foundation type ([3772899](https://github.com/ringcentral/juno/commit/3772899481fddff81ea3cb4dd8d05fe638e6e54b))
- **RCUI-514:** [Downshift] fix highlightedIndex be reset to first when disableCloseOnSelect is true ([0347970](https://github.com/ringcentral/juno/commit/0347970eef692d1f335042903834951131792520))
- **RCUI-518:** [Tab] remove children cache ([9c83ea2](https://github.com/ringcentral/juno/commit/9c83ea272eaeef22749d59d1beba581be22fa0ab))
- **RCUI-518:** [Tabs] fix component tabs size computed ([89ac549](https://github.com/ringcentral/juno/commit/89ac5498a38d8121ec9ced4fd56f14120b0b084e))
- **RCUI-518:** [useId] add test and fix logic, fix useResultRef type ([cd89a08](https://github.com/ringcentral/juno/commit/cd89a085056cc638cbf5c8b41a56e340cf285574))
- **RCUI-520:** [style] remove const styles ([8408fc0](https://github.com/ringcentral/juno/commit/8408fc0fc96e3d0b2d6e410ad11a0399f45a46e9))
- **RCUI-520:** [style] remove const styles ([afa15d1](https://github.com/ringcentral/juno/commit/afa15d1f1b5869ff790e6721cd70aeee59d0f950))
- **RCUI-523:** [Cards] Changed default styling to preserve original styling ([d18515e](https://github.com/ringcentral/juno/commit/d18515ef3f08c02d05e79693c3af657eddc1e3e8))
- **RCUI-523:** [Cards] fix storybook ([028214a](https://github.com/ringcentral/juno/commit/028214a5afe6c7f9ce51ecf734800091123023df))
- **RCUI-523:** [Cards] remove all not need defaultProps ([a8abe79](https://github.com/ringcentral/juno/commit/a8abe79db3a4edf51e1b7422eda9168cc79c73b5))
- **RCUI-524:** [Downshift] support scroll in downshift tags area ([fd43b78](https://github.com/ringcentral/juno/commit/fd43b7837aad5d7284ea7cff8a20dd19d4fa706a))
- **RCUI-528:** [Picker] support type required for picker ([4bfe3ae](https://github.com/ringcentral/juno/commit/4bfe3aec6281773076b23194c426dfafb503be6a))
- **RCUI-532:** [Link] fix default color to 'informative.f02' ([f68e0e9](https://github.com/ringcentral/juno/commit/f68e0e92d83cada38dde8e58cadf5c786da4d50d))
- **RCUI-536:** [Badge] fix none invisible style ([058e31e](https://github.com/ringcentral/juno/commit/058e31edc440f07f823ecfa675ed605ab00d9892))
- **RCUI-537:** [Downshift] apply keepHighlightedIndex logic ([9a86257](https://github.com/ringcentral/juno/commit/9a862578433be299f5aae9ae27ceafa9aab92a69))
- **RCUI-537:** [Downshift] remove not need logic because migrate to new downshift ([c1cd272](https://github.com/ringcentral/juno/commit/c1cd2726d0d2340de03320d2790040c04ae7ab49))
- **RCUI-538:** [Color token] migrate all miss token ([9fd97f2](https://github.com/ringcentral/juno/commit/9fd97f28ce83a534b3990d9f17bd121c13ad8105))
- **RCUI-538:** [ColorProp] migrate all RcColorSet to RcPaletteProp for full support correct type ([b61c263](https://github.com/ringcentral/juno/commit/b61c2639f39454a2eb3371f6737eff0716ceb26e))
- **RCUI-538:** [Tag] fix tag color to new structure and fix color ([ea6b8d3](https://github.com/ringcentral/juno/commit/ea6b8d380c9e1f7b196b0953d98c18b71b09b444))
- **RCUI-538:** [Typography] fix data-color show logic ([b8ac654](https://github.com/ringcentral/juno/commit/b8ac6540ab42d90b5ca1d378dcbae2c11d2efdb8))
- **RCUI-544:** [Build] fix build polyfills folder Lost ([71389d1](https://github.com/ringcentral/juno/commit/71389d1428442c50e3b192b716d2aa8ab8d076d1))
- **RCUI-544:** [Build] fix build polyfills folder Lost ([4d16d15](https://github.com/ringcentral/juno/commit/4d16d159796328a64afc00d0309f2ae7bde1d5dd))
- **RCUI-545:** [Styled-component] fix type for prepare update styled-component version ([5454525](https://github.com/ringcentral/juno/commit/545452543ef020a114fd8ff8491ed980c84579dd))
- **RCUI-545:** [Type] fix NodeJs Type ([051467a](https://github.com/ringcentral/juno/commit/051467a297f779125beaa0bd00021a431571bf0f))
- **RCUI-546:** [TimePicker] Value is wrong when set min props ([0864015](https://github.com/ringcentral/juno/commit/0864015270b7d71d1c632ef41a420ca6a98daef2))

## [1.8.0](https://github.com/ringcentral/juno/compare/1.7.0...1.8.0) (2021-04-28)

## Main change:

## 🎉🎉🎉🎉Responsive API announce🎉🎉🎉🎉🎉

We announce new responsive API for you to easy to switch size between different size of device, view [Responsive](https://ringcentral.github.io/juno/?path=/story/responsive--responsive-button)

### New Components

- **Card** are surfaces that display content and actions on a single topic.
- **Downshift**: new downshift full support a11y
- **Tab**: new Tab components for easy to use

### New hooks

- [**useResultRef**]: provide a method for enhance useRef, provide useRef can get follow function value once, prevent useRef(getValue()), that
- [**useResizeObserver**]: support throttle
- [**useChange**]: improve useChange with emit prev and next value

### Others

- [**isRef**]: provide isRef to check object is useRef
- [**nonTouchHoverMedia**]: new style tag for only apply hover in desktop
- [**DeprecatedMessage**]: that deprecated message no longer show in production mode and when set `WARNING_IGNORE` as `true`

### ⚠ BREAKING CHANGES

- **RCUI-475:** [usePrevious] init not have null value anymore, default is undefined

### Features

- **RCUI-475:** [Downshift] implement whole downshift behaviour ([3274b99](https://github.com/ringcentral/juno/commit/3274b99cbddc57a63b4fbfc8ec454c34cc16ef14))
- **RCUI-475:** [isRef] provide isRef to check object is useRef ([04682a5](https://github.com/ringcentral/juno/commit/04682a59332f3343a1bd75198c9d4063ed049a04))
- **RCUI-475:** [RcVirtualizedList] part implement vl v2, not complete yet, but is ok to use ([c219192](https://github.com/ringcentral/juno/commit/c219192dbf164e86f941b05633464c9d4bfcfa46))
- **RCUI-475:** [useForceUpdate] implement useForceUpdate ([e172d9b](https://github.com/ringcentral/juno/commit/e172d9b6471217c4cf46dcd1be287deb9f0d8298))
- **RCUI-475:** [useOnReRender] provide method for only trigger when rerender ([e782019](https://github.com/ringcentral/juno/commit/e7820193380d0f57f5d1acce3b7a8ffa561e301a))
- **RCUI-475:** [useResultRef] provide a method for enhance useRef, provide useRef can get follow function value once, prevent `useRef(getValue())`, that `getValue` calculate every re-render ([b12af26](https://github.com/ringcentral/juno/commit/b12af260841b40fccab783b7c8f72ea3e190f476))
- **RCUI-475:** [VirtualizedList] provide getIsScrolling state ref ([fea9201](https://github.com/ringcentral/juno/commit/fea92013b6ae5c92c1953b23977815021c9cfc9d))
- **RCUI-475:** support SuggestionListProps ([a6427ad](https://github.com/ringcentral/juno/commit/a6427adc36bf88e458f6084d5e86aa9f7c6bb233))
- **RCUI-486:** [Tabs] component cleanup ([f066461](https://github.com/ringcentral/juno/commit/f0664613f77ccda8589319025715cff69c72dbc3))
- **RCUI-487:** [Infinite List] extend infinite list with customized scrollbar ([74870e7](https://github.com/ringcentral/juno/commit/74870e74bc426f9caf0981c0c5fc238f2e615b22))
- **RCUI-487:** [Vertualized list] update snapshot ([b68e5df](https://github.com/ringcentral/juno/commit/b68e5dff195c81e2da8e91c5f51bb8432d87840e))
- **RCUI-488:** [TabContext] add displayName ([5d05d09](https://github.com/ringcentral/juno/commit/5d05d097178abede4f5911fce91afe99a1cb917e))
- **RCUI-488:** [TabList][tabpanel] cleanup component ([f4495f6](https://github.com/ringcentral/juno/commit/f4495f684d596d715a1bc2e9eeb8245cc0172e91))
- **RCUI-488:** [Tabs] fix performance ([5e5d857](https://github.com/ringcentral/juno/commit/5e5d85771a44daa61661066eb3c3774265300230))
- **RCUI-488:** [Tabs] remove console ([66847e4](https://github.com/ringcentral/juno/commit/66847e45ec9f40163d815b63558b2ecf59fa47d2))
- **RCUI-488:** [useThrottle] fix provide useThrottle ([8c11ede](https://github.com/ringcentral/juno/commit/8c11edef70e0049bf1323019cab2ad9c5365aca3))
- **RCUI-489:** [SplitButton] set menuProps keepMounted false ([e4521e3](https://github.com/ringcentral/juno/commit/e4521e31ee6cc7b380fb8345a7d8dbe496f5cf10))
- **RCUI-492:** [Card Components] new Card component ([5a7da7e](https://github.com/ringcentral/juno/commit/5a7da7e67c3a095d77dc08260898b32fe8684013))
- **RCUI-492:** [Virtualized list] customized vertical scroller ([9ab4025](https://github.com/ringcentral/juno/commit/9ab402562dedacb8b4e4851ce718511bb6fbde49))
- **RCUI-498:** [SplitButton] fix ripple in safari issue ([9bac1f5](https://github.com/ringcentral/juno/commit/9bac1f5127cec8fa98abbf7adb6593f81c38bb87))
- **RCUI-499:** [Responsive] add common responsive hoc, hook, context ([2844ecd](https://github.com/ringcentral/juno/commit/2844ecddf0ac9dc1612ef42f710914d133bb8605))
- **RCUI-499:** [Responsive] add some demo ([4e0b469](https://github.com/ringcentral/juno/commit/4e0b469f48b9af3d39e287d3dfd6ca3ce3921b4b))
- **RCUI-499:** [Responsive] get width by clientWidth ([dd5095d](https://github.com/ringcentral/juno/commit/dd5095d5ba8dbb2fd270b16dcccef9a15f3c0a2b))
- **RCUI-499:** [Responsive] withResponsive ([366b051](https://github.com/ringcentral/juno/commit/366b051bd64820714cdf69b6652fce56681ffbc6))
- **RCUI-499:** [useResizeObserver] add throttle option ([d021fbe](https://github.com/ringcentral/juno/commit/d021fbef9961d0533ea7e62f9dabed1a08550e80))
- **RCUI-500:** [Icon] supports to be auto-updated when theme changes ([3a7fbd2](https://github.com/ringcentral/juno/commit/3a7fbd2d34979ca97dff30bc94286576a32fa6d0))
- **RCUI-501:** [AtMention] fix color token ([e8ee734](https://github.com/ringcentral/juno/commit/e8ee734129778d9a7f135e2ff1ce70e5a2d76b22))
- **RCUI-501:** [Switch] fix track color ([d86c8c1](https://github.com/ringcentral/juno/commit/d86c8c1957fe461f0dac67b2b1058b225315cb77))
- **RCUI-503:** [Hover] add common media string to fix hover issue in touch devices ([f1d7574](https://github.com/ringcentral/juno/commit/f1d7574e7588c169b03a2ddf955e999418171445))
- **RCUI-506:** [Tabs] use new token ([2293524](https://github.com/ringcentral/juno/commit/2293524783bc78cff9c48dd2cfd7df78b299fdad))
- **RCUI-507:** [Downshift] getOptionDisabled support ([c811ac6](https://github.com/ringcentral/juno/commit/c811ac6fff48cfc15227859a83742a22ecac6aa9))
- **RCUI-507:** [Downshift] memo defaultHighlightedIndex ([729c0fd](https://github.com/ringcentral/juno/commit/729c0fdf6d84f53cca547eec5f8310d16a0f3cea))
- **RCUI-507:** [Downshift] support check defaultHighlightedIndex ([b38168a](https://github.com/ringcentral/juno/commit/b38168ac0924706ea9945b8b8b65d34ad8b93a2f))
- **RCUI-512:** [Downshift] optimate getFiltered result only when menu isOpen ([4ac8990](https://github.com/ringcentral/juno/commit/4ac8990f9c09f0514494997e443d9c19466413c9))
- **RCUI-512:** [Downshift] remove downshiftjs and support generic type with options ([aa675c7](https://github.com/ringcentral/juno/commit/aa675c7a3cebef2bb9e1b91bc7557d8049d6c16d))
- **RCUI-513:** [SplitButton] change combine onClick together to cover ([cc120e7](https://github.com/ringcentral/juno/commit/cc120e7bda80d8a16f0fdaf750373a2b8b7e25e8))
- **RCUI-514:** [Downshift] add id for clearButton ([b16dbb4](https://github.com/ringcentral/juno/commit/b16dbb4537b9ac9967b34ed952d373b850b4277a))
- **RCUI-515:** [Update theme token] add new theme token ([aaae298](https://github.com/ringcentral/juno/commit/aaae2984611c2195d7374fbf6ac75f20817952e6))

### Bug Fixes

- **RCUI-475:** [combineProps] change combineProps not be undefined, always have value after combine ([6f00419](https://github.com/ringcentral/juno/commit/6f004196c216ce58ff01689287b8848f50814be4))
- **RCUI-475:** [Downshift] fix \n issue with RegExp ([92feda7](https://github.com/ringcentral/juno/commit/92feda7dbfb97e062abf07d34f62c3ab79ab3b11))
- **RCUI-475:** [Downshift] fix error logic ([115619d](https://github.com/ringcentral/juno/commit/115619d993ab6ef77561cd3d589cdeb234fbfe5f))
- **RCUI-475:** [Downshift] fix shift tab auto select issue ([b9d0587](https://github.com/ringcentral/juno/commit/b9d0587b1af17249d578929c31074229f548767f))
- **RCUI-475:** [RcVirtualizedList] a little vl change, wait whole refactor to switch ([e830077](https://github.com/ringcentral/juno/commit/e830077cc28fdc2f51308919868ef62556af251b))
- **RCUI-475:** [useChange] improve useChange with emit prev and next value ([58d7d56](https://github.com/ringcentral/juno/commit/58d7d569c40ee4a58340a6a71578205756f2a3ec))
- **RCUI-475:** [useEventListener] change useEventListener implementation, make that more useful ([94573af](https://github.com/ringcentral/juno/commit/94573af22fcdc2824209e0bac13377ea0ebed491))
- **RCUI-475:** [usePrevious] support use previous can have default value ([8357bfb](https://github.com/ringcentral/juno/commit/8357bfb4b2fb3a92dddbb697532128e513b24d3b))
- **RCUI-487:** [Virtualized list] remove divRef error ([4126d88](https://github.com/ringcentral/juno/commit/4126d881e25380ac9217abb6e5b241c91cf9c85f))
- **RCUI-490:** [SubMenu] fix disabled props ([cb92a55](https://github.com/ringcentral/juno/commit/cb92a55d186bfca5d0feb1ae25e292e39aa5364a))
- **RCUI-490:** [SubMenu] update snapshot ([247033e](https://github.com/ringcentral/juno/commit/247033e32dd041d6119803197612edf306636b67))
- **RCUI-498:** [VirtualizedList] fix vl logic ([eac547b](https://github.com/ringcentral/juno/commit/eac547be03c34639a5637c7f47af96a5f2a9eb31))
- **RCUI-499:** [UT] fix UT of 'getMatchedBreakPoint' ([53f7893](https://github.com/ringcentral/juno/commit/53f789360300bf18aa438b71fbb5d003e0d148d4))
- **RCUI-502:** [ListItem] button mode should not have TouchRippleProps ([6a11fbd](https://github.com/ringcentral/juno/commit/6a11fbd4f9a67e95e275941394cbafc2e86182b1))
- **RCUI-504:** [Switch] fix trackColor pass to dom node ([5cf2aa3](https://github.com/ringcentral/juno/commit/5cf2aa3840999b6b5cb94550ae6aab1cf3ad419b))
- **RCUI-505:** [ThemeToken] fix token ([1036c4b](https://github.com/ringcentral/juno/commit/1036c4b865b2dcb07a9169dc6c7cd91c3f676f27))
- **RCUI-505:** [ThemeToken] fix token issues ([c330024](https://github.com/ringcentral/juno/commit/c3300241599f75d9f0a614d2c7c00a3be0421fac))
- **RCUI-505:** [ThemeToken] update snapshot ([715d44f](https://github.com/ringcentral/juno/commit/715d44f46882e54d6bc17d4c08b6b4f819db071d))
- **RCUI-505:** [ThemeToken] update snapshot ([202e81a](https://github.com/ringcentral/juno/commit/202e81a05258338aea8642b444e04814ded028c6))
- **RCUI-505:** [ThemeToken] update snapshot ([781688c](https://github.com/ringcentral/juno/commit/781688cf990175cc1c5ce90c48553343ee0ba8c7))
- **RCUI-505:** [ThemeToken] update theme from rcTheme to rcJupiterBlue theme ([d08da91](https://github.com/ringcentral/juno/commit/d08da914d9de1a65d889df25b1ec0cc4dde843a7))
- **RCUI-509:** [SubMenu] The SubMenu of the first level is in the MenuList and cannot be closed by Esc or Tab ([a40b431](https://github.com/ringcentral/juno/commit/a40b431c52ac06d84b993ec12c6adefcb77ceb8a))
- **RCUI-510:** [ThemeToken] add TabIndicatorProps for RcTabs component ([7bb3686](https://github.com/ringcentral/juno/commit/7bb36865480592d2275d6dcd4f2ae3b34c125c6c))
- **RCUI-510:** [ThemeToken] optimize ([7c441a1](https://github.com/ringcentral/juno/commit/7c441a161e2f081d193042d74b29ae88e1a0dce2))
- **RCUI-510:** [ThemeToken] update palette to palette2 ([a0217cf](https://github.com/ringcentral/juno/commit/a0217cf3bc4fdb82198804867f330c5f1449f854))
- **RCUI-510:** [ThemeToken] use combinProps ([9407895](https://github.com/ringcentral/juno/commit/940789533fc5473fc031007cff70d2a1a0eec37d))
- **RCUI-510:** [ThemeToken] use combinProps ([2276a67](https://github.com/ringcentral/juno/commit/2276a670759651e9063db3b574718bbe7b45045c))
- **RCUI-512:** [Downshift] fix a11y issue ([bc2733a](https://github.com/ringcentral/juno/commit/bc2733aa63deb01e29e46329d44b0ad2e506ccd1))
- **RCUI-512:** [Downshift] fix a11y issue listbox back ([67ba3c7](https://github.com/ringcentral/juno/commit/67ba3c7c5d7b1ba92ff58f8070636fb4691c97be))
- **RCUI-512:** [Downshift] fix data-item-last error logic, onPaste only need check when freeSolo ([b5fe933](https://github.com/ringcentral/juno/commit/b5fe93313c6128d701d12db788cbcaa1995c96d2))
- **RCUI-512:** [Downshift] fix freeSolo when Enter ([df75fc4](https://github.com/ringcentral/juno/commit/df75fc42e4173cd1b453f2610c0ba6a87196bcd9))
- **RCUI-512:** [Downshift] remove textarea use onPaste to prevent a11y issue ([a656746](https://github.com/ringcentral/juno/commit/a656746ada6fe79256d771e57da1a4f4c6bcb769))
- **RCUI-512:** [Downshift] setHighlightedIndex outside alway render ([99e06b4](https://github.com/ringcentral/juno/commit/99e06b43e5c900f74cfbe2b6929455fe554c2940))
- **RCUI-514:** [Downshift] fix onMouseDown event stop target and provide id for popper ([d602aa9](https://github.com/ringcentral/juno/commit/d602aa92e94da9653ca7208d3c5be5a438e1b9ae))
- **RCUI-516:** [DeprecatedMessage] change all related deprecated components ([ab94d80](https://github.com/ringcentral/juno/commit/ab94d805affa0d341570dbbe060f1c1a12af2e90))
- **RCUI-516:** [DeprecatedMessage] only when open isShowJunoWarning will register useEffect ([d7a2b36](https://github.com/ringcentral/juno/commit/d7a2b368a1679b462bcc48e7ea1c364c211f7adc))
- **RCUI-517:** [Downshift] fix bug when not open set to defaultHighlightedIndex ([b430ce3](https://github.com/ringcentral/juno/commit/b430ce312f2ec7a957bdebb13dd91cd273ba91e3))
- **RCUI-517:** [Downshift] fix bug when paste non become tags, text change twice issue ([f1b9ad4](https://github.com/ringcentral/juno/commit/f1b9ad4c312c97cce7d97c8aabaf034d1eabc698))
- **RCUI-517:** [Downshift] fix bug when with paste value ([2190d2c](https://github.com/ringcentral/juno/commit/2190d2c4095464caff1b159fa976f0621b74de5e))
- **RCUI-517:** [Downshift] fix highlightedIndex is -1 issue ([726d8f9](https://github.com/ringcentral/juno/commit/726d8f94e3ec9e8b9330e146ebab5d9094d45c96))

## [1.7.0](https://github.com/ringcentral/juno/compare/1.6.0...1.7.0) (2021-04-14)

## Main change:

## 🎉🎉🎉🎉New tokens use in all components🎉🎉🎉🎉🎉

- [Tooltip]: support ignorePointer
- [CombineProps]: fix combineProps logic, more detail please view that comment above `combineProps`
- [CombineClasses]: if you only want to combine classes, please use `combineClasses`

### Features

- **RCUI-445:** [Update new tokens] apply new token ([dc0c8eb](https://github.com/ringcentral/juno/commit/dc0c8eb14080a4d71d3e138f051d4e091ffa857b))
- **RCUI-456:** [Pagination] cleanup Pagination ([1962fc3](https://github.com/ringcentral/juno/commit/1962fc3156fb9c6afb91a66c457514819865a49a))
- **RCUI-479:** [Presence] change attended and unattended icon ([efeb2aa](https://github.com/ringcentral/juno/commit/efeb2aac3b2aa71700aba63614700bd54bbbbf85))
- **RCUI-479:** [Presence] new type avariable and unAvariable ([8ad21f5](https://github.com/ringcentral/juno/commit/8ad21f5e5662cd0ec5791a5219807e41c984d909))
- **RCUI-480:** [combineProps] change logic about group function ([0d9f3d0](https://github.com/ringcentral/juno/commit/0d9f3d0298da19e134b94f33c6635e38025376d7))
- **RCUI-480:** [combineProps] change logic about undefined prop ([eb587c3](https://github.com/ringcentral/juno/commit/eb587c35b8228e8b124c11db25669ae9bb9ebe09))

### Bug Fixes

- **RCUI-:** [Dialog] add miss useRcPortalWindowContext with new dialog ([ff78353](https://github.com/ringcentral/juno/commit/ff78353b38b5397fd758d00881e905cf28ddf949))
- **RCUI-445:** [RcTextPaletteKeys] temp support all color token ([65a3024](https://github.com/ringcentral/juno/commit/65a302420cfa24cd834d3ff0db65e16bd27ec990))
- **RCUI-456:** [Foundation] change overridableStyled method ([d33f332](https://github.com/ringcentral/juno/commit/d33f332f4384c4603fefb152309396372743cbe6))
- **RCUI-462:** [CombineProps] change classes from combineProps to combineClasses ([09f769a](https://github.com/ringcentral/juno/commit/09f769af8d26dd9ead4411885ec1e84a294d5a40))
- **RCUI-462:** [CombineProps] complete combineProps, support full type of object ([6beea3d](https://github.com/ringcentral/juno/commit/6beea3d1cea6499afcfeba52a20f08cd8276daa3))
- **RCUI-462:** [CombineProps] fix combineProps logic with null and undefined check ([e25773c](https://github.com/ringcentral/juno/commit/e25773ca84bba38bfb50e1921f5f3e5b773f6e7d))
- **RCUI-467:** [Select] more example and remove not need svg style assign ([b6a1deb](https://github.com/ringcentral/juno/commit/b6a1deb39586f2cba0eab5c1d36d5ed70d575250))
- **RCUI-469:** [Button, SplitButton] support color for custom all palette color ([4214d57](https://github.com/ringcentral/juno/commit/4214d5716a2f18082ce659f63e917a28d9d9516c))
- **RCUI-469:** [SplitButton] fix className remove issue ([d9ac801](https://github.com/ringcentral/juno/commit/d9ac801508b880b714a644a359a30ab6c94b06f1))
- **RCUI-469:** [SplitButton] fix plainIcon style again ([7f6392d](https://github.com/ringcentral/juno/commit/7f6392d6552a8eea5ccf01ee39c3412401c11323))
- **RCUI-469:** [SplitButton] fix SplitButton style issue ([5d4721c](https://github.com/ringcentral/juno/commit/5d4721cbd4984e1b3e09259a51338c7d62bff269))
- **RCUI-469:** [SplitButton] remove focusWithin color ([cfa4f3e](https://github.com/ringcentral/juno/commit/cfa4f3e6f31d28632585cdab2cd03ecfd931c1d4))
- **RCUI-469:** [SplitButton] remove not need custom style for plain ([69cf5b3](https://github.com/ringcentral/juno/commit/69cf5b3fc6d729132cfdb1f4c63a78ae48ae3243))
- **RCUI-469:** [SplitButton] remove roundSpacingSize, just use size and confirm is that variant come from Button ([70bc995](https://github.com/ringcentral/juno/commit/70bc9952b8c0fa418f2243b78467679a4e7e77ce))
- **RCUI-469:** [SplitButton] use className to replace :last-child selector ([468a003](https://github.com/ringcentral/juno/commit/468a0033af34b55f2aab8c7befe5281dc0cbad2d))
- **RCUI-469:** [Tooltip] support ignorePointer just wrap a span, let user decide when to use by themself ([fbd94aa](https://github.com/ringcentral/juno/commit/fbd94aab06682f51def368889377dfb41b2fb891))
- **RCUI-472:** [Downshift] fix loop onClick issue ([d4eb033](https://github.com/ringcentral/juno/commit/d4eb033441e1ac224067bbf4788e6448f8b72786))
- **RCUI-473:** [ListItem] list item truncated error ([af1b1f3](https://github.com/ringcentral/juno/commit/af1b1f307a2acfeee495756a626c3d5db294adf6))
- **RCUI-482:** [Button] fix Icon can't custom size issue ([b7ec774](https://github.com/ringcentral/juno/commit/b7ec7748a8d6a773cba46b34cd8615acaa429412))
- **RCUI-484:** [Tooltip]: style error classes ([2ce2b0b](https://github.com/ringcentral/juno/commit/2ce2b0b3cd98b7ffb6fc5c1f52bdb8ada626ffa8))
- **RCUI-484:** [Tooltip]: style error with popper custom issue ([5390f95](https://github.com/ringcentral/juno/commit/5390f95130fd85e1d8adef1a90a6e4945b10464e))

## [1.6.0](https://github.com/ringcentral/juno/compare/1.5.1...1.6.0) (2021-04-01)

### New Feature:

1. `Box` component support mui style system and our token use, more detail please view `Box` doc.
2. `Downshift` new Downshift, follow Mui Autocomplete API and follow Angular behavior.
3. `Tooltip` support custom portal target window with `ignorePointer`,

```ts
    If `true`, always have tooltip whether the children `pointer-event: none`,
    that will create a `hidden-mask` element `Portal` cover on whole element to support tooltip.

    that don't auto change hide focus element size when resize,
    if you need resize on your children element need set that `resize`

    ## This value couldn't change after first init

    - `true`: create a `hidden-mask` element `Portal` cover on whole element to support tooltip.
    - `resize`: bind resize with element, auto change `hidden-mask` element size.

```

### ⚠ BREAKING CHANGES

- **RCUI-458:** [Badge] the default `RcBadge` change to `components/Badge`
- **RCUI-454:** [Dialog] deprecated old Dialog
- **RCUI-454:** [Modal] deprecated Modal, please switch to PopupBox
- **RCUI-413:** [Dialer] Cleanup component add focusTarget; pad button background can persist when manual trigger by action ([9e922d7](https://github.com/ringcentral/juno/commit/9e922d77c757c727010517ce03a0538163eb0e95))
- **RCUI-424:** [Downshift] new Downshift, follow Mui Autocomplete API and follow Angular behavior ([f39db78](https://github.com/ringcentral/juno/commit/f39db78d9883a357f2e09115ba54ea5f5983ca14))

### Features

- **RCUI-396:** [ToggleButton, ToggleButtonGroup] new component ToggleButton ([7a8c678](https://github.com/ringcentral/juno/commit/7a8c678a5914fea211f98206dd50fab6787bf7a7))
- **RCUI-408:** [SubMenu] support child item to receive mouseEnter event ([501ce5e](https://github.com/ringcentral/juno/commit/501ce5e3cbdea17400c11b9b6634d30a1262fb75))
- **RCUI-411:** [Chip] cleanup whole Chip ([b79184f](https://github.com/ringcentral/juno/commit/b79184f05fadd465b3ff08c45f7e04f55a40430e))
- **RCUI-413:** [[Dialer] Cleanup component] add focusTarget; pad button background can persist when manual trigger by action ([9e922d7](https://github.com/ringcentral/juno/commit/9e922d77c757c727010517ce03a0538163eb0e95))
- **RCUI-413:** [[Dialer] Cleanup component] change function showDeprecatedInDev name to logInDev ([c74fd6c](https://github.com/ringcentral/juno/commit/c74fd6cd68f09eea73be3de670368c0a75eef451))
- **RCUI-413:** [[Dialer] Cleanup component] clean up dialer ([46af032](https://github.com/ringcentral/juno/commit/46af03205ff3d3ccd669b3429ccb10f1525b9859))
- **RCUI-413:** [[Dialer] Cleanup component] make Dialer can auto fill parent ([89a5df6](https://github.com/ringcentral/juno/commit/89a5df6fe0de32ab2b0e163806f6331ef20e57a8))
- **RCUI-413:** [[Dialer] Cleanup component] prevent error when keyboard prop change ([2cbfcd0](https://github.com/ringcentral/juno/commit/2cbfcd061c81e4a1b5b33f74d0b8acf2f6e1eaaa))
- **RCUI-413:** [[Dialer] Cleanup component] remove focusTarget ([4cd0684](https://github.com/ringcentral/juno/commit/4cd06843a49e8b51c879f190a50cc1d92f9e461a))
- **RCUI-413:** [[Dialer] Cleanup component] remove keyboard event, update storybook ([bf41564](https://github.com/ringcentral/juno/commit/bf41564298e19f8837c2a14bb280e7366c9bb6fc))
- **RCUI-413:** [useDebounce] new method use debounce ([c7db55b](https://github.com/ringcentral/juno/commit/c7db55b070078ad9d50457318faa045ba49ea3d1))
- **RCUI-413:** [useEventListener] custom event target ([e6ee0c2](https://github.com/ringcentral/juno/commit/e6ee0c28133dbb06c4735a8747921ec96046d2de))
- **RCUI-413:** [useEventListener] new method useEventListener ([5869c3e](https://github.com/ringcentral/juno/commit/5869c3e082a96cd5fcd96c31574f3a27bf523902))
- **RCUI-424:** [Downshift] fix a11y issue ([49dc583](https://github.com/ringcentral/juno/commit/49dc5837d448d9f7af4e347e33c0607b09c71a2e))
- **RCUI-424:** [Downshift] support first tag tagFocusable ([671ca5f](https://github.com/ringcentral/juno/commit/671ca5f460f11226d4be00726ac17983362c2ff6))
- **RCUI-424:** [Downshift] support full tagFocusable ([62d4230](https://github.com/ringcentral/juno/commit/62d423010ea4c00af0a444a9764053db8e4d86de))
- **RCUI-424:** [Downshift] support multiple false with can't typing anything ([d1fa64a](https://github.com/ringcentral/juno/commit/d1fa64aa8eefe1290e2065b615d5ab7b7294f57c))
- **RCUI-424:** [Downshift] change filterOptions to not have default filter ([cd68533](https://github.com/ringcentral/juno/commit/cd68533c8c9a9ed8f4e385f3fe3241b2adf5b9f5))
- **RCUI-424:** [Downshift] implement new Downshift with full support deprecated props ([da45ad6](https://github.com/ringcentral/juno/commit/da45ad6c91c7e8259ed2c2b3384f92d1b133f57e))
- **RCUI-424:** [Downshift] prevent escape propagation when menu is open ([af5d86a](https://github.com/ringcentral/juno/commit/af5d86a0dcb3f72b5960e12d4a10ee06b640c78c))
- **RCUI-424:** [Downshift] support autoClose menu when options is zero ([f39db78](https://github.com/ringcentral/juno/commit/f39db78d9883a357f2e09115ba54ea5f5983ca14))
- **RCUI-424:** [Downshift] support outside change downshift inputValue ([bc27b3e](https://github.com/ringcentral/juno/commit/bc27b3ee36f6fa90ab85985ea62ba0f3be80f25a))
- **RCUI-424:** [Foundation] support element type assign for isRcElement ([c9ecbbc](https://github.com/ringcentral/juno/commit/c9ecbbcf984573ec21cbe297f232fbe32bfed889))
- **RCUI-424:** [Loading] new component Loading to replace withLoading hoc ([1bf091a](https://github.com/ringcentral/juno/commit/1bf091a0b331c4a140707a174c4835929dd7ea30))
- **RCUI-424:** [Package] update downshift version to 6.1.0 ([04050a3](https://github.com/ringcentral/juno/commit/04050a3eb6028a5670e46fc9e2096ab8f84229c6))
- **RCUI-424:** [PopupBox] new PopupBox component ([f993787](https://github.com/ringcentral/juno/commit/f99378734f9dcb8d1ea274fd0063a7c054d27d3f))
- **RCUI-446:** [DnD] cleanup RcDragDropContext ([97d6506](https://github.com/ringcentral/juno/commit/97d6506ad2d44880fc8b913eb79c37dd87a8a003))
- **RCUI-446:** [DnD] cleanup RcDraggable ([2d72c7c](https://github.com/ringcentral/juno/commit/2d72c7cab12db34a76dca94d79021c3d430ef009))
- **RCUI-446:** [DnD] cleanup RcDragHandle ([8856b2a](https://github.com/ringcentral/juno/commit/8856b2ac463d1df34d6bac257142fcc0dad7d1e7))
- **RCUI-446:** [DnD] cleanup RcDroppable ([171044b](https://github.com/ringcentral/juno/commit/171044b0bafcf6d0509f84072c3edc9731c087c7))
- **RCUI-446:** [DnD] fix RcDragHandle style ([b70ecb0](https://github.com/ringcentral/juno/commit/b70ecb0433615b1e2230830022345d42712b4da5))
- **RCUI-446:** [DnD] remove utils ([7476d7d](https://github.com/ringcentral/juno/commit/7476d7d621f0b4e9a2e69efe75ee4dc424aed2fa))
- **RCUI-446:** [DnD] update story ([1644ba5](https://github.com/ringcentral/juno/commit/1644ba53f8388f2185038bf3757ff5b68c23e322))
- **RCUI-450:** [Foundation] fix swapArrayLocs for testcafe ([93f4745](https://github.com/ringcentral/juno/commit/93f4745133ea6ae8223cc06f00505680a6ec7411))
- **RCUI-452:** [Box] release base component Box ([424af47](https://github.com/ringcentral/juno/commit/424af472f5a6ecd4a41f954eb38da2bc6596e4ad))
- **RCUI-458:** [Badge] support full Badge component ([9f88ebd](https://github.com/ringcentral/juno/commit/9f88ebdcac345d4259223e062f7d594e49ce85ed))
- **RCUI-461:** [Tooltip] support custom portal target window with ignorePointer ([d7b297d](https://github.com/ringcentral/juno/commit/d7b297db7fadd24ac5d1dbfe2fea73972adfc638))
- **RCUI-461:** [Tooltip] support hiddenMask action and Props ([5612083](https://github.com/ringcentral/juno/commit/5612083f7f765977aa8bbeeaf2048db2294d2bbf))
- **RCUI-461:** [Tooltip] support tooltip ignore children pointer-event none ([6176d40](https://github.com/ringcentral/juno/commit/6176d40ca2ed7a526e7fce7dd49ceec7c64f94e5))

### Bug Fixes

- **RCUI-166:** [[DialPad] dail pad 0 not support long touch to input + on surface] fix ([7630ba8](https://github.com/ringcentral/juno/commit/7630ba88400765d80b3b32d173f396d084be4379))
- **RCUI-398:** [Deprecatede] mark FabButton, FabIconButton, LozengeButton, VirtualizedSelects deprecated ([4301bd9](https://github.com/ringcentral/juno/commit/4301bd92b8c6bcc30241c44628aeee54848e6552))
- **RCUI-398:** [IconButton] share plainIconButtonFocusStyle ([3cb072d](https://github.com/ringcentral/juno/commit/3cb072d2e40041d854cc10ad98863e86c704f837))
- **RCUI-398:** [ToggleButton] fix radius in standard and box focusVisible ([0ec782a](https://github.com/ringcentral/juno/commit/0ec782a7bb9d34fa85cbcb4553a38ad07619be81))
- **RCUI-413:** [[Dialer] Cleanup component] fix DialPadProps ([3235604](https://github.com/ringcentral/juno/commit/32356042c66a180f1ca4d9428c4032f580ee32b9))
- **RCUI-413:** [[Dialer] Cleanup component] fix MenuItem import ([2db334e](https://github.com/ringcentral/juno/commit/2db334e5d7f6cf1d5796f2615b44f2b5f00d990d))
- **RCUI-413:** [[Dialer] Cleanup component] fix some layer ([8bcea14](https://github.com/ringcentral/juno/commit/8bcea1457e63308e198ed0ebe26032761afea345))
- **RCUI-413:** [Dialer] fix some code structure and naming ([9d99dae](https://github.com/ringcentral/juno/commit/9d99dae01a8bb5d05703f6b5f1a7c6888b168fdf))
- **RCUI-413:** [showDeprecatedInDev] change to logInDev ([df2de0c](https://github.com/ringcentral/juno/commit/df2de0c893727d5d384bc877e54855695da68b75))
- **RCUI-413:** [useDebounce] fix useDebounce logic ([3236a3c](https://github.com/ringcentral/juno/commit/3236a3cf70c47ed1cfff65ced63da97c0beb4d11))
- **RCUI-424:** [Accordion] export miss Accordion ([9f4f03a](https://github.com/ringcentral/juno/commit/9f4f03ad4f07a1574b4d867737df3f3723f7b08a))
- **RCUI-424:** [Chip] fix chip border issue ([d69ecc5](https://github.com/ringcentral/juno/commit/d69ecc557b1cda07c532eebd828a1dd6b1d77b2f))
- **RCUI-424:** [Chip] remove multiple class :not selector, that not support in Chrom87 ([05beb2b](https://github.com/ringcentral/juno/commit/05beb2b73e04bc0d50fd1dff746749214984edf5))
- **RCUI-424:** [Dialer] change layout from grid to flex to support IE ([fae0e46](https://github.com/ringcentral/juno/commit/fae0e46065a9b0b2cbe31bef3139a1396cc470e2))
- **RCUI-424:** [Downshift] fix not multiple with FunctionSetSelectedItems not check issue ([507c239](https://github.com/ringcentral/juno/commit/507c2394ac0103863518f54796d8d06f38212476))
- **RCUI-424:** [Downshift] implement create multiple free tags once ([8094ca0](https://github.com/ringcentral/juno/commit/8094ca0e4307e2028e1a1002251d8e30cdd9cfe7))
- **RCUI-424:** [Downshift] add data-suggestion-item-id back ([77ea3e0](https://github.com/ringcentral/juno/commit/77ea3e0b66c0c998a8f682aea950321929429cb9))
- **RCUI-424:** [Downshift] add miss deprecated tag props back ([1367f90](https://github.com/ringcentral/juno/commit/1367f903114c6de26198d565f8a7f1db039ecdd8))
- **RCUI-424:** [Downshift] change backspace in tagFocusable mode, that will focus into last tag ([2445f08](https://github.com/ringcentral/juno/commit/2445f0840e7c3e18ace4886691c6b7c825d79334))
- **RCUI-424:** [Downshift] change downshift freeSolo select item logic ([b97fb8e](https://github.com/ringcentral/juno/commit/b97fb8e261b3dc5fc6b0ea5d142ada2d466891e7))
- **RCUI-424:** [Downshift] change error name with blurOnSelect to autoSelect ([b75c410](https://github.com/ringcentral/juno/commit/b75c410d66ff379f86a873d0400b13725d92eb8b))
- **RCUI-424:** [Downshift] fix backspace when have value in input ([c334cbd](https://github.com/ringcentral/juno/commit/c334cbd16d10993625558743a4fa743b2d6f8514))
- **RCUI-424:** [Downshift] fix error icon color, and disabled hover clearBtn issue ([aec1efd](https://github.com/ringcentral/juno/commit/aec1efd6242c5141f6b9633b3dd2ac521bd92eaa))
- **RCUI-424:** [Downshift] fix highItem non speak issue ([52dc00b](https://github.com/ringcentral/juno/commit/52dc00bde35e3e75e0bb3802de844826e87a498b))
- **RCUI-424:** [Downshift] fix is disabled logic ([b898695](https://github.com/ringcentral/juno/commit/b8986953765d8bef7f24a35bed939b76ab389a94))
- **RCUI-424:** [Downshift] fix item change outside not update issue ([569860f](https://github.com/ringcentral/juno/commit/569860f823a9360a10e0e45d61e1dcf006b9e5cd))
- **RCUI-424:** [Downshift] fix on tag tab not reset ActiveIndex issue ([19b9fef](https://github.com/ringcentral/juno/commit/19b9fefab00b8bb9e8fb7c222c71bf3b5ff2e064))
- **RCUI-424:** [Downshift] fix toggleButton false no clearButton issue ([04e130a](https://github.com/ringcentral/juno/commit/04e130ac2bba610fd0ef73618490038666862992))
- **RCUI-424:** [Downshift] mark deprecated props ([66e2d4d](https://github.com/ringcentral/juno/commit/66e2d4dea65897546323a2d1591a51f80b6ddb49))
- **RCUI-424:** [Downshift] mark downshift deprecated ([91275d7](https://github.com/ringcentral/juno/commit/91275d7ba9ef346c1cc76de273b90babd00e84e1))
- **RCUI-424:** [Downshift] move logic into useDownshift ([ae75f67](https://github.com/ringcentral/juno/commit/ae75f6746d8ab09bae7f89a9d7d398d04ee20a0c))
- **RCUI-424:** [Downshift] remove `autoClose` not autoClose, just only stopPropagation when have filter result ([3ef59f0](https://github.com/ringcentral/juno/commit/3ef59f03adc0a2bcf54c3ab0f80b3060e85a3507))
- **RCUI-424:** [Downshift] remove role in input and tag, that need fix when we can make that speak correctly. ([ed2a7d7](https://github.com/ringcentral/juno/commit/ed2a7d79f9fec7eb4284d0fdddb6a8a23ee42a1f))
- **RCUI-424:** [Downshift] support all chip error when downshift error ([f2e18a2](https://github.com/ringcentral/juno/commit/f2e18a2e57fcabde86d7ad76adb9ba83acb23cb1))
- **RCUI-424:** [Foundation] full EventListener params ([46c4466](https://github.com/ringcentral/juno/commit/46c4466a8c247db531a3a947b7feceb8a1466ee7))
- **RCUI-424:** [Foundation] provide hook useChange that will reset value when listener change ([fe75e14](https://github.com/ringcentral/juno/commit/fe75e14bec90c7cab61c7f400af88980a5e7a419))
- **RCUI-424:** [Foundation] remove not need `isEmail` ([50a072b](https://github.com/ringcentral/juno/commit/50a072b056451d89709fc16ff53042d0fc82ca6e))
- **RCUI-424:** [VirtualizedMenu] change style way ([71be8d3](https://github.com/ringcentral/juno/commit/71be8d37659078db41776d0d7c4f559827577426))
- **RCUI-424:** [withTooltip] rename WithTooltipProps ([8dcb70f](https://github.com/ringcentral/juno/commit/8dcb70f92e5e2c73c706390e50c737aa46d4ec89))
- **RCUI-449:** [VirtualizedMenu] fix a11y issue with items not wrap with listbox ([953ffbe](https://github.com/ringcentral/juno/commit/953ffbed56514ac7fd2838d0bbc5af5a9a5c93db))
- **RCUI-452:** [IconButtonGroup] fix some hint message, and reexport from Buttons ([c96a433](https://github.com/ringcentral/juno/commit/c96a4330f8e5879629b22d3dd2fec802acdcc9ca))
- **RCUI-454:** [Dialog] deprecated old Dialog ([290582f](https://github.com/ringcentral/juno/commit/290582f98ef11485669214b4865a8f2efd9e2529))
- **RCUI-454:** [Dialog] implement new Dialog ([c82a501](https://github.com/ringcentral/juno/commit/c82a501c9d0a0b1b938975a4ff81f81818e91e63))
- **RCUI-454:** [Downshift] support check props is that has forwardRef ([c5db2c7](https://github.com/ringcentral/juno/commit/c5db2c7adbed26a07860374a8cf3b4edb31ca56e))
- **RCUI-454:** [withDelay] fix withDelay Hoc type ([97050bf](https://github.com/ringcentral/juno/commit/97050bf3a04e60b9072fe6c70dc7f06e8f742937))
- **RCUI-454:** [withLoading] remove withLoading Hoc, should use RcLoading directly ([5e6c8c1](https://github.com/ringcentral/juno/commit/5e6c8c1390f7792aea3b31a327195f0fccedac40))
- **RCUI-457:** [SplitButton] fix split button ControlButtonProps, ActionButtonProps combine issue ([ff7cc60](https://github.com/ringcentral/juno/commit/ff7cc60c67fc16460d98ec4c6b59fa29c0cb500d))
- **RCUI-458:** [Avatar] change avatar presence style way with just css ([3600ec2](https://github.com/ringcentral/juno/commit/3600ec2d6fc84c7f86b542f41aaa91e14694edd1))
- **RCUI-458:** [Badge] fix check has manyChar logic ([b596476](https://github.com/ringcentral/juno/commit/b5964763afe8ece9a54832dce7579023b55b8027))
- **RCUI-458:** [Badge] old RcBadge be deprecated ([e66e87a](https://github.com/ringcentral/juno/commit/e66e87a4a2e43ed79fad2aa5d69a8dfe28b2f4e6))
- **RCUI-460:** [Downshift] fix select item very quick issue ([592d72c](https://github.com/ringcentral/juno/commit/592d72c68c3e2a414a067bee14ccbe2858bd4ced))
- **RCUI-461:** [Tooltip] fix useHiddenTooltip logic ([b3918dd](https://github.com/ringcentral/juno/commit/b3918ddc4a11adca44893d7f42318fa316e0f86f))
- **RCUI-461:** [useResizeObserver] fix useResizeObserver logic need, a wrapper for that can get new state ([7ddf891](https://github.com/ringcentral/juno/commit/7ddf8910d5ac6cd5c7b0ad1b65422ede901809ce))
- **RCUI-467:** [Icon] update icon ([750532f](https://github.com/ringcentral/juno/commit/750532fe55e60ab4b4888b9b18d64ccc2b7c57b9))

### [1.5.1](https://github.com/ringcentral/juno/compare/1.5.0...1.5.1) (2021-03-22)

### ⚠ BREAKING CHANGES

- **RCUI-407:** RcMenuItemActionWrapper component deprecated;
- **RCUI-407:** RcMenuItemSubAction component deprecated;
- **RCUI-407:** RcMenuOption component deprecated;

### Features

- **RCUI-365:** [Accessibility][mac] Can't read out the month in real-time when hit Enter to change month in date selector dialog. ([d62729f](https://github.com/ringcentral/juno/commit/d62729f3625bb77a0e66098829cb6fc4192154cd))
- **RCUI-407:** [Aria utils] add @react-aria/utils ([3fa027f](https://github.com/ringcentral/juno/commit/3fa027f2a92431cbe02dc27369d17fbc7bfffe7c))
- **RCUI-407:** [Menu] cleanup the Menu ([a9a7a03](https://github.com/ringcentral/juno/commit/a9a7a03ffa8995f72c0ccb8201c577d8f9a96c5f))
- **RCUI-407:** [Menu] cleanup the Menu ([3224947](https://github.com/ringcentral/juno/commit/32249476545f470d08db93824e623b877f547ea2))
- **RCUI-407:** [Menu] depreacted the storybook ([cf51f26](https://github.com/ringcentral/juno/commit/cf51f26998f56db79afc77365848f72272779d6e))
- **RCUI-407:** [Menu] move to deprecated ([e386444](https://github.com/ringcentral/juno/commit/e386444bc80297dc581552124bc484ff72ec45ab))
- **RCUI-407:** [MenuItem] cleanup the MenuItem ([5f99d65](https://github.com/ringcentral/juno/commit/5f99d65ca21d634661cf5bf0cd0047a7379ad675))
- **RCUI-407:** [MenuList] cleanup the MenuList ([4353196](https://github.com/ringcentral/juno/commit/43531962077a1ee162bd6b368f9b8ee86b6fa939))
- **RCUI-407:** [Popper] component cleanup ([e85d779](https://github.com/ringcentral/juno/commit/e85d779ac29392377495441581e840ce85916274))
- **RCUI-411:** [Slider] cleanup whole Slider and support custom color ([c6d0d9f](https://github.com/ringcentral/juno/commit/c6d0d9f0931ca9aab629f48e2c1e5a7636deac44))
- **RCUI-412:** [Snackbar] cleanup support full size and type with ContentProps pass ([9c9e436](https://github.com/ringcentral/juno/commit/9c9e436953165135ffb8b766e144c2c5b24565a3))
- **RCUI-412:** [SnackbarContent] support auto set action size, when user not set ([668bf81](https://github.com/ringcentral/juno/commit/668bf81546f0f05104d614725bf19ba9e96dcd03))
- **RCUI-413:** [Backdrop] cleanup Backdrop, mark old Backdrop deprecated ([e6b9b64](https://github.com/ringcentral/juno/commit/e6b9b64fcbbe45130ebad71ca1e7464301f978df))
- **RCUI-413:** [Grid] cleanup Grid ([ae00b10](https://github.com/ringcentral/juno/commit/ae00b109159c8b050ff976c67bca834516476bd1))
- **RCUI-413:** [Paper] cleanup Backdrop, mark old Paper deprecated ([4d5fa56](https://github.com/ringcentral/juno/commit/4d5fa56eed18a4146bc2d18995cc40ed501fd3c1))
- **RCUI-416:** [Popover] Component CleanUp ([efdfd48](https://github.com/ringcentral/juno/commit/efdfd487ef9320967f98f8834ff2a5fa83c3297e))
- **RCUI-421:** [Downshift] update RcDownshiftProps to support list to be always opened ([23f9075](https://github.com/ringcentral/juno/commit/23f90752d472722cff23b578bc56e36b9d902788))
- **RCUI-422:** [[RcTabs][updated] Fix the display of More button on undocked window] add TooltipProps into MoreButtonProps ([9a77860](https://github.com/ringcentral/juno/commit/9a778606c370705a5e64ef210edd335ea61fa9fc))
- **RCUI-423:** [ListButtonItem] remove component ([67a18af](https://github.com/ringcentral/juno/commit/67a18af82a124f36219df4beeea6834cde4e1868))
- **RCUI-423:** [ListItemSecondarySpan] remove component ([a450ad6](https://github.com/ringcentral/juno/commit/a450ad6c7e1407940994f3f853e5097b8c826c8b))
- **RCUI-423:** [ListItemSecondaryText] remove component ([bd7d06e](https://github.com/ringcentral/juno/commit/bd7d06e7e01272698c2fe88cc1d50fd787cfada4))
- **RCUI-423:** [ListItemWithHover] remove component ([7c110e3](https://github.com/ringcentral/juno/commit/7c110e3fbf5c37feb721fd1d503a4b83ef5e4128))
- **RCUI-423:** [ListLoading] remove component ([efae4d7](https://github.com/ringcentral/juno/commit/efae4d7172345adddd3faf4f6779151f00650c77))
- **RCUI-423:** [ListNavItem] remove component ([f6a32a0](https://github.com/ringcentral/juno/commit/f6a32a093cf74124df350d9d1d3bb1a3688c540b))
- **RCUI-423:** [MinimizedWindow] remove component ([eed8e3d](https://github.com/ringcentral/juno/commit/eed8e3d7d17b5bcee28dc0002328b8c26e5722fc))
- **RCUI-423:** [VirtualList] add ListLading for virtualList ([8993db1](https://github.com/ringcentral/juno/commit/8993db1b91e169a2cf2e61d3d9d2e7d3ef58ce7f))
- **RCUI-427:** [IconButton] add variant contained type ([e43576a](https://github.com/ringcentral/juno/commit/e43576a8cc76870320f5605312c20229d84a08a9))
- **RCUI-428:** [Downshift] Update Downshift component props ([cef69cb](https://github.com/ringcentral/juno/commit/cef69cb825fda9a3ff3da1ea07545e97dd625505))
- **RCUI-429:** [CoverAvatar] remove component ([8825dd3](https://github.com/ringcentral/juno/commit/8825dd347ae9eab50ada1b28464e7564df1fb66d))
- **RCUI-429:** [Grid] move depreacted path ([3dc8668](https://github.com/ringcentral/juno/commit/3dc866882a49fe5bbb6e1745b09a7f15d9069014))
- **RCUI-429:** [Marker] remove component ([0539313](https://github.com/ringcentral/juno/commit/0539313dd297794f69e48ae6a5e56e053d9ab75b))
- **RCUI-429:** [Responsive] remove component ([8ff252a](https://github.com/ringcentral/juno/commit/8ff252aee81d32b15cd5e0c70f9f60dd89a2144d))
- **RCUI-429:** [SuffixFollowTextField] remove component ([e36864f](https://github.com/ringcentral/juno/commit/e36864f8ba714bab3d898a2382ed0cd5617d54ef))
- **RCUI-429:** [Toast] remove component ([3c75317](https://github.com/ringcentral/juno/commit/3c753171065ffcd391fbcdacff7ed720ac17199a))
- **RCUI-429:** [Toast] remove component and rebase ([24fce39](https://github.com/ringcentral/juno/commit/24fce39bb7c9b645e4c1e719d39c959d2bcf0332))
- **RCUI-429:** [UMI] remove component ([30e01f7](https://github.com/ringcentral/juno/commit/30e01f775684c0bcabe05c2ca6880d8b9c0577bc))
- **RCUI-436:** [Table] new component for table body cell content, support TableHeadCell text align ([c05d946](https://github.com/ringcentral/juno/commit/c05d9468988afcaf3e1184f18369cdd9f6d38c05))
- **RCUI-439:** [SplitButton] add MenuProps ([6425f22](https://github.com/ringcentral/juno/commit/6425f228309dd41d55a3850226dc48d548d3ba5b))

### Bug Fixes

- **RCUI-209:** [Dialog] fix dialog title color ([8d09802](https://github.com/ringcentral/juno/commit/8d09802aea434230a264df43b5a65af7c446238b))
- **RCUI-407:** [Menu] fix component circle import ([58c99da](https://github.com/ringcentral/juno/commit/58c99dacdfad8d2c756f0fe97419adc1ca025c82))
- **RCUI-407:** [Menu] fix export ([4be6ac5](https://github.com/ringcentral/juno/commit/4be6ac57f15a3db666ef1316662079350dcfadd3))
- **RCUI-407:** [Menu] fix some code structure and more storybook ([09a343f](https://github.com/ringcentral/juno/commit/09a343fd62f2493e2028a22b9ba3b3c7f8f7fd76))
- **RCUI-407:** [MenuItemActionWrapper, MenuItemSubAction, MenuOption, VirtualizedSelects, a11yKeyboardCode] mark component deprecated ([5eb0fa9](https://github.com/ringcentral/juno/commit/5eb0fa9d7629dc95dd004dee300f3c2fff781c4f))
- **RCUI-407:** [withTooltip] add miss withTooltip for menu and list ([5a57f13](https://github.com/ringcentral/juno/commit/5a57f134da3ad5e3442dc2ac42e9367c794e7c15))
- **RCUI-409:** [Stepper] cleanup whole Stepper and profermance fix ([f2889ad](https://github.com/ringcentral/juno/commit/f2889ad9f7b889f201c023287c143f26c1133f3c))
- **RCUI-412:** [Snackbar] change default transition animation to slide down ([2a34315](https://github.com/ringcentral/juno/commit/2a343157c88342bd9ab44089ddd6e1dda79777f5))
- **RCUI-412:** [Toast] change toast format and mark deprecated for move back to Jui ([efa9627](https://github.com/ringcentral/juno/commit/efa962737f223a4348494f75fe12a3d0d4274d2a))
- **RCUI-413:** [DetachedWindow] re export DetachedWindow ([98fb95c](https://github.com/ringcentral/juno/commit/98fb95c87d62c556e89b968f1d2b93a62a7231a4))
- **RCUI-413:** [TextField] make TextField can be uncontrol component ([eb21466](https://github.com/ringcentral/juno/commit/eb214668a4ffe4060ef8e5db1b680bed548c792b))
- **RCUI-427:** [IconButton] rebase ([4775832](https://github.com/ringcentral/juno/commit/47758324767797343965b42f43c5234d3cf42cf2))
- **RCUI-427:** [IconButton] use transition create function ([b3b1f50](https://github.com/ringcentral/juno/commit/b3b1f5000b5119ab7c41efdc2ff0cc06f2172777))
- **RCUI-435:** [rcui table bugs] Reimplement header bottom border ([af4581e](https://github.com/ringcentral/juno/commit/af4581e0e9b47134275cf5c52eda5f5ffa2f9399))
- **RCUI-437:** [TextField] try cache clearReactReferencesInNode for IE render issue ([925dac6](https://github.com/ringcentral/juno/commit/925dac6c1d741349dfd3570ca0c8cad4d99b3008))
- **RCUI-439:** [SplitButton] plain onOpen and onClose on SplitButton ([7c0b1f7](https://github.com/ringcentral/juno/commit/7c0b1f71166cddc1bb281f230ca2c23f305641ec))
- **RCUI-440:** [DatePicker] fix below icon with empty margin from TextField issue ([94875e9](https://github.com/ringcentral/juno/commit/94875e99959884ae8c2291919dbb95d546a9781c))
- **RCUI-443:** [Select] never switch control component to uncontrol component in select ([f9ab754](https://github.com/ringcentral/juno/commit/f9ab7549357838fb8be981cfae88f1d9657ca031))

## [1.5.0](https://github.com/ringcentral/juno/compare/1.4.1...1.5.0) (2021-03-04)

### ⚠ BREAKING CHANGES

- **RCUI-243:** [Button] button with icon that spacing will be cut some by design spec
- **RCUI-399:** ListItemIcon has deprecated
- **RCUI-399:** [List] drepacted component ListNavItem ListItemWithHover ListButtonItem ListItemSecondaryText ListItemSecondarySpan ListLoading
- **RCUI-400:** [Downshift] remove deprecated Downshift

### Features

- **RCUI-243:** [Button] refactor whole button and add size with 'xsmall' | 'small'` ([8828a1e](https://github.com/ringcentral/juno/commit/8828a1e1f986e690f9324356dc50764be71a3398))
- **RCUI-388:** [Foundation] export useForkRef ([a05d624](https://github.com/ringcentral/juno/commit/a05d624c1df1f4feef6b4ad694247f07179ac6e3))
- **RCUI-398:** [Foundation] new method swapArrayLocs ([d95e85b](https://github.com/ringcentral/juno/commit/d95e85b0199a20e7a9bd1de27bdf57f1fe47f046))
- **RCUI-398:** [Foundation] pick remove class method in foundation ([84a894c](https://github.com/ringcentral/juno/commit/84a894c260b0146d5c2a9f6af06625cf596e9e71))
- **RCUI-399:** [List] add deprecated warning ([f80da29](https://github.com/ringcentral/juno/commit/f80da2931de6897b0e08920545b4008b91fc5a18))
- **RCUI-399:** [List] cleanup components ([f036d9d](https://github.com/ringcentral/juno/commit/f036d9db306c31b04011f96fc7100830bb7d7c5c))
- **RCUI-399:** [List] cleanup components and story ([2aa384e](https://github.com/ringcentral/juno/commit/2aa384ec4872c6f13e9af4b7237c4e7e6497a7db))
- **RCUI-399:** [List] delete RcList default dense prop ([2e0ec3f](https://github.com/ringcentral/juno/commit/2e0ec3f6ebd39228e2e656d205b92bea282f9689))
- **RCUI-399:** [List] fix import path ([d1e81d4](https://github.com/ringcentral/juno/commit/d1e81d4bfd327e0e8bb3e469a76a4ec1d85835d9))
- **RCUI-399:** [ListItemIcon] refact ListItemIcon ([d966027](https://github.com/ringcentral/juno/commit/d966027fdbdaba8a67ab92b8606a66539df5568a))
- **RCUI-399:** [PlainSelect] fix PlainSelect style import ([3c98445](https://github.com/ringcentral/juno/commit/3c98445bf6cda977d6605ec07e7a555cf34d928d))
- **RCUI-400:** [Chip] add disabled for deleteIcon ([22d0c7b](https://github.com/ringcentral/juno/commit/22d0c7b3488349e4decee5fadf3e0a8525897415))
- **RCUI-400:** [Downshift] add support with downshift disabled and some deprecated code fix ([e6da09b](https://github.com/ringcentral/juno/commit/e6da09b4a8c66d8d35277aeefffeb2ac77f0e06f))
- **RCUI-401:** [Token] change typography display3, display4 default font-weight to 700 ([04b3fa6](https://github.com/ringcentral/juno/commit/04b3fa64bb323b965994c4566b20165e5dbb1818))
- **RCUI-402:** [DetachedWindow] support render in custom portal ([a35b489](https://github.com/ringcentral/juno/commit/a35b489ba46be40fc458a293a1cbdf2695d10f9a))
- **RCUI-402:** [DeteachedWindow] init detached window ([ab4c1ac](https://github.com/ringcentral/juno/commit/ab4c1ac5b0430d3bff05baba5812b1b07575282e))
- **RCUI-402:** [Dialog] support render in custom portal ([6a1877b](https://github.com/ringcentral/juno/commit/6a1877b0e14e2bc3570657caeccc731c1a95907a))
- **RCUI-402:** [Ｍ enu] support render in custom portal ([b78ea85](https://github.com/ringcentral/juno/commit/b78ea8571ebbff3e637593c17a0218ccf3d85451))
- **RCUI-402:** [PortalWindowContext] init PortalWindowContext for share window ([d0c1b31](https://github.com/ringcentral/juno/commit/d0c1b31b7f671ca02816684c27a26267c5747eee))
- **RCUI-402:** [Tooltip] support render in custom portal ([9b1de98](https://github.com/ringcentral/juno/commit/9b1de982b23cba12c3a2348f80abca62ae999069))
- **RCUI-406:** [Accordion] cleanup RcExpansionPanel to new name Accordion ([e3ec29c](https://github.com/ringcentral/juno/commit/e3ec29c1c1927c9f93eaeb4dfe3e3ec3fa47e641))
- **RCUI-406:** [Material Upgrade] upgrade Mui version to 4.11.3 ([5549a3d](https://github.com/ringcentral/juno/commit/5549a3d3e2ed88a3dc94da13d09463d479040682))
- **RCUI-409:** [DetachedWindow] support getWindow method ([0caeb74](https://github.com/ringcentral/juno/commit/0caeb7429c0405bcd61d97be39b24264f153f2d4))

### Bug Fixes

- **RCUI-388:** [Button, SplitButton, PlainSelect, Text] fix ref issue, should switch to innerRef, ref will be change by Tooltip ([9616096](https://github.com/ringcentral/juno/commit/96160966aee4e9ed5daf7244ad0fdbd625f62a08))
- **RCUI-392:** [Button] remove not need class `MuiButton-iconSizeMedium` after view render ([cffad2b](https://github.com/ringcentral/juno/commit/cffad2be78ebfbe46259da8bb5b7fa3e6c703b63))
- **RCUI-392:** [Button] support radius for button, and add keepElevation when user want to keep contained button elevation in normal state ([a065f0c](https://github.com/ringcentral/juno/commit/a065f0c5f7130592cb5fc67255d920d10d0b8899))
- **RCUI-396:** [Button] rename switch method to getButtonIconSize ([3750ad7](https://github.com/ringcentral/juno/commit/3750ad71fd9187b78c87439b07c2d7a8adf7e95e))
- **RCUI-396:** [RoundButton] deprecated round button ([38a1406](https://github.com/ringcentral/juno/commit/38a1406ac53428b2854378ebf1c36b9554d8806d))
- **RCUI-398:** [Foundation] remove not need ' ' in content ([1a5c29b](https://github.com/ringcentral/juno/commit/1a5c29b6488472640c080e4c013028748fff3343))
- **RCUI-399:** [Lis] some coding fix and fix ripple color when set baseColor ([64a9c2d](https://github.com/ringcentral/juno/commit/64a9c2dffba26bef4daa2e8af2016db8de46c1a2))
- **RCUI-399:** [ListItem] fix listItem with controls style ([64e1e2f](https://github.com/ringcentral/juno/commit/64e1e2f14ca29f38d9cbb980ef5fcea4aa9e493f))
- **RCUI-399:** [ListItem] update storybook ([beecefb](https://github.com/ringcentral/juno/commit/beecefb9a078badae46e58c1b35b8ea53ca42790))
- **RCUI-399:** [ListItemText] fix primaryProps/secondaryProps ([241ca13](https://github.com/ringcentral/juno/commit/241ca13cbfcf2f3b145bd962dde50ac0537e42ad))
- **RCUI-399:** [ListSubheader] fix gutter inset prop style ([7ba6e31](https://github.com/ringcentral/juno/commit/7ba6e31c6d486808c41e97da528a29a9e8c0885d))
- **RCUI-400:** [Downshift] remove deprecated Downshift ([b596cd4](https://github.com/ringcentral/juno/commit/b596cd4b37c4b4bca5c052e4285796d720fa1f81))
- **RCUI-403:** [CheckBox, Radio] change ripple apply size way with padding, avoid set display issue with that element ([a5a72c9](https://github.com/ringcentral/juno/commit/a5a72c9fa3d9189f921c92459cbf10b9cf5b3a64))
- **RCUI-404:** [Downshift] ] fix can't select suggestion item when use Chinese pinyin language input ([c80599d](https://github.com/ringcentral/juno/commit/c80599d89d0c987ef6f77eae9af40b216f9d3a3e))
- **RCUI-404:** [Downshift] ] remove select highlighted; fix can't select first suggestion item when use Chinese ([1b03322](https://github.com/ringcentral/juno/commit/1b03322eb1a3db4a1bd48236c800e990c942eb49))
- **RCUI-405:** [Select] fix number zero issue ([f918924](https://github.com/ringcentral/juno/commit/f91892417d3a654709db38e4910c917c83ffc9b2))
- **RCUI-405:** [Select] fix select with non label margin issue, and default width same as TextField ([30521a7](https://github.com/ringcentral/juno/commit/30521a7dc492debe8002d2236af918412063a9bb))
- **RCUI-405:** [Textarea] fix more pick issue with Textarea ([9c63956](https://github.com/ringcentral/juno/commit/9c639561a6bef56cfba8bb4f3e4e55289359309c))
- **RCUI-406:** [ExpansionPanel] fix style not change issue ([823d935](https://github.com/ringcentral/juno/commit/823d935fb1efeba90858fc15c775df07d76bf794))
- **RCUI-406:** [ExpansionPanel] mark ExpansionPanel as deprecated ([1fdc366](https://github.com/ringcentral/juno/commit/1fdc3661662a29ec27f1a2004564123f60f234bd))
- **RCUI-409:** [Accordion] fix default arrow direct ([d324778](https://github.com/ringcentral/juno/commit/d3247783f10fc76266d1dce68a1424dd9686f983))
- **RCUI-409:** [Accordion] support expandIcon type `false` ([edcd4b2](https://github.com/ringcentral/juno/commit/edcd4b2ee81ae635f43a66cc23483141cf34cfc0))

### [1.4.1](https://github.com/ringcentral/juno/compare/1.4.0...1.4.1) (2021-02-25)

### ⚠ BREAKING CHANGES

- **RCUI-392:** [IconButton] remove `tiny`, please use `xsmall`
- **RCUI-392:** [IconButton] `xxxlarge` size follow RcIcon size, no longer with 48px `IconButton`
- **RCUI-243:** [Icon] size cleanup `xlarge => xxlarge` `xxlarge => xxxlarge`
- **RCUI-243:** [Icon] not use fill to change that below icon color, just use color to set that

### Features

- **RCUI-243:** [FormContext] provide useRcFormContext for work with RcFormContext ([6b8adf3](https://github.com/ringcentral/juno/commit/6b8adf351286e1df714fab281d2fbd59c9487510))
- **RCUI-243:** [Icon] refactor whole icon not use fill to change that below icon color ([c76cfff](https://github.com/ringcentral/juno/commit/c76cfff2686a851c7c5b3cc24a3355e8964d4480))
- **RCUI-367:** [VirtualizedList] Keep scrollTop after switch native/custom scrollbar ([c7c9a54](https://github.com/ringcentral/juno/commit/c7c9a542564b015098bd390525a96f08213866b7))
- **RCUI-380:** [SplitButton] implement control button size with RcIconButton ([aef010a](https://github.com/ringcentral/juno/commit/aef010a2bda8a736f16b22dd66b52e58bd338e6c))
- **RCUI-380:** [SplitButton] implement SplitButton round spacing size ([42528f2](https://github.com/ringcentral/juno/commit/42528f2080619080078b64e118c5e410b0ce894b))
- **RCUI-388:** [Foundation] support size for fakeBorder ([a8e2348](https://github.com/ringcentral/juno/commit/a8e23481eb9d7227ced231c25906cbdc2b6c3a6c))
- **RCUI-388:** [OutlineTextField, TextField, BorderLessTextField] group TextField together, full support all with those just style different components ([6c71c2c](https://github.com/ringcentral/juno/commit/6c71c2c0567d1ee9a7dae23c67ca01445047cfed))
- **RCUI-396:** [Icon] support switch loading size with Icon size ([5b7edf3](https://github.com/ringcentral/juno/commit/5b7edf30bd9d570e034151cf0592aad509ccb995))
- **RCUI-396:** [IconButtonGroup] new component IconButtonGroup for replace ButtonBar ([8be4cea](https://github.com/ringcentral/juno/commit/8be4cea7c9908bcc77a8ae257ae9b7c5e2920048))

### Bug Fixes

- **RCUI-243:** [IconButton] RcIcon change related style fix ([cce6db8](https://github.com/ringcentral/juno/commit/cce6db8324172f26f77a6c726839fc12a98e8a59))
- **RCUI-243:** [Picker] RcIcon change related style fix ([44de596](https://github.com/ringcentral/juno/commit/44de5963f8fa3f236ca7bf90c50df4bc095eecb8))
- **RCUI-243:** [Radio] release radio ([9c7b900](https://github.com/ringcentral/juno/commit/9c7b900ad7ddf454dac08b3882841afcd3e658f2))
- **RCUI-243:** [Rating] switch to new structure style ([312184c](https://github.com/ringcentral/juno/commit/312184ce7ea8436b2a599f3729e858852385586c))
- **RCUI-282:** [Package] not lock material ui version in juno, only lock in inner release ([8fafca6](https://github.com/ringcentral/juno/commit/8fafca68590bbb9746b18ed6e21e9c6b718a50d3))
- **RCUI-377:** [Menu] remove enableCloseMenuWhenItemClicked ([23fc407](https://github.com/ringcentral/juno/commit/23fc4071fb239247f3713b57e03e2db1960cfaa1))
- **RCUI-377:** [Scss] fix miss dark scss ([798a773](https://github.com/ringcentral/juno/commit/798a77334baee7d19f16c9460edb54ca958c34b4))
- **RCUI-377:** [Scss] fix theme issue ([be889bb](https://github.com/ringcentral/juno/commit/be889bb0cb06606342f6cba38b2b9800eeb48b40))
- **RCUI-377:** [Tooltip] remove all injectGlobalStyle ([f52e27a](https://github.com/ringcentral/juno/commit/f52e27a3060c814508c8eb713b6fc3828ebebdbe))
- **RCUI-381:** [Foundation] try catch with setOpacity ([c222e16](https://github.com/ringcentral/juno/commit/c222e16530d07447864120baf158c0627e4af99e))
- **RCUI-381:** [Select] pick Select prop outside make that easy to understand ([89a4a41](https://github.com/ringcentral/juno/commit/89a4a41b0607d97125d0b8a7b2af9b0a6b6d6d19))
- **RCUI-381:** [Table] export RcTableRow ([e3708cd](https://github.com/ringcentral/juno/commit/e3708cdb25290ba3fedb56f2e94eb9677800a973))
- **RCUI-381:** [Text] change useRcTooltip hide tooltip logic ([3ef5bb3](https://github.com/ringcentral/juno/commit/3ef5bb3b07032d94c1d721854173e863e72d0c11))
- **RCUI-381:** [Text] combine outside props ([151ec3a](https://github.com/ringcentral/juno/commit/151ec3a0b6156c4c989c206f906d222b5695bca8))
- **RCUI-381:** [Typography, Text] fix titleWhenOverflow and miss withTooltip HoC ([34e7894](https://github.com/ringcentral/juno/commit/34e78941dca98ac73bf1b8b55d383e8b1211299d))
- **RCUI-382:** [RcAudioPlayer] fix storybook ([7feaed5](https://github.com/ringcentral/juno/commit/7feaed5a269c40a974af8f67093e43b66e93aec2))
- **RCUI-388:** [Checkbox] move checkbox to forms ([21aa5c2](https://github.com/ringcentral/juno/commit/21aa5c2271699b24b02edb03fd0e10c2a57d210d))
- **RCUI-388:** [Downshift] mark Downshift deprecated ([35cef33](https://github.com/ringcentral/juno/commit/35cef336a6c3390440073cc9108e42b1ed9e7484))
- **RCUI-388:** [Foundation] rename ReturnType to PaletteReturnType ([24243f1](https://github.com/ringcentral/juno/commit/24243f1dfe6eb55ef190a9cca7f226a54022ea10))
- **RCUI-388:** [Icon] update icon ([f757c0f](https://github.com/ringcentral/juno/commit/f757c0f9d79beb3f075dc7a6e3a101fdc5d16326))
- **RCUI-388:** [Picker] picker with clearLabel tooltip float issue ([a9109e2](https://github.com/ringcentral/juno/commit/a9109e2136a2a0db43ae3f0c6551e336dca8f3fa))
- **RCUI-388:** [Select] imgrate to new TextField ([4acfd78](https://github.com/ringcentral/juno/commit/4acfd78425865bc03cfed529cd77ca07ff8cdd56))
- **RCUI-388:** [Select] mark BoxSelect, LineSelect deprecated ([4aff935](https://github.com/ringcentral/juno/commit/4aff9354e0d4c2070add9be1a57927b98642f881))
- **RCUI-388:** [Switch, Checkbox] release Checkbox and Switch ([5aa1fac](https://github.com/ringcentral/juno/commit/5aa1facafb841bf081b331074424cb04f5b712b1))
- **RCUI-388:** [Switch] move Switch to forms ([34a1302](https://github.com/ringcentral/juno/commit/34a130229575cbe44c020e66c073aab7a231ef26))
- **RCUI-388:** [Text] mark deprecated Text related component Text deprecated ([04b25c5](https://github.com/ringcentral/juno/commit/04b25c5a2ee303d766598f4b2557982b7ce17d74))
- **RCUI-392:** [RcIconButton] sync IconButton size with Icon ([ac65b94](https://github.com/ringcentral/juno/commit/ac65b94a10601c1f5a659ae3cd4f6fcd3cd0b36f))
- **RCUI-392:** [Theme] correct theme with RcTheme type ([3fd3abe](https://github.com/ringcentral/juno/commit/3fd3abee2a94a954c79257630898b00088b35428))
- **RCUI-395:** [DatePicker, TimePicker] release picker, wrapper with styled ([bf1a057](https://github.com/ringcentral/juno/commit/bf1a0573d42b066ae56981fc71a73298af8e4085))
- **RCUI-396:** [ButtonBar] mark deprecated ([eed8b8a](https://github.com/ringcentral/juno/commit/eed8b8a9607db273cec1b20a733cad7d6ee7f993))
- **RCUI-396:** [Checkbox] change iconSize type to RcIconButtonSize, exclude `inherit` ([cf2b5c4](https://github.com/ringcentral/juno/commit/cf2b5c4dbf9dcd9a4937536102926165c23db264))
- **RCUI-396:** [CheckedStyles] remove `inherit` in size list ([d8e7fcc](https://github.com/ringcentral/juno/commit/d8e7fccbe6426f037fe7f6092e2830c3526891e8))
- **RCUI-396:** [Icon] add check deprecated iconColorProp back ([01cf2ed](https://github.com/ringcentral/juno/commit/01cf2ed5e02caab0f35b5a934149462d321baa6f))
- **RCUI-396:** [Picker] remove clearLabel props ([4d0446e](https://github.com/ringcentral/juno/commit/4d0446e0cfcf6287308c8518b59dcb265dfb4054))
- **RCUI-396:** [Radio] use Mui default RadioIconButton and custom style with that. ([b6e941d](https://github.com/ringcentral/juno/commit/b6e941df70be54e31b0d9ffc8bbf9492ca4d53ab))
- **RCUI-396:** [TextField] deprecated clearLabel, should use clearButtonProps replace that ([2a56187](https://github.com/ringcentral/juno/commit/2a56187a7d125f888674a43a905dd9dd063aafdf))

## [1.4.0](https://github.com/ringcentral/juno/compare/1.3.2...1.4.0) (2021-02-01)

### Main change:

1. Support `highContrast` theme for components

2. `Typography`

- Cleanup typography for type and logic, only support text `rc-token` related `props`
- Support `Weight` for set `font-weight` `normal(400)` or `bold(700)`
- variant mapping default component

```ts
 display4: 'h1',
 display3: 'h2',
 display2: 'h3',
 display1: 'h4',
 headline: 'h5',
 headline2: 'h5',
 title2: 'h6',
 title1: 'h6',
 subheading2: 'h6',
 subheading1: 'h6',
 body2: 'p',
 body1: 'p',
 caption2: 'p',
 caption1: 'p',
 inherit: 'p',
```

3. `Text`

- deprecated `TextWithHighlight`, `TextWithLink`, `TextWithTooltip`, please follow guideline to migrate
- Cleanup `Text`, support `flexFull`, `highlight`, `titleWhenOverflow`
- `titleWhenOverflow` implement with `ResizeObserver`, that response time is `200ms`

4. `Select`

- New Select for full a11y support, migrate `RcBoxSelect`, `RcLineSelect` to `Select` with `variant`
- support `virtualize` with `VirtualizeMenu`, migrate `RcVirtualizedBoxSelect`, `RcVirtualizedLineSelect` with `virtualize`

5. `PlainSelect`

- New Select component, for use select like button.

6. `TimePicker`

- Cleanup picker, full support a11y, and lot of bug fixed.

7. `DatePicker`

- Cleanup picker, full support a11y, and lot of bug fixed.

8. `Link`

- new prop `variant` for custom link size, please migrate `size` to `variant`

9. `Tooltip`

- remove global style inject

10. `IconButton`

- cleanup whole `IconButton` with `RcButtonBase`

11. `Switch`

- cleanup whole `Switch`, fix `overflow` issue when have `label` and `placement` is `end`

12. `Alert`

- cleanup
- support icon props

13. `SnackbarContent` `SnackbarAction`

- cleanup

---

more detail, please view changelog below.

### ⚠ BREAKING CHANGES

- **RCUI-180:** [Text] deprecated all old RcText component
- **RCUI-180:** [ellipsis] remove not need word-break: break-word
- **RCUI-367:** [PlusButton] remove this component
- **RCUI-294:** [Select] LineSelect, BoxSelect is deprecated, please use `RcSelect` component with `variant`
- **RCUI-234:** [Button] when user pass RcIcon in children, that margin right will be remove

### Features

- **RCUI-180:** [hook] implement useResizeObserver ([8fa0175](https://github.com/ringcentral/juno/commit/8fa01753bef8ba2e9361e6104625b9d0253ed526))
- **RCUI-180:** [Link] add props variant for just typography use, deprecated size, that confused ([6f37ec7](https://github.com/ringcentral/juno/commit/6f37ec7f4e81f1e20c7174982f9d79eb333d4938))
- **RCUI-180:** [Text] implement new version Text with full type support ([78aba8c](https://github.com/ringcentral/juno/commit/78aba8c43f0f8c6365dc39ec751075bce4488154))
- **RCUI-180:** [Typography] implement full typography with correct type ([92e771a](https://github.com/ringcentral/juno/commit/92e771a28bec49d6fb2663e0143bcf85aab7b699))
- **RCUI-252:** [Select] init new Select support full vl and select ([3bfcccc](https://github.com/ringcentral/juno/commit/3bfccccb573bb176b30f68d9af146179fadd56e3))
- **RCUI-294:** [ListItemIcon] support color with listItemIcon ([4ab8255](https://github.com/ringcentral/juno/commit/4ab825569dd0766aa994ab05c7451993a8b91a59))
- **RCUI-294:** [PlainSelect] init plainSelect ([c93a5bf](https://github.com/ringcentral/juno/commit/c93a5bf1cb438dad93466b9987d911d4bee3340f))
- **RCUI-330:** [Accessibility] Focus on Year selector dialog shouldn't read out extra years & Windows: Focus on the date shouldn't read out the date twice ([ef3c6cc](https://github.com/ringcentral/juno/commit/ef3c6cc210cc37817942f32a5bb993bd34416f4e))
- **RCUI-351:** [Theme] update theme token ([4fba5e5](https://github.com/ringcentral/juno/commit/4fba5e5e67876d233f0c7c20634f94feeafdfd05))
- **RCUI-351:** [Tooltip] clean up styled ([aba370f](https://github.com/ringcentral/juno/commit/aba370f2207c463324b540aa9ee3d11c8cc1d58a))
- **RCUI-351:** [Tooltip] remove GlobalTooltipStyle ([a659e28](https://github.com/ringcentral/juno/commit/a659e280d4b108be6b089432066eb623b3651b24))
- **RCUI-356:** [fakeBorder] support to custom 'inset' ([3375a65](https://github.com/ringcentral/juno/commit/3375a6566f9d933a2ebb6fc569a88bac30407317))
- **RCUI-358:** [RcLink] use \$color-text-link ([e690e59](https://github.com/ringcentral/juno/commit/e690e59c78eb780a83c131bb5790fc25f1c705ec))
- **RCUI-363:** [RcDownshift] enableAutoTransform improvement ([faf8d3e](https://github.com/ringcentral/juno/commit/faf8d3e25ff941649c4beb300ae6e243a29597e1))
- **RCUI-367:** [Chip, TextField, AudioAction] swith inner tooltipTitle to title ([0b2395d](https://github.com/ringcentral/juno/commit/0b2395dd06bd7ec9a056bc8a176e830282f394f0))
- **RCUI-367:** [IconButton] refactor whole IconButton with ButtonBase and fix a lot of style issue, mark this release ([e79cb62](https://github.com/ringcentral/juno/commit/e79cb62c911cd6c4d8e640e92abc098be839f03b))
- **RCUI-377:** [RcFormControlLabel] cleanup component ([a7e5671](https://github.com/ringcentral/juno/commit/a7e567131a1939997ec56c0da0e04d768aa1f56c))
- **RCUI-377:** [RcSwitch] cleanup component ([1f0112c](https://github.com/ringcentral/juno/commit/1f0112c8ea8cb54946f2eab0a821955a2d93139e))

### Bug Fixes

- **RCUI-180:** [Button] fix button token use ([47482da](https://github.com/ringcentral/juno/commit/47482daf1ce124a2c0de59f1d8c7e396bfe87922))
- **RCUI-180:** [Foundation] fix type with only apply for our typography ([c0cd0fb](https://github.com/ringcentral/juno/commit/c0cd0fb695e42cb6acb23f4970d02295a0dfd883))
- **RCUI-180:** [Foundation] remove not need break-word in ellipsis ([c368f25](https://github.com/ringcentral/juno/commit/c368f254af22baa434352e0384c7d09b86c0772d))
- **RCUI-180:** [InlineEditable] change variant to correct typographyKeys ([ab79890](https://github.com/ringcentral/juno/commit/ab798906e1f0aa9f0a430438de522180dfd504f9))
- **RCUI-180:** [Link] fix link style and logic, that only be click when press Enter ([1edbb06](https://github.com/ringcentral/juno/commit/1edbb06fa2e10b9104d5fd38ba23ba6079825ebd))
- **RCUI-180:** [Text] deprecated all old RcText component ([2d4ed33](https://github.com/ringcentral/juno/commit/2d4ed33b7301f5f7e20af9bd0e4e037f1fbf5fd7))
- **RCUI-180:** [TimePicker] fix timePicker token when medium ([982e60c](https://github.com/ringcentral/juno/commit/982e60c3d57f67dcc7222171152c5bdf1d2b5f18))
- **RCUI-180:** [Token] add miss token headline2 ([4400aba](https://github.com/ringcentral/juno/commit/4400aba243d7c33a3fd84f6b96b449c1cc8dfb99))
- **RCUI-180:** [Token] remove not need subheading3 ([c605b41](https://github.com/ringcentral/juno/commit/c605b412eb62a59c2862de483ea7b34b0d63350e))
- **RCUI-180:** [Typography] switch old typography as deparcated ([e6ea172](https://github.com/ringcentral/juno/commit/e6ea1726f929d1b3d3feba8cf3c96adbd17aa816))
- **RCUI-234:** [Button] change button with icon will effect below all RcIcon margin issue ([ca5b2a9](https://github.com/ringcentral/juno/commit/ca5b2a9c126e35afffc044566187858b1c183c22))
- **RCUI-234:** [Button] pre cleanup refactor ([c9a972c](https://github.com/ringcentral/juno/commit/c9a972c09ff70242cebf746764031ae130afdfd2))
- **RCUI-234:** [CombineProps] fix combine props logic with only stop event pass with stop propagation ([dae4fba](https://github.com/ringcentral/juno/commit/dae4fba7997a4f6988c532a99c458448ee904191))
- **RCUI-234:** [SplitButton] fix style with button remove two layer cause issue ([e8de3cc](https://github.com/ringcentral/juno/commit/e8de3ccb74d312b770c4c4ca4569fa91b142ccd2))
- **RCUI-252:** [RegionSelect] remove not need RegionSelect ([653fb29](https://github.com/ringcentral/juno/commit/653fb2996457eff4e59490b53d2dba43cb97f1a5))
- **RCUI-252:** [VirtualizedMenu] fix VirtualizedMenu code and logic ([aa43d1c](https://github.com/ringcentral/juno/commit/aa43d1c38aeaec863249c8f34d1085b402cae754))
- **RCUI-294:** [LineSelect, BoxSelect] mark original storybook and components deprecated ([68849e2](https://github.com/ringcentral/juno/commit/68849e2e7593f656eed55c4251cfe86c3c49c753))
- **RCUI-294:** [Plain] refactor with style ([46be2a0](https://github.com/ringcentral/juno/commit/46be2a082c51e34e22898e64cce5e13502639819))
- **RCUI-294:** [Plain] update naming ([7352dac](https://github.com/ringcentral/juno/commit/7352dacc7eda8c10d956b08d32c4790e2a5953ad))
- **RCUI-294:** [TextField] remove not need two layer class name ([c1842dc](https://github.com/ringcentral/juno/commit/c1842dc6f0ff3bb72a1469e8c5abf1e2c2743180))
- **RCUI-344:** [DatePicker] fix date picker range overflow issue ([5b4ec38](https://github.com/ringcentral/juno/commit/5b4ec384754b2c5f6deaa0c5b0a16b3b8b1842bb))
- **RCUI-351:** [Alert] update with new file structure ([3b98998](https://github.com/ringcentral/juno/commit/3b98998a210ea0ca3e30a51442d0721e9df2263f))
- **RCUI-351:** [Divider] change divider to hr ([1005986](https://github.com/ringcentral/juno/commit/1005986fbef753bd5e2b2ce826ce4a849e5e6fc5))
- **RCUI-351:** [Foundation] rename cssValue to px ([296eb5e](https://github.com/ringcentral/juno/commit/296eb5ec7046c96de44f109921b13c00c57b8f20))
- **RCUI-351:** [Icon] memo icon for pure render component, and remove width ([fd0354e](https://github.com/ringcentral/juno/commit/fd0354e1656b73e37f67b877f62ea072172c689e))
- **RCUI-351:** [Tooltip] pick className only pass into popper ([a3ec0e2](https://github.com/ringcentral/juno/commit/a3ec0e208a5804166f9efddd35cbd56683e92604))
- **RCUI-357:** [Downshift] enableAutoTransform should emit when textField blur and have suggestion list ([69459e1](https://github.com/ringcentral/juno/commit/69459e1fee85f68d04ad14574dbfd41fcfcdd218))
- **RCUI-359:** [ButtonBar] add handleOnKeyDown. should follow isStopPropagation, also keep keyup work ([c7058aa](https://github.com/ringcentral/juno/commit/c7058aa852f754b856c6f5a1628e8bccda5acb14))
- **RCUI-360:** [TextField] color of underline to be icon.dark when hover ([4ff30bc](https://github.com/ringcentral/juno/commit/4ff30bc96259539932d7dcb02071aa25fe3d1f72))
- **RCUI-364:** [useFocusHelper] support outside setFousedIndex ([7574d66](https://github.com/ringcentral/juno/commit/7574d6636220653722c372a7b93349e12abde012))
- **RCUI-365:** [[Accessibility][mac]] Can't read out the month in real-time when hit Enter to change month in date selector dialog. ([e9025a1](https://github.com/ringcentral/juno/commit/e9025a16cb389a4c83f65ad41ea2f3d9866d8cf2))
- **RCUI-366:** [Snackbar] update calendar text selected color ([0a327d1](https://github.com/ringcentral/juno/commit/0a327d118541a58d10cb7aa74084cebbe8d2ba04))
- **RCUI-366:** [Snackbar] update warning text color ([c0638db](https://github.com/ringcentral/juno/commit/c0638db593da556ebc7f26cd7c4d61aa5ef20961))
- **RCUI-367:** [ButtonBase] change buttonBase props with ComponentProps ([22dd1f7](https://github.com/ringcentral/juno/commit/22dd1f7569a2dcb0a097d6d1912ce7d933e0e269))
- **RCUI-367:** [Deprecated] mark some theme method deprecated ([310e329](https://github.com/ringcentral/juno/commit/310e32981d052db2483464e591bdbaa1896382ad))
- **RCUI-367:** [IconButton] deprecated props fix ([f123649](https://github.com/ringcentral/juno/commit/f1236493f288d9b1f881ff82a4c101f0ed804b39))
- **RCUI-367:** [IconButton] refactor with styled method ([89153d6](https://github.com/ringcentral/juno/commit/89153d65e1fc15bf88fad63584cc93bef3d57352))
- **RCUI-367:** [PlusButton] remove not need PlusButton ([a86e9d7](https://github.com/ringcentral/juno/commit/a86e9d7e1a79d263eedbd0f65a0eb1a00dd476e6))
- **RCUI-367:** [RcPlusButton] mark RcPlusButton deprecated ([476614b](https://github.com/ringcentral/juno/commit/476614be8a93821f58fd2634595827d32449f49e))
- **RCUI-367:** [SplitButton] fix style with setOpaciaty ([0d53afe](https://github.com/ringcentral/juno/commit/0d53afe9bebad48bb254e17ab91cbbc2a9ab836e))
- **RCUI-369:** [VirtualizedBoxSelect] fix disabled style ([a1d8e3b](https://github.com/ringcentral/juno/commit/a1d8e3bedc93836b21906c2967e86dd2a1119ef9))
- **RCUI-370:** [Opacity] swith tinycolor2 to mui method ([ee326fa](https://github.com/ringcentral/juno/commit/ee326fa5099ee8ec54fb58bf40b68e5fab6ef717))
- **RCUI-371:** [Deprecated] mark activeOpacity and disabledOpacity deprecated ([878a35d](https://github.com/ringcentral/juno/commit/878a35d9ab598be218b2263cd7515ff39350c48b))
- **RCUI-371:** [SnackbarAction] cleanup snackbar action code style and props ([0ff6cad](https://github.com/ringcentral/juno/commit/0ff6cad879126b828cc917bfdd33ec813602a98b))
- **RCUI-371:** [SnackbarContent] cleanup snackbar content code style and props ([161366a](https://github.com/ringcentral/juno/commit/161366a711cb1f79bd554679339ffffd14221005))
- **RCUI-372:** [Accessibility][mac] Revert Can't read out the month in real-time when hit Enter to change month in date selector dialog. ([b0871a1](https://github.com/ringcentral/juno/commit/b0871a1390dc1d1d9035fb5ec0661aa73dd3cb5e))
- **RCUI-373:** [Select] fix disabled style when have selected item ([1a3ecf1](https://github.com/ringcentral/juno/commit/1a3ecf157342bba479fd249b1d471e7150db3139))
- **RCUI-375:** [SplitButton] fix style with injectFirst ([aa22352](https://github.com/ringcentral/juno/commit/aa223520588af6d193683f2ebf6873ee5230353a))
- **RCUI-377:** [Classes] fix omit type ([4539bea](https://github.com/ringcentral/juno/commit/4539bea32b4054b86fe85f7aa2b0771f12537853))
- **RCUI-377:** [Switch] fix disabled color append issue and some forwardRef ([442ae3a](https://github.com/ringcentral/juno/commit/442ae3a04ed9600ce4756fa449092f4f5b03352c))

### [1.3.2](https://github.com/ringcentral/juno/compare/1.3.1...1.3.2) (2021-01-20)

### ⚠ BREAKING CHANGES

- **RCUI-337:** [Icon] remove icon position: relative style

### Features

- **RCUI-295:** [DnD] implement new component Drag and drop ([5914754](https://github.com/ringcentral/juno/commit/5914754bc0bb97fa09f565463311314bc23b5317))
- **RCUI-324:** [Chip][button] cleanup work for High Contrast Theme ([1b1ca1d](https://github.com/ringcentral/juno/commit/1b1ca1dffee1974bb6e4a27f7db2e336e731ca5c))
- **RCUI-327:** [Divider] support a11y with divider role ([517f439](https://github.com/ringcentral/juno/commit/517f4390a8f8e1ebef7d30a0944cb3a4ffd90d5f))
- **RCUI-328:** [[Date picker][deque report]] support screenreader ([b46b89b](https://github.com/ringcentral/juno/commit/b46b89ba8bcf189ac5de5db7613e75be4ff89f4e))
- **RCUI-334:** [TimePicker][deque report] add aria-label to fix deque issues ([7f8a72a](https://github.com/ringcentral/juno/commit/7f8a72a2fb8769c748b08198ea348c65cff4e73e))
- **RCUI-335:** [Link] remove link mocks folder ([540df8d](https://github.com/ringcentral/juno/commit/540df8d72c7d5495bd200a6aafed8a33a5a80248))
- **RCUI-336:** [usePortal] add usePortal hook ([fc358ce](https://github.com/ringcentral/juno/commit/fc358ce1771407c341c10328a6801e42bc163a46))
- **RCUI-340:** [Scss] update scss file with token ([2e1d523](https://github.com/ringcentral/juno/commit/2e1d523d8b14e2fc5dc7510b30b204f474df22cb))
- **RCUI-340:** [Update token] Update tokens in JUNO ([4e4a5c7](https://github.com/ringcentral/juno/commit/4e4a5c7bd645b8f93040d40637efb3335d01443d))
- **RCUI-342:** [Form] init form relate component, FormHelperText, InputLabel ([087ea4b](https://github.com/ringcentral/juno/commit/087ea4bc8d5511ce9fcb41d252f6e673a6894f30))
- **RCUI-342:** [Foundation] implement UnionOmit ([28cefea](https://github.com/ringcentral/juno/commit/28cefea35ba3f948b0b4a32c5ad06c0c1ab3ad75))
- **RCUI-343:** [High Contrast] add highContrast color ([9fbf165](https://github.com/ringcentral/juno/commit/9fbf1654723d8e1f6f20289b0ad5e6f756c7abb7))
- **RCUI-343:** [Picker] support highContrast in TimePicker and DatePicker ([ff3149b](https://github.com/ringcentral/juno/commit/ff3149b3f38d9e9b7acd20c2744e9baf10b3c418))
- **RCUI-344:** [Animation] add util transitionendSubscriber ([1de2668](https://github.com/ringcentral/juno/commit/1de2668683edc5026bfbb5763a0e885910adcf58))
- **RCUI-344:** [focusVisible] add pointer-event: none in fake border ([2543749](https://github.com/ringcentral/juno/commit/2543749cad4151e6d51b6197808084d8c298349a))
- **RCUI-345:** [AppBar] adjustments for high contrast theme ([f8123bd](https://github.com/ringcentral/juno/commit/f8123bd776914ff2448783592d8956d9b3c303a3))
- **RCUI-345:** [Avatar] adjustments for high contrast theme ([03b4de8](https://github.com/ringcentral/juno/commit/03b4de8cc01017379955dac786fbee8cffb09f72))
- **RCUI-345:** [BoxSelect] adjustments for high contrast theme ([10cd864](https://github.com/ringcentral/juno/commit/10cd864f383133745eae252e2f49c0a70623d7e3))
- **RCUI-345:** [Chip] adjustments for high contrast theme ([da1f2c5](https://github.com/ringcentral/juno/commit/da1f2c53c256572f6f26a839fd699f07e254ade3))
- **RCUI-345:** [DatePicker, TimePicker] adjustments for high contrast theme ([2062d50](https://github.com/ringcentral/juno/commit/2062d5053e6e748d195299da9cce327393886dcd))
- **RCUI-345:** [DnD] adjustments for high contrast theme ([13649b5](https://github.com/ringcentral/juno/commit/13649b5da24fd3da56951eb301ef736819f3e9d9))
- **RCUI-345:** [FabButton] adjustments for high contrast theme ([fabab67](https://github.com/ringcentral/juno/commit/fabab6751a736a4b630534d713eb5ac5debc18a1))
- **RCUI-345:** [ListButtonItem] adjustments for high contrast theme ([2a39f52](https://github.com/ringcentral/juno/commit/2a39f52a2b4a9533aecada6ab1375d5a43f2a7a6))
- **RCUI-345:** [LozengeButton] adjustments for high contrast theme ([9ca3841](https://github.com/ringcentral/juno/commit/9ca384158127987f9c9fe93a10dbf659a5276b01))
- **RCUI-345:** [OutlineTextField] adjustments for high contrast theme ([804e303](https://github.com/ringcentral/juno/commit/804e3039f21c765e059ea5386eae0637fa0954ef))
- **RCUI-345:** [RoundButton] adjustments for high contrast theme ([ec619bb](https://github.com/ringcentral/juno/commit/ec619bb9668e2b5b41b1650ce9e4948f04b7386c))
- **RCUI-345:** [Table] adjustments for high contrast theme ([68c5f54](https://github.com/ringcentral/juno/commit/68c5f54919260c6d8dc95f9ca67e38e7edf6c174))
- **RCUI-345:** [Textarea] adjustments for high contrast theme ([ad2a994](https://github.com/ringcentral/juno/commit/ad2a994b66c08decb51e50adcc02da9dee8fa45d))
- **RCUI-345:** [Theme] update token with highContrast ([eb5e953](https://github.com/ringcentral/juno/commit/eb5e9537d82af85e12ac26a5b41f9b5c3445431e))
- **RCUI-345:** [Thumbnail] adjustments for high contrast theme ([cf2668c](https://github.com/ringcentral/juno/commit/cf2668c712f9fc15f0f9d05aa8e44378f70b279f))
- **RCUI-345:** [Tooltip] adjustments for high contrast theme ([ef37e72](https://github.com/ringcentral/juno/commit/ef37e7265cd0457a8b3fdc580ab5c7ef2a66e368))
- **RCUI-345:** [VideoPlayer] adjustments for high contrast theme ([501c0af](https://github.com/ringcentral/juno/commit/501c0aff316b3fa1132387367f82378e88f5a119))
- **RCUI-345:** [VirtualizedSelects] adjustments for high contrast theme ([23caacc](https://github.com/ringcentral/juno/commit/23caacc074162b31301611e3dfd17e8cf8f846ae))
- **RCUI-346:** [useAnnouncer] add announce hook ([160d123](https://github.com/ringcentral/juno/commit/160d1231d1b549d04a9b7f1f5554eaca8303f6f0))
- **RCUI-353:** [fakeBorder] avoid overriding box-shadow for light/dark theme ([e5da785](https://github.com/ringcentral/juno/commit/e5da78522f9536fbf30cceee60c34d4e86f9cbde))

### Bug Fixes

- **RCUI-295:** [Select] fix placeholder with empty value also display placeholder ([2861210](https://github.com/ringcentral/juno/commit/28612106eda262acb83dfeb907ca2d9b58951b5c))
- **RCUI-330:** [DatePicker] refactor whole datepicker for sync spec ([51b9972](https://github.com/ringcentral/juno/commit/51b9972217a6bede0917773d5a217285ccecc52d))
- **RCUI-334:** [TimePicker] fix code rerender issue with picker ([9fde62e](https://github.com/ringcentral/juno/commit/9fde62ecf76931bb719136f58ebc45813bc6632a))
- **RCUI-334:** [TimePicker] full all props pass with Picker ([6f56d08](https://github.com/ringcentral/juno/commit/6f56d0808554e7590cc9d23dfeebd7fd5b2fcf2f))
- **RCUI-337:** [Icon] remove not need icon position: relative ([00ffc6e](https://github.com/ringcentral/juno/commit/00ffc6e4ce2628db6532d0c85aa587d30ce09ed8))
- **RCUI-337:** [ThemeProvider] inject Mui class first as default ([b3f7f8b](https://github.com/ringcentral/juno/commit/b3f7f8bfe07ffe77ca90719b5fd041bcb6a610a5))
- **RCUI-338:** [Avatar] presenceSize value compute incorrect fix ([b5f9f16](https://github.com/ringcentral/juno/commit/b5f9f166404e47376515d2244ddf4f39b20afb6f))
- **RCUI-339:** [DnD] export require type ([d566447](https://github.com/ringcentral/juno/commit/d566447b4aee9bd0694a22225105ef223027c3a2))
- **RCUI-339:** [LineSelect] add displayName ([c2377f0](https://github.com/ringcentral/juno/commit/c2377f0a09e2815e81ffe5c073220dbbb5f1ab79))
- **RCUI-339:** [usePortal] modify the story ([59fc285](https://github.com/ringcentral/juno/commit/59fc28575e27f2050c8d07ccaafe9bd64863a100))
- **RCUI-340:** [getParsePaletteColor] fix support palette function and string type ([0f8c4ce](https://github.com/ringcentral/juno/commit/0f8c4ce297cfda875fa71a5c46ee4dfca55317e2))
- **RCUI-344:** [DatePicker] add close in datePicker ([d3948b6](https://github.com/ringcentral/juno/commit/d3948b667ca9004dfa3f82123fa7461349f2360c))
- **RCUI-344:** [TextField, OutlineTextField] fix TextField issue with disable in safari ([7c967d3](https://github.com/ringcentral/juno/commit/7c967d3c70130424dccf02859895d6478565f5b4))
- **RCUI-344:** [TimePicker] fix default value issue ([d796f80](https://github.com/ringcentral/juno/commit/d796f804cfff72fcb555360903a6777a35b6067f))
- **RCUI-344:** [TimePicker] fix render value issue with hour ([a219694](https://github.com/ringcentral/juno/commit/a2196945ebb2fe83f5f9fa5de231401829589e50))
- **RCUI-344:** [TimePicker] fix style with textfield, and anchor position ([5fbed40](https://github.com/ringcentral/juno/commit/5fbed40ff763faf82f71d87aef3355a0f647dbad))
- **RCUI-344:** [TimePicker] pick PickerTextField for support shared in Date and Time picker ([574ea88](https://github.com/ringcentral/juno/commit/574ea88f049edfd88c6d56784296cda950cf8b42))
- **RCUI-345:** [DatePicker, TimePicker] add miss props back ([a7abf62](https://github.com/ringcentral/juno/commit/a7abf62a8573ff0d323af526a1237bcc64a2586e))
- **RCUI-348:** [Menu] change context jsx layer, only for children as customer ([c410da4](https://github.com/ringcentral/juno/commit/c410da482c99c3609e31827493de6d3f61d1e908))
- **RCUI-349:** [Menu] fix menu with memo, refactor with focus ref future ([aca2eb3](https://github.com/ringcentral/juno/commit/aca2eb3f26eaa8726ef0c81623ee54552238caab))
- **RCUI-351:** [Downshift] remove uuid, replace with uniqueId ([ba0977a](https://github.com/ringcentral/juno/commit/ba0977a91ff1dc1a7c94b22368dab8d7fbcc7960))
- **RCUI-351:** [Menu] refactor come code and remove uuid package ([cdcb87c](https://github.com/ringcentral/juno/commit/cdcb87ca7901241198784f9bdea7761b9394e5d2))
- **RCUI-352:** [TimePicker, DatePicker] remove GlobalPickerStyle ([9dba939](https://github.com/ringcentral/juno/commit/9dba93905a27da3d992b5385b3010d8eb638988d))

### [1.3.1](https://github.com/ringcentral/juno/compare/1.3.0...1.3.1) (2021-01-07)

### ⚠ BREAKING CHANGES

- **RCUI-181:** [Avatar] change the avatar style follow with spec
- **RCUI-181:** [Avatar] fix a11y event with native button and lot of style
- **RCUI-181:** [Avatar] remove not need background-color on StyledIconAvatar
- **RCUI-181:** [Avatar] remove not need StyledMaskWrapper
- **RCUI-181:** [Avatar] fix avatar position with custom presence
- **RCUI-181:** [Avatar] remove props: customColor, shouldRenderPresenceHovered, selectorId

### Features

- **RCUI-181:** [Avatar] add warning with all script ([a625183](https://github.com/ringcentral/juno/commit/a625183a05a304ca6411874eb2d8bb5bedcad408))
- **RCUI-181:** [Avatar] release whole avatar component ([2e8bca7](https://github.com/ringcentral/juno/commit/2e8bca7d5291ec4410bf9c8ada675693f464969d))
- **RCUI-181:** [foundation] add nonStyleButton for a11y button use ([5bac0b7](https://github.com/ringcentral/juno/commit/5bac0b7f3653eb203d638dd7bbc79806eceb1b11))
- **RCUI-181:** [foundation] add reverse with opacity ([128da2d](https://github.com/ringcentral/juno/commit/128da2dcee28a8663d1ca4a29918c3d3b20b3a01))
- **RCUI-181:** [foundation] export mui useTheme ([f3c5468](https://github.com/ringcentral/juno/commit/f3c54688dfeacb2e3d10f9de332ceb408859c68a))
- **RCUI-181:** [foundation] move a11yKeyboardCode into foundation ([9cd206b](https://github.com/ringcentral/juno/commit/9cd206bc3bb3251de180b5436e6306394b071218))
- **RCUI-181:** [Release]Avatar ([480432c](https://github.com/ringcentral/juno/commit/480432c2732150b49d24685229c97b7747111c0f))
- **RCUI-295:** [Select] add placeholder with Select and move storybook ([9720c2a](https://github.com/ringcentral/juno/commit/9720c2a2942543b3cb2cf9f47cdc94f526a48fe0))
- **RCUI-295:** [Storybook] add tag for storybook a11y ([d9e2731](https://github.com/ringcentral/juno/commit/d9e2731dd510a63b7ab074793cd58be559804107))

### Bug Fixes

- **RCUI-181:** [Avatar] add shouldRenderPresenceHovered feat back ([d88ec24](https://github.com/ringcentral/juno/commit/d88ec24f989e65b7ed1d5794ec4b2f8190e68aba))
- **RCUI-181:** [Icon] fix defaultProps loadingSize issue ([1328560](https://github.com/ringcentral/juno/commit/1328560fc8f26e66f16219bd047b34392e8e11e9))

## [1.3.0](https://github.com/ringcentral/juno/compare/1.2.6...1.3.0) (2020-12-31)

### Features

- **RCUI-315:** [Divider] release Divider ([a21f72c](https://github.com/ringcentral/juno/commit/a21f72c562b79c429149bc350d5827498e6c4123))
- **RCUI-315:** [Presence] forwardRef Presence ([5fdbd1f](https://github.com/ringcentral/juno/commit/5fdbd1f1e0ea9b9d14271f9a93aeb67e20d7685e))
- **RCUI-315:** [Presence] release Presence ([e4035c7](https://github.com/ringcentral/juno/commit/e4035c73f72c75fd8ecdf789c6c9a76cb1b206fc))
- **RCUI-315:** [Rating] release Rating ([c3ca773](https://github.com/ringcentral/juno/commit/c3ca773086d61eda30d61ec87492ac9c49a36114))
- **RCUI-315:** [Table] add classes for apply class to part of component ([bc23b9d](https://github.com/ringcentral/juno/commit/bc23b9d7225295caf4169b2449f94977b770f2f6))
- **RCUI-315:** [Table] switch table to styled component ([a113ba9](https://github.com/ringcentral/juno/commit/a113ba9507bd7adf67158ce7cb603fa1d192b9d5))
- **RCUI-315:** [Token] add presence token ([258989c](https://github.com/ringcentral/juno/commit/258989c88cb0fd648f880b55538d815c1d48af91))
- **RCUI-315:** [Tooltip] release tooltip ([9ce497c](https://github.com/ringcentral/juno/commit/9ce497c251980ba35fb952674018b66884db678d))
- **RCUI-321:** Paddings in menu with groups ([6623511](https://github.com/ringcentral/juno/commit/6623511e12ef822df754160ce5a9412ea94ea2bf))
- **RCUI-321:** Paddings in menu with groups update snapshot ([a9c4282](https://github.com/ringcentral/juno/commit/a9c4282d5603bbef39668e9e8c0418b1ef1aa4b1))
- **RCUI-322:** [[SubMenu] add MenuListProps for subMenuList] add MenuListProps prop ([d0d42ce](https://github.com/ringcentral/juno/commit/d0d42ceb67221d9cab4102289fcbf52b95a36cad))

### Bug Fixes

- **RCUI-315:** [Avatar] fix avatar with presence ([6fd6472](https://github.com/ringcentral/juno/commit/6fd647218fa7a739ae17a2dac23c34c5e2aa688f))
- **RCUI-315:** [Foundation] add comment for classesProps ([325e636](https://github.com/ringcentral/juno/commit/325e6365db64d4286cc122b8402ee70c75410350))
- **RCUI-315:** [Link] remove link below span issue ([72a1c30](https://github.com/ringcentral/juno/commit/72a1c3043e7d3872968dc88f64b7608945616d8f))
- **RCUI-315:** [newPalette] fix type and mark height and width deprecated ([77b0eb6](https://github.com/ringcentral/juno/commit/77b0eb645b569ced1fd3562555db1706a2cc0d17))
- **RCUI-315:** [Presence] switch presence token to presence ([a13a9b6](https://github.com/ringcentral/juno/commit/a13a9b6fc0e6b0f31a82dc3d754642441c455a82))
- **RCUI-315:** [Tooltip] sync tooltip default color to bg.neutral ([f121d0e](https://github.com/ringcentral/juno/commit/f121d0e14b48af84a8535022a8cf49bba40f4fd1))
- **RCUI-321:** [Menu] remove not need memo and forwardRef for outside use ([52781ea](https://github.com/ringcentral/juno/commit/52781ea01d765d8c46bc6b30d1f0962b80b17549))
- **RCUI-322:** [SubMenu] remove not need destructure ([2b48c11](https://github.com/ringcentral/juno/commit/2b48c1178311ca8f3f3fc51a3cfe443ae9486fe2))

### [1.2.6](https://github.com/ringcentral/juno/compare/1.2.5...1.2.6) (2020-12-23)

### Features

- **RCUI-312:** [[Tag] TS to support basic HTML attributes] fix TS ([7b5af99](https://github.com/ringcentral/juno/commit/7b5af9973b4bce2d521bcfb60d9daeeaaa8bcd68))
- **RCUI-313:** [VerticalScrollbar] TypeError VerticalScrollbar.prototype.\_smoothScrollBy(main.1c9ce9a5.chunk) error Object doesn't support property or method 'scrollBy' ([1a17e14](https://github.com/ringcentral/juno/commit/1a17e1406d6ce30e695c560b27c8d36b085c1fee))

### Bug Fixes

- **RCUI-286:** [Icon] fix switch error ([a96bfcc](https://github.com/ringcentral/juno/commit/a96bfcca1abe12937bb07531fc605d03c06db530))

### [1.2.5](https://github.com/ringcentral/juno/compare/1.2.4...1.2.5) (2020-12-22)

### ⚠ BREAKING CHANGES

- **RCUI-303:** [TextField] remove avoidArrowUpKeydown
- **RCUI-303:** [TextArea] remove avoidArrowUpKeydown
- **RCUI-304:** [AudioPlayer] change to Svg Icon, that will make class change from name2Icon

### Features

- **RCUI-302:** [LineSelect] deprecated props and release for warning use ([4e68644](https://github.com/ringcentral/juno/commit/4e686447ae3cf8b32c63a28251079c244ef90664))
- **RCUI-302:** [Scss] add shadows scss mixin ([e4d73e6](https://github.com/ringcentral/juno/commit/e4d73e661c0d07adbc0164ab05b4011b4ff37926))
- **RCUI-307:** [hooks] fix useReneredOnceHelper ([2a7ed7a](https://github.com/ringcentral/juno/commit/2a7ed7a421dd9d27b64c1e66ebf7c4e721b8abf1))
- **RCUI-309:** [HoverHelper] Failed to execute 'contains' on 'Node': parameter 1 is not of type 'Node'. fix ([2be3819](https://github.com/ringcentral/juno/commit/2be3819ec8fa753a86e6d28b3f6400e9e6faa7ed))
- **RCUI-310:** [ThemeSwitcherProvider] init themeSwitcher for theme switch ([d295e3a](https://github.com/ringcentral/juno/commit/d295e3a4e29e45c60a5c726f42f5b71f61df0cbf))

### Bug Fixes

- **FIJI-306:** [[Downshift] fix `key` prop of InputItem in RcTextFieldWithFreeChips] fix key. ([2f7d59d](https://github.com/ringcentral/juno/commit/2f7d59dcef0a8c4e08336e035fa01c71c0f0acf9))
- **RCUI-234:** [Lint] fix error hook use ([357a5e7](https://github.com/ringcentral/juno/commit/357a5e7c14ab3d7ab28b7b428db24c4d7e8dd7a4))
- **RCUI-286:** [BoxSelect] fix BoxSelect style ([ea19943](https://github.com/ringcentral/juno/commit/ea199431e74a9baf3430317953ba405125063924))
- **RCUI-286:** [Icon] fix icon switch bug ([f26564c](https://github.com/ringcentral/juno/commit/f26564cc3753ae3435b9fb5696797211e9aa9575))
- **RCUI-286:** [Icon] fix inner user icon way ([a932607](https://github.com/ringcentral/juno/commit/a9326074a5dfdc5b17e8ef6edfe2f5788a46eaec))
- **RCUI-301:** [[Downshift] input not need required attr when downshift have selectedItems] fix ([7860471](https://github.com/ringcentral/juno/commit/786047191b550aa262d7c58f9d30915e437003b4))
- **RCUI-301:** [[Downshift] input not need required attr when downshift have selectedItems] fix ([4bcd09c](https://github.com/ringcentral/juno/commit/4bcd09cdf4795829086e5b24d0d3c9a16704241e))
- **RCUI-301:** [[Downshift] input not need required attr when downshift have selectedItems] update snapshot ([5997238](https://github.com/ringcentral/juno/commit/5997238d785b7bf12e36d0b7ccf3629ae84b27eb))
- **RCUI-301:** [[Downshift] input not need required attr when downshift have selectedItems] update ut ([9c897a5](https://github.com/ringcentral/juno/commit/9c897a5009b7ab35a3e59f5f545b1db45408cec4))
- **RCUI-302:** [ListButtonItem] fix type issue ([e5f8349](https://github.com/ringcentral/juno/commit/e5f83494778dfafb2f8d958f8ea54617a406b8d6))
- **RCUI-302:** [Shadows] add miss shadow token ([29000f8](https://github.com/ringcentral/juno/commit/29000f8bcb7a4db6832d372679e9346f9136050d))
- **RCUI-302:** [Snapshot] update snapshot ([f568ca6](https://github.com/ringcentral/juno/commit/f568ca6b31a871582a13907e815b82814427415e))
- **RCUI-303:** [Textarea] fix Textarea color with use same base with TextField ([f437e8f](https://github.com/ringcentral/juno/commit/f437e8f7cd804987ac838473a75c778bfada25bb))
- **RCUI-303:** [Textared] fix color when disabled ([3348639](https://github.com/ringcentral/juno/commit/334863989a1c7c54cf60075de8aaf7aebba01d4d))
- **RCUI-303:** [Textared] remove hover color ([5eb9642](https://github.com/ringcentral/juno/commit/5eb9642f42cfb4e5220b52309bfe9aac7e818fc2))
- **RCUI-304:** [AduioPlayer] fix icon name use to Svg Icon ([ba8dc99](https://github.com/ringcentral/juno/commit/ba8dc994549a02951b82b127dd8757f0a748ba64))
- **RCUI-304:** [Icon] fix all inner icon use way ([72cdb9e](https://github.com/ringcentral/juno/commit/72cdb9ef8ae1f1caedb92cd1a6369d240635eae7))
- **RCUI-304:** [Marker] change use icon way ([6687abb](https://github.com/ringcentral/juno/commit/6687abb76a22b2b9a9f356381ccc9bef6a972fe9))
- **RCUI-304:** [Thumbnail] release thumbnail ([4b7a057](https://github.com/ringcentral/juno/commit/4b7a0577795cb2b7ebe1c888c112f2181055a160))

### [1.2.4](https://github.com/ringcentral/juno/compare/1.2.3...1.2.4) (2020-12-17)

### ⚠ BREAKING CHANGES

- **RCUI-234:** remove RcCheckboxButton, should use RcCheckBox to replace that
- **RCUI-298:** RcColorSet switch to string[], that will support type in v4 ts
- **RCUI-298:** remove method `paletteColorSet` from foundation
- **RCUI-293:** remove prop \`localeOptions\`, that should custom outside

### Features

- **RCUI-234:** [CheckBox] support RcCheckBox with tooltip ([db61d35](https://github.com/ringcentral/juno/commit/db61d3556fe5e9b808be1b34eb0d05a5c0ddfc83))
- **RCUI-234:** [FabButton] support full color set pass ([8e8aeb8](https://github.com/ringcentral/juno/commit/8e8aeb85c57dd3cae8c6df074a0c8291741bc604))
- **RCUI-234:** [FabIconButton] support full color set pass ([a4be290](https://github.com/ringcentral/juno/commit/a4be29073d9a0a3006d260c84300a7f0f131c9ca))
- **RCUI-234:** [IconButton] support full color set pass ([0a408f9](https://github.com/ringcentral/juno/commit/0a408f9fb7018dad1ae3a8f8d6768c5f768670a4))
- **RCUI-288:** [hooks] add new utils useRenderedOnceHelper ([27bd9c1](https://github.com/ringcentral/juno/commit/27bd9c1c07a123ef2c361b45da8572cb9ac99b4c))
- **RCUI-288:** [hooks] UseRenderedOnceHelper. change KeyboardEvent to FocusEvent for onFocus ([a7a3800](https://github.com/ringcentral/juno/commit/a7a380029cd8dea4484f25ceb5ec6ca4f2b06107))
- **RCUI-290:** [[LineSelect][virtuallist] fix accessibility support] fix MenuList ([e237192](https://github.com/ringcentral/juno/commit/e23719261edbc59fbf38e5b9dc92df95e17bcba6))
- **RCUI-298:** [Scss] init all theme token for normal sass use ([57e2c03](https://github.com/ringcentral/juno/commit/57e2c039ca6ef36620f28a6f0471f6747d081bb8))

### Bug Fixes

- **RCUI-183:** [[Release]Presence] use palette2 ([a4a297d](https://github.com/ringcentral/juno/commit/a4a297d59037ae064c7d1cf1c79f271a897f7cac))
- **RCUI-234:** [CheckboxButton] remove RcCheckboxButton, should use RcCheckBox to replace that ([42ee5c9](https://github.com/ringcentral/juno/commit/42ee5c98faeb0b6887e5fd3587fb24d53c4dbfde))
- **RCUI-234:** [getParsePaletteColor] change color to optional value ([1940838](https://github.com/ringcentral/juno/commit/19408388d3e8a5a0f34b57bff8247aef466e27e6))
- **RCUI-234:** [IconButton] show warning when use tiny color ([fbdb22e](https://github.com/ringcentral/juno/commit/fbdb22e4d1a1f1417caa46cb9e5bb7baa311b250))
- **RCUI-234:** [Link] release Link withDeprecatedCheck ([51a2565](https://github.com/ringcentral/juno/commit/51a25654c493afed7970bbee5d5e231ec93ef941))
- **RCUI-234:** [Link] support full color set pass ([4c87d73](https://github.com/ringcentral/juno/commit/4c87d73b79721c6abacd9767e3359f0d43a7b231))
- **RCUI-277:** [Table a11y] RcTableProps.desc no longer required prop, to avoid breaking existing use cases ([1befabd](https://github.com/ringcentral/juno/commit/1befabdf8ef1cedc91498e7529c7324555dcf216))
- **RCUI-29ˊ:** [BoxSelect] pick heightSize from MuiSelect ([21db54c](https://github.com/ringcentral/juno/commit/21db54c1274be9afdd8d4fdb269dac53bb12f2bf))
- **RCUI-293:** [DatePicker] remove prop \`localeOptions\`, that should custom outside ([5bf534f](https://github.com/ringcentral/juno/commit/5bf534f6e5695de7e58819abb2f2081718960135))
- **RCUI-296:** [BoxSelect] fix error style cause with remove align center and flex ([5127b9b](https://github.com/ringcentral/juno/commit/5127b9b3e69b88b8bcf05f6e81eda243b60f9161))
- **RCUI-296:** [DialDad] fix svg 0-9 icon fill color ([a74cc86](https://github.com/ringcentral/juno/commit/a74cc86914910469bc82cf22b471291bfef4fbc4))
- **RCUI-296:** [OutlineTextField] fix HelperText style and pass props into ([2045023](https://github.com/ringcentral/juno/commit/204502359f857304eb6f099f9bc4f7b32f7edfc5))
- **RCUI-296:** [TablePagination] fix root text color error in dark mode ([2811210](https://github.com/ringcentral/juno/commit/2811210d276e67815037d39376607f5330831a14))
- **RCUI-296:** [TextField] fix disabled color ([3361288](https://github.com/ringcentral/juno/commit/33612883256031f869c8d47185e4a76d7f749ed5))
- **RCUI-296:** [TextField] fix error disable style with value ([d025664](https://github.com/ringcentral/juno/commit/d025664bd9f4b0a64969f5b51b3d20caf0140ccd))
- **RCUI-296:** [TextField] fix helperText color ([d5e73c6](https://github.com/ringcentral/juno/commit/d5e73c6ab259f547df10b57ed1a9051a1c1e8fa7))
- **RCUI-296:** [VirtualizeSelect] fix props not correct issue ([228fcb6](https://github.com/ringcentral/juno/commit/228fcb641f00ac0f04930ebe9aaab7c221cad4d4))
- **RCUI-297:** [Table] Modifying check for presence of valid sortKey to set tabindex ([3e1229d](https://github.com/ringcentral/juno/commit/3e1229d1d289f65d649bec86172245be187495e7))
- **RCUI-298:** [RcColorSet] change to just use string[] that will refactor in the future when ts v4 work ([b427650](https://github.com/ringcentral/juno/commit/b42765039afde105623c7622fd05da2b86a21c14))
- **RCUI-300:** [Scss] rename custom-palette => custom-rc-palette ([c478d45](https://github.com/ringcentral/juno/commit/c478d4500f22d06c9c171367455e40fac4ca83bd))

### [1.2.3](https://github.com/ringcentral/juno/compare/1.2.2...1.2.3) (2020-12-10)

### Features

- **RCUI-278:** [[RcVirtualizedList] fix scrollContainer props for container wrapper div] fix scrollContainerProps ([7c79c32](https://github.com/ringcentral/juno/commit/7c79c327cdb0ac393fc4e01d2656a13759d3f40a))
- **RCUI-278:** [[RcVirtualizedList] fix scrollContainer props for container wrapper div] fix scrollContainerProps ([ea61941](https://github.com/ringcentral/juno/commit/ea61941d2a99aa675d485db395a535d241120680))
- **RCUI-278:** [[RcVirtualizedList] fix scrollContainer props for container wrapper div] fix scrollContainerProps ([d4ff9bd](https://github.com/ringcentral/juno/commit/d4ff9bdebb5016c12fa77a65baa99d78af7ea551))
- **RCUI-280:** [[Downshift] suggestion list support accessibility] fix suggestion list a11y ([953f67b](https://github.com/ringcentral/juno/commit/953f67bc8bcef03c1a17d7d827c606be2d2d9beb))
- **RCUI-283:** [[RcChip] Update RcChip supports truncate] just add storybook demo ([8cc549b](https://github.com/ringcentral/juno/commit/8cc549b6351d9ee3af21f6ac5d53d1a8791c6e51))
- **RCUI-283:** [[RcChip] Update RcChip supports truncate] update snapshot ([e11a63c](https://github.com/ringcentral/juno/commit/e11a63c162b521bd42a3e4918ab1679ac4a0a4d8))
- **RCUI-287:** [[RcTag] Update `color` props to support more colors.] add more colors. ([6b22e84](https://github.com/ringcentral/juno/commit/6b22e84c0f18b9fc63fc013e29f76de905ce27ad))
- **RCUI-287:** [Tag] complete Tag Release ([819e010](https://github.com/ringcentral/juno/commit/819e0103505ca65628955aeceeef91ec9270e9c9))
- **RCUI-289:** [[IconButton] fix **mocks** file] fix mock file ([1d5d80a](https://github.com/ringcentral/juno/commit/1d5d80a8a455dbfa39806b0c4dde6704d33a8ecb))

### Bug Fixes

- **RCUI-284:** [[IconButton] buttonRef not working] fix tooltip prop `tooltipForceHide` ([b9aa7be](https://github.com/ringcentral/juno/commit/b9aa7beb6427bff85f293967f0e1a277c42663fd))
- **RCUI-286:** [Button] export SplitButton and related ButtonGroup ([0154e69](https://github.com/ringcentral/juno/commit/0154e6929722eac4ef471f2a853f9b170a92245f))
- **RCUI-286:** [Icon] add static icon name ([f1d4f70](https://github.com/ringcentral/juno/commit/f1d4f7044efabf44598c29bc64c4b4e64b4128bb))
- **RCUI-286:** [Icon] switch all inner svg use to component ([a67d140](https://github.com/ringcentral/juno/commit/a67d140e17f7503f51c410f93cbc43b24324fce2))
- **RCUI-293:** [DatePicker] fix datePicker type issue and local issue ([0953ca7](https://github.com/ringcentral/juno/commit/0953ca71ed860522920f26815870922315037b0f))

### [1.2.2](https://github.com/ringcentral/juno/compare/1.2.1...1.2.2) (2020-12-07)

### Bug Fixes

- **RCUI-286:** [Package] fix cli into dev deps ([2899f91](https://github.com/ringcentral/juno/commit/2899f91d4ce78092c48cf8e21a884046529f0b63))

### [1.2.1](https://github.com/ringcentral/juno/compare/1.2.0...1.2.1) (2020-12-07)

### Features

- **RCUI-286:** [Icon] init all icon component from svg to component ([6fcb229](https://github.com/ringcentral/juno/commit/6fcb2295878d8790c039101592ad22f61273e096))

### Bug Fixes

- **RCUI-285:** [isShowJunoWarning] fix localStorage not exist issue ([64986ce](https://github.com/ringcentral/juno/commit/64986cee2836dc57c7f8ac802979269fad9e18da))
- **RCUI-286:** [Icon] switch all inner svg use to component ([a129b01](https://github.com/ringcentral/juno/commit/a129b01fe2dd3ad95634de026110d0b514c63bd2))

## [1.2.0](https://github.com/ringcentral/juno/compare/1.1.3...1.2.0) (2020-12-04)

### ⚠ BREAKING CHANGES

- **RCUI-233:** remove RcBanner, should use Alert
- **RCUI-189:** free chip id not equal label, add isSuggestion prop to flag

### Features

- **RCUI-179:** [Icon] make all deprecated props warning ([bf26ef1](https://github.com/ringcentral/juno/commit/bf26ef1c122c2c7507db609b141f801da54f22b1))
- **RCUI-179:** [Icon] ready to release icon ([6446802](https://github.com/ringcentral/juno/commit/644680212cbc01f1e879ee858f106c7ed1cd0016))
- **RCUI-189:** [[Downshift] refactor the downshift] update ([6084708](https://github.com/ringcentral/juno/commit/60847089ca145614bfafcf37d6096cf1a24475f8))
- **RCUI-189:** [[Downshift] refactor the downshift] update ([098ff9f](https://github.com/ringcentral/juno/commit/098ff9fd3957a39b83dbe0c5c9c08615254e5ed3))
- **RCUI-189:** [[Downshift] refactor the downshift] update ([7253bd7](https://github.com/ringcentral/juno/commit/7253bd7c8fef35f6696c51d572c18a45a0e84f8b))
- **RCUI-189:** [[Downshift] refactor the downshift] update ([48dd45f](https://github.com/ringcentral/juno/commit/48dd45f64d9f39bddd0253712d4283d9e6c36897))
- **RCUI-189:** [[Downshift] refactor the downshift] update snapshot ([435e097](https://github.com/ringcentral/juno/commit/435e097e66d25926beb1a472090aec0ead2901e7))
- **RCUI-214:** [DatePicker] support accessibility ([5333154](https://github.com/ringcentral/juno/commit/5333154bfa617e45867919b5b5848d36282202f0))
- **RCUI-215:** [TimePicker] add aria-live for screen reader ([13150f2](https://github.com/ringcentral/juno/commit/13150f241d3676a67d14fbac322bff61a751bcd0))
- **RCUI-215:** [TimePicker] support A11y ([bfc04b2](https://github.com/ringcentral/juno/commit/bfc04b2c77224bef3ae2f36799593a51d2c8f08a))
- **RCUI-215:** [TimePicker] support accessbility ([e2fcfed](https://github.com/ringcentral/juno/commit/e2fcfeda178979d75ba1fe852b09a1d77bd3fd01))
- **RCUI-233:** [Banner] remove RcBanner, full alert component ([4ab8cc5](https://github.com/ringcentral/juno/commit/4ab8cc54a6c2d77aafb7794bcbaf2bacfbdf4de7))
- **RCUI-241:** [Button, ListItem, MenuItem] apply withTooltip ([6fa09a9](https://github.com/ringcentral/juno/commit/6fa09a915a2735d9012de5a56f9554cd5c422e05))
- **RCUI-241:** [ButtonGroup] implement ButtonGroup ([63a8238](https://github.com/ringcentral/juno/commit/63a82388d5f0c5e53d1a4bb0a23a839cf2b5df34))
- **RCUI-241:** [SplitButton] implement SplitButton ([8db5def](https://github.com/ringcentral/juno/commit/8db5deff9836e7fb28bbc36dbf03acad5990741c))
- **RCUI-241:** [withTooltip] implement with Tooltip hoc ([31a5259](https://github.com/ringcentral/juno/commit/31a5259f5337b3efc62bfdfb09ac32865478a833))
- **RCUI-242:** [[Component update] Icon button/plain- add offset for focus indicator] add offset to keyboard focus ([e91a733](https://github.com/ringcentral/juno/commit/e91a7330cbcb1a47c3cf53a554dcf5608954a581))
- **RCUI-249:** [[RcVirtualizedList] add scrollContainer props] add scrollContainerProps props ([72c2271](https://github.com/ringcentral/juno/commit/72c2271b98df36662e5e6e21bd5d825010f8f839))
- **RCUI-249:** [[RcVirtualizedList] add scrollContainer props] update snapshot ([476c1d9](https://github.com/ringcentral/juno/commit/476c1d904b82b301336597e6b9909c2140f992e7))
- **RCUI-261:** [DatePicker] add automation id for month year day ([1259115](https://github.com/ringcentral/juno/commit/12591159d51978d1edf3fc3205178982b4019650))
- **RCUI-264:** [[Downshift] add unSelectable to replace the isMember] add unSelectable ([8603078](https://github.com/ringcentral/juno/commit/8603078a52e437a5f2e9499c823baf7aae8c7f95))
- **RCUI-265:** [Add auto hide feature to scrollbar in virtualized list] add auto hide. ([16bec33](https://github.com/ringcentral/juno/commit/16bec33467c384aecb3336e3fedcbcda1f4580bc))
- **RCUI-272:** [Deprecate check] add production check with warning only show in dev mode ([38b43de](https://github.com/ringcentral/juno/commit/38b43de45a9dfca7223a4c05d5219f32819c2a54))
- **RCUI-272:** [Deprecate check] add tooltip depecrate warning ([7e8c6aa](https://github.com/ringcentral/juno/commit/7e8c6aa2507995ad4b1516c89fec145065498d41))
- **RCUI-272:** [Deprecate check] implement deprecate check method ([8e015d7](https://github.com/ringcentral/juno/commit/8e015d771f7701b928210cf9cf802347bfbf2f32))
- **RCUI-273:** [[AutoCollapseAction][iconbutton][InlineEditable] deprecated tooltipForceHide] remove tooltipForceHide ([4140f29](https://github.com/ringcentral/juno/commit/4140f29a88418497467da48d1f28bdaaedf15608))
- **RCUI-281:** [[MenuItem] add props deprecate warning] add deprecated prop waring ([5f1b5e8](https://github.com/ringcentral/juno/commit/5f1b5e83d29cb0e290f58b4a3105501f77bf84d3))

### Bug Fixes

- **RCUI-205:** [IconButton] forwardRef ([11ed19b](https://github.com/ringcentral/juno/commit/11ed19bc62ccfa5fe3b0056e8f21db5c94d20421))
- **RCUI-222:** [[Switch] error style in dark theme] fix switch token ([c54b696](https://github.com/ringcentral/juno/commit/c54b69612cbf0ede808b5740fcfb927ea79abb31))
- **RCUI-233:** [Alert] full alert component with RcAlert ([b259d6b](https://github.com/ringcentral/juno/commit/b259d6b213aeb296a2eb35cd840de7dca0aaed67))
- **RCUI-233:** [Alert] only need align ([a133d2e](https://github.com/ringcentral/juno/commit/a133d2e1c7f11644e78e3d41738f83f961840784))
- **RCUI-233:** [Banner] mark deprecated and remove storybook ([862c4a6](https://github.com/ringcentral/juno/commit/862c4a6d09c15950ff65fa7435693bb09728cb6f))
- **RCUI-241:** [Button] forwardRef ([5b3240b](https://github.com/ringcentral/juno/commit/5b3240bee73b980ab01fb2bd9528f535f1a9ac04))
- **RCUI-241:** [ListItem] forwardRef ListItem ([ceee3fa](https://github.com/ringcentral/juno/commit/ceee3fa7daa35d6ef1f946f17812a4fc128e2b17))
- **RCUI-241:** [MenuItem] forwardRef ([3a28015](https://github.com/ringcentral/juno/commit/3a28015d071b06af16b22d3a73ba40dd7616a556))
- **RCUI-241:** [palette] fix setOpacity props not pass full issue ([b627d25](https://github.com/ringcentral/juno/commit/b627d25b3486bad0253dd0cdee2864323b3bb332))
- **RCUI-241:** [SplitButton] add TooltipProps enterNextDelay for first menuItem ([c743e3a](https://github.com/ringcentral/juno/commit/c743e3acde5023c855fa9abb21ce0842e19e66ae))
- **RCUI-241:** [Tooltip] forwardRef tooltip ([db4fb23](https://github.com/ringcentral/juno/commit/db4fb23b5fc7d3d5eb97f7afe0abc05509d212bb))
- **RCUI-254:** [[Checkbox] should fix style utils import path] fix path ([d530e0f](https://github.com/ringcentral/juno/commit/d530e0fcef7f73bbad990e577af22571356ce8f0))
- **RCUI-254:** [[Checkbox] should fix style utils import path] update snapshot ([15b77fb](https://github.com/ringcentral/juno/commit/15b77fb7165c1a1fce23c1280eb7f2b9d250cefa))
- **RCUI-256:** [VirtualizedMenuList] should keep focus on the top/bottom item when \`loop\` is false and keep pressing up/down ([d7faf05](https://github.com/ringcentral/juno/commit/d7faf05d8f8ed1d3df2e7fb1711f69d81de29f22))
- **RCUI-257:** [[Downshift][windows]Focus not on the chip when hit Del to delete chip.] handle Delete key ([181ccb0](https://github.com/ringcentral/juno/commit/181ccb02867c5660fd698a801eb6f29c84cbfa2e))
- **RCUI-260:** [fix `do not disturb` color of presence] fix color token ([6023e59](https://github.com/ringcentral/juno/commit/6023e593be974437bb74d3cc72fe977e55c2ccf3))
- **RCUI-262:** [[Downshift] It did't scroll to top when input changed] let suggestion list scroll to top when input changed ([1d15b25](https://github.com/ringcentral/juno/commit/1d15b2521f88e84438fe445a587d01dae9cf9a9b))
- **RCUI-266:** [Select] truncated when text too long ([98cc6fe](https://github.com/ringcentral/juno/commit/98cc6fea9f95d6a59420964157eb5e4193295198))
- **RCUI-268:** [Expose autoHideScrollbar prop for RcInfiniteList] forward prop. ([99dafdd](https://github.com/ringcentral/juno/commit/99dafdd4b8f4cffbf7e24bfa6bc1c9ef69dfe283))
- **RCUI-268:** [Expose autoHideScrollbar prop for RcInfiniteList] normalize props. ([f10fb4e](https://github.com/ringcentral/juno/commit/f10fb4ec0d845b1b94e9eb95b0747731820fba9d))
- **RCUI-270:** [[Downshift] onKeydown was override] avoid override onKeyDown ([8674d8a](https://github.com/ringcentral/juno/commit/8674d8a74d7e2c8e3c305001011967543f0b0a70))
- **RCUI-272:** [Icon] apply withDeprecatedCheck with props ([83be6e8](https://github.com/ringcentral/juno/commit/83be6e8a3d102c54d8df480b75a9b0caa536fe6f))

### [1.1.3](https://github.com/ringcentral/juno/compare/1.1.2...1.1.3) (2020-11-18)

### ⚠ BREAKING CHANGES

- **RCUI-74:** remove ToggleButton
- **RCUI-213:** Remove FormItem
- **RCUI-213:** Remove FormItemGroup
- **RCUI-213:** Remove FormSection
- **RCUI-213:** Remove FormSectionTitle
- **RCUI-213:** Remove FormItem
- **RCUI-213:** Remove FormItemGroup
- **RCUI-213:** Remove FormSection
- **RCUI-213:** Remove FormSectionTitle

### Features

- **RCUI-74:** [ToggleButton] remove ToggleButton ([5bc5a73](https://github.com/ringcentral/juno/commit/5bc5a734a6781784dc3d3dfcaf73b44277d73251))
- **RCUI-213:** [[Form] remove FormItem FormItemGroup FormSection FormSectionTitle] update snapshot ([c4f19f6](https://github.com/ringcentral/juno/commit/c4f19f6e9d0b44dbfbf7f4bdc45ab4e4df093236))
- **RCUI-213:** [[Form] remove FormItem FormItemGroup FormSection FormSectionTitle] update snapshot ([46cd42f](https://github.com/ringcentral/juno/commit/46cd42fd21c1de9afe6b787455fbfc9555e4a028))
- **RCUI-221:** [[DatePicker] upgrade @material-ui/pickers to 3.2.10] upgrade mui picker version ([cbbcac5](https://github.com/ringcentral/juno/commit/cbbcac599c9e8d6e810845c3406e613a91335f35))
- **RCUI-224:** [AutoCollapseActions] change to RcMenu ([40f6764](https://github.com/ringcentral/juno/commit/40f6764b73415fd1d7f22bffff61d70bc4a4049e))
- **RCUI-224:** [AutoCollapseActions] change to RcMenu ([3083792](https://github.com/ringcentral/juno/commit/3083792be3228f05e96a34d7a8f0ff5da2c4de2c))
- **RCUI-224:** [AutoCollapseActions] fix key issue and example ([7686ea6](https://github.com/ringcentral/juno/commit/7686ea65f2cf9c2487ab9ec02b44a80566bdd02b))
- **RCUI-224:** [AutoCollapseActions] fix lint ([6bfc560](https://github.com/ringcentral/juno/commit/6bfc5602452a8d863570a0d82a742c954bdea9ac))
- **RCUI-224:** [AutoCollapseActions] remove anchorOrigin ([222a47a](https://github.com/ringcentral/juno/commit/222a47a89f80017da2cfa5fb25cfbf516ac04183))
- **RCUI-224:** [AutoCollapseActions] remove RcMenuItem ([c168d3a](https://github.com/ringcentral/juno/commit/c168d3a23b3be04791b4a5999e7af289b1ddd098))
- **RCUI-225:** [[Rating] New component] show tooltip when tab on a star & fix error margin when enable readonly prop ([ecfe6e3](https://github.com/ringcentral/juno/commit/ecfe6e35cd7ce95058b698ba44ef7861da7bef0b))
- **RCUI-230:** [mention] focus style. ([24551a2](https://github.com/ringcentral/juno/commit/24551a20db3ff3be8719e0703a220028486c45dd))
- **RCUI-235:** [Checkbox - should have 4 px padding between the label and the button] fix padding with label ([ba3f20a](https://github.com/ringcentral/juno/commit/ba3f20aa0099b5a1f6a719bd3951535cdb250e86))
- **RCUI-240:** [Link] add a11y suppor ([39c29bd](https://github.com/ringcentral/juno/commit/39c29bd6b98bfda453eeef21869f78da14b637a6))

### Bug Fixes

- **RCUI-216:** [[AutoSizer] Should call setSize when element was hide or size not changed] avoid re-render when element hide/show ([4a570ba](https://github.com/ringcentral/juno/commit/4a570ba496086b341ccfb8f2f8246a403773e053))
- **RCUI-224:** [AutoCollapseActions] fix props type ([76f0cde](https://github.com/ringcentral/juno/commit/76f0cdee41aff2012f715b054b8e81db9e615e6e))
- **RCUI-227:** [[Dark Theme] fix wrong color usage in components] ExpansionPanelDetails, Tabs, Thumbnail ([c44acf2](https://github.com/ringcentral/juno/commit/c44acf2858f02f216cec0a987d9c5fae33d95e47))
- **RCUI-228:** [[VirtualizedScrollContainer] fix tabIndex] fix ([0d0461b](https://github.com/ringcentral/juno/commit/0d0461bda94c9d0108c3254f0955e64d13d9f3bb))
- **RCUI-232:** [AtMention] should not show outline when focused ([44da67b](https://github.com/ringcentral/juno/commit/44da67b612c4128bc464ed814a3b286009a2dad4))
- **RCUI-74:** [Icon] mark iconColor and iconSize deprecated, replace with color and size ([9532322](https://github.com/ringcentral/juno/commit/9532322b1b2d226ef3f4efd47751f289f79d5eb3))
- **RCUI-74:** [Presence] fix issue - pass color object into div ([3f79fdc](https://github.com/ringcentral/juno/commit/3f79fdcbab10cea5da70ebc1e7eb526642e2ca9d))

### [1.1.2](https://github.com/ringcentral/juno/compare/1.1.1...1.1.2) (2020-11-03)

### Features

- **RCUI-207:** [Release] add release note with standard-version ([546063f](https://github.com/ringcentral/juno/commit/546063f6d9b7115edcd8ba0e3879210bb3b82031))
- **RCUI-90:** [Alert] init Alert component with desing spec ([44979b8](https://github.com/ringcentral/juno/commit/44979b814507d3f36f0d31752320b168483d927a))
- **RCUI-90:** [Storybook] change alert and confirm dialog name ([2c2726c](https://github.com/ringcentral/juno/commit/2c2726c1619247ee9a3fded218e6bc74e8e52868))

### Bug Fixes

- **RCUI-90:** [Alert] remove not need comment and fix comment ([f1f49df](https://github.com/ringcentral/juno/commit/f1f49dfa184081bfaca210695705ad2f1b7e8c23))
- **RCUI-90:** [Alert] support size switch ([d6da159](https://github.com/ringcentral/juno/commit/d6da1590f5240bf3ed35f62bd3001dedd8a69aad))
- **RCUI-90:** [Snapshot] update-snapshot ([36bd04c](https://github.com/ringcentral/juno/commit/36bd04ca367cd212046019d8c183f793a74ca70d))
- **RCUI-90:** [Snapshot] update-snapshot ([3f55342](https://github.com/ringcentral/juno/commit/3f5534287086ec9d175fc85b455a7c9e7b28baf9))
