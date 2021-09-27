
### [1.11.4](https://github.com/ringcentral/juno/compare/v1.11.3...v1.11.4) (2021-09-27)


### ⚠ BREAKING CHANGES

* **update-icon:** [Icon] add custom tab icon, delete menu fax icon

### Features

* **DetachedWindow:** RcDetachedWindowStylesProvider ([c9b56d0](https://github.com/ringcentral/juno/commit/c9b56d01272dbed5b3e1c4ed9bbb6995898cbbc2))
* **Picker:** add PickerBaseIconButton for picker use ([96612e7](https://github.com/ringcentral/juno/commit/96612e70d6f63acc2219df25b617b4d77570f35c))
* **TimePicker:** forwardRef with TimePicker ([eb6674a](https://github.com/ringcentral/juno/commit/eb6674a3df48cca79abc60a385c5e366dd5a1db5))
* **update-icon:** [update-icon] update ([3779f0b](https://github.com/ringcentral/juno/commit/3779f0bd92d96e2600819b1136cbcb962b53398d))


### Bug Fixes

* **DatePicker:** fix whole date picker range logic, and make that support uncontrolled component ([e80fe0e](https://github.com/ringcentral/juno/commit/e80fe0e3fa2c590430ea16d0588f174f127a84ec))
* **DatePicker:** migrate and cleanup to new PickerBaseButton ([4558266](https://github.com/ringcentral/juno/commit/45582669375bdee6c37f0bdc3378c5a15cfec8c9))
* **IconButton:** fix interaction state color ([b2d14d7](https://github.com/ringcentral/juno/commit/b2d14d7c894855129ac1bb728af2953e3058c3ce))
* **IconButton:** follow interation color, `inverse` background color from .20=>.16 ([16d9c0f](https://github.com/ringcentral/juno/commit/16d9c0ff8348b06277a85fb9f9c653567df21de4))
* **IconButton:** follow interation color, `inverse` hover 0.4=>0.24, focus 0.4=>0.32 ([a0347d1](https://github.com/ringcentral/juno/commit/a0347d178fd573d53f0103d1fca0841bdb2c9e2a))
* **IconButton:** text inside icon also set color style ([6477efc](https://github.com/ringcentral/juno/commit/6477efceda0c49e9fdc75929073c4d001cf45e07))
* **Picker:** fix not need memo and error naming ([97eea91](https://github.com/ringcentral/juno/commit/97eea918ed896090056405dadf07e610c9266df0))
* **TimePicker:** migrate and cleanup to new PickerBaseButton ([b3e5213](https://github.com/ringcentral/juno/commit/b3e52138dfe07fd7cba1921aeab24299bcfb02ac))

### [1.11.3](https://github.com/ringcentral/juno/compare/v1.11.2...v1.11.3) (2021-09-18)


### ⚠ BREAKING CHANGES

* **DialogActions:** [DialogActions] vertical from `spacing(4)` to `spacing(2)`
* **update-icon:** [Icon] add connect icon
* **Downshift:** [Downshift] change default group way to normal group, previous is expanded group

### Features

* **DatePicker:** migrate deprecated `RcButtonBar` to `RcIconButtonGroup` ([c69b7ac](https://github.com/ringcentral/juno/commit/c69b7ac696163956a17e0e5879884070680a637f))
* **DatePicker:** support today disabled when today is not validate item ([0ddca3c](https://github.com/ringcentral/juno/commit/0ddca3c1d12e067393dcba9fb052e6e3b4eece84))
* **Dialog:** support childrenSize with `DialogActions`, `DialogContent`, `DialogTitle` ([32d5ced](https://github.com/ringcentral/juno/commit/32d5cede898d6710a7964b5f0eeed7438454c759))
* **Dialog:** support typography size with DialogContentText and Title ([fbdd52b](https://github.com/ringcentral/juno/commit/fbdd52b0c5c840eccff272cb2133aa7030929fd7))
* **Dialog,Snackbar:** make Dialog, Snackbar support portalMnager ([22da29d](https://github.com/ringcentral/juno/commit/22da29d2ccc6e8bda99f8c9102703bee9178482a))
* **DialogActions:** change default space between items to `spacing(2)` ([7d5cabc](https://github.com/ringcentral/juno/commit/7d5cabc1e8d901d05db2e96f2fb28aaae8ef8053))
* **DialogActions:** support `reverse` and fix mui gutterBottom bug ([66ee6a0](https://github.com/ringcentral/juno/commit/66ee6a00b50df252dfd4b6c94e1f3b8b55933757))
* **DialogActions:** when size is `small` default  direction to be  `vertical` ([6beed04](https://github.com/ringcentral/juno/commit/6beed04e05e91ecf279bac33844b689e908563f0))
* **Downshift:** support `groupVariant` and `groupExpanded` ([8819d15](https://github.com/ringcentral/juno/commit/8819d1511a054913b84dc98cb65f206534c569b4))
* **Downshift:** support action with `getFilterResultItems` to get current filter result items ([93c2811](https://github.com/ringcentral/juno/commit/93c281118113c4818b45a88643092a43258b95d2))
* **PopupBox:** migrate to Dialog new API ([fd0a808](https://github.com/ringcentral/juno/commit/fd0a8084f4e7110fe47fffdec0a88d63355ddc3c))
* **PortalHost:** fix some problem and refactor types ([aea62cb](https://github.com/ringcentral/juno/commit/aea62cb081ab17c2af12c6f2de95dadee3da1a3a))
* **PortalHost:** init PortalHost ([94a3f5b](https://github.com/ringcentral/juno/commit/94a3f5b74bd30d397236a18afa98ce615d6af8af))
* **PortalManager:** init PortalManager ([0a7de51](https://github.com/ringcentral/juno/commit/0a7de5157dac0a5d75b375b2067363955a9b23b9))
* **Switch:** fix error token from `highContrast` to `neutral-f11` ([9a66a26](https://github.com/ringcentral/juno/commit/9a66a267ca236429baf7293acbcffcc807470121))
* **update-icon:** [update-icon] update ([9b496f7](https://github.com/ringcentral/juno/commit/9b496f725093cd66599db88a1d23e2593bc54c57))
* **useHighlightScroll:** support custom topHighlightIndex ([0487db5](https://github.com/ringcentral/juno/commit/0487db5f7f80da4c579c4a5d8f5e97872c2d178f))


### Bug Fixes

* **Downshift:** fix groupStateMap logic with group name ([fddf20b](https://github.com/ringcentral/juno/commit/fddf20b03b987b4bebd9ca4cdc71e7519f61aaaa))
* **ListItem:** move default baseColorProp into style ([5772488](https://github.com/ringcentral/juno/commit/5772488d7f82a5237bbc5655b6d0b205f01d3278))

### [1.11.2](https://github.com/ringcentral/juno/compare/v1.11.1...v1.11.2) (2021-08-26)


### ⚠ BREAKING CHANGES

* **OutlineTextField:** [TextField] `variant=“outline”` font-size from `subheading1` to `body1`
* **OutlineTextField:** [TextField] `variant=“outline”` clear icon follow size auto change
* **Button:** [Button] when loading, default will disabled button
* **update-icon:** [Icon] gif-D rename to gif-file-D

### Features

* **Button:** support `mask` disabledVariant ([cc7c520](https://github.com/ringcentral/juno/commit/cc7c520436d5fc36a637a3423c887b95a2ebfeca))
* **Button:** support loading mask ([83185d6](https://github.com/ringcentral/juno/commit/83185d644bbb12c088b0698b9d91848121945d4d))
* **SplitButton:** support `loading` ([43c1264](https://github.com/ringcentral/juno/commit/43c12645f783077b367e413e1ed2d2a283f8de1a))
* **update-icon:** [update-icon] fix gif dark icon name ([829d3d8](https://github.com/ringcentral/juno/commit/829d3d8cf1900e17613e4a90a98cb02a508bd4bd))


### Bug Fixes

* **Button:** loading mask use `neutral.b01` with `0.32` opacity ([02d12c5](https://github.com/ringcentral/juno/commit/02d12c50961bc5943c84b0cc2a2743783f1bd7a3))
* **Button:** when loading button always be disabled ([d324704](https://github.com/ringcentral/juno/commit/d32470475b4a35c382b43281b3e4eac641264c19))
* **Downshift:** fix autocomplete mode value be clear issue ([ca8cfed](https://github.com/ringcentral/juno/commit/ca8cfeddc03695a031ddcb9937efd8323c97fe3b))
* **InlineEditable:** fix empty placeholder problem ([216e4c5](https://github.com/ringcentral/juno/commit/216e4c59e77aa89fd7bb6261c471351f2ef1517b))
* **OutlineTextField:** add OutlineTextField sizes with token ([c946add](https://github.com/ringcentral/juno/commit/c946adda0e6f1d079307463e6efef4f3a4954e40))
* **OutlineTextField:** fix typography size miss use in OutlineTextField ([2c8d98a](https://github.com/ringcentral/juno/commit/2c8d98abba67d98cf37ec1ef46863c98e5190774))
* **script:** export miss `RcThemeProviderProps` ([6b8cedf](https://github.com/ringcentral/juno/commit/6b8cedf54bc11609ae59717661e7a7267aae6be1))

### [1.11.1](https://github.com/ringcentral/juno/compare/1.11.0...1.11.1) (2021-08-19)


### Features

* **Icon update icon:** update icon ([943d970](https://github.com/ringcentral/juno/commit/943d9702c582d42629504abcf91ab6d0602d105a))


### Bug Fixes

* **Downshift:** fix useDownshift set inner input value not emit issue ([4f1d898](https://github.com/ringcentral/juno/commit/4f1d898a167b096520a2e2e34d385029351818cd))

## [1.11.0](https://github.com/ringcentral/juno/compare/1.10.1...1.11.0) (2021-08-19)


### Features

* **Icon add dark prop to svg component:** update icon ([6adbbaf](https://github.com/ringcentral/juno/commit/6adbbafa67289297c277864cee8dd75145c0ae08))
* **Responsive:** update storybook ([fc135ff](https://github.com/ringcentral/juno/commit/fc135ff3f763d82f34924bdd683a6200f790b8c7))

### [1.10.1](https://github.com/ringcentral/juno/compare/1.10.0...1.10.1) (2021-08-19)


### Features

* **Dialog:** add Responsive dialog Example ([44e9ced](https://github.com/ringcentral/juno/commit/44e9ceda3530b9caaff792261a278bfcf8332f4a))
* **Drawer:** add multi drawer example ([fdfcf8c](https://github.com/ringcentral/juno/commit/fdfcf8c9624d22f0de118883c88e2476831b035b))
* **Hidden:** reexport Hidden component ([f997e68](https://github.com/ringcentral/juno/commit/f997e68956fc33da89d99d8f2a14036805ce1ee5))


### Bug Fixes

* **Deepmerge:** switch deepmerge to mui inner deepmerge ([a70b3f1](https://github.com/ringcentral/juno/commit/a70b3f1951a948a90915890aa052e1726a107429))
* **DialPad:** switch to useAudio ([5f4d3d7](https://github.com/ringcentral/juno/commit/5f4d3d763763f1668fd8b3cb909b1d726ce4e610))

## 1.10.0 (2021-08-19)


### ⚠ BREAKING CHANGES

* **useHiddenToFocus:** [useHiddenToFocus] rename to `useHiddenTabindex`
* **Deprecated:** [Deprecated] remove `TextField`
* **Deprecated:** [Deprecated] remove `RcFabButton`, `RcFabIconButton`, `RoundButton`
* **foundation:** [foundation] whole file structure  have a big cleanup, should switch all import to @ringcentral/juno, if there is not have that file, should move that file into your repo, that will no longer provide from juno
* **theme style:** [theme style] remove not need style method
* **lineClamp:** [lineClamp] maxHeight not more have height * 4
* **Deprecated:** [Deprecated] remove `AnnotationRightRail`
* **Deprecated:** [Deprecated] remove `LozengeButton`, `ExpansionPanel`
* **Autocomplete:** [Autocomplete] deprecated `Autocomplete`

### Features

* **Button:** change button small font-size to `caption2` ([f5bc051](https://github.com/ringcentral/juno/commit/f5bc05161e475894d27861367ec619aff8a250fd))
* **Button:** change button small padding from 12px to 16px ([fb2e3ab](https://github.com/ringcentral/juno/commit/fb2e3ab80f69e62e5f6ed293cb958c09002e2ee2))
* **Card move Jui card example into Juno:** add media card example and icon card example & remove knob in simple card example ([24b67ca](https://github.com/ringcentral/juno/commit/24b67ca90892944d6ff3650110dc05d7b65113d6))
* **CustomTheme:** support custom theme with styled-component type, and palette2 ([43ff409](https://github.com/ringcentral/juno/commit/43ff4090e049b2a9ed48cf79b5449888fa1cd186))
* **Downshift:** support `onOpen` and `onClose` and `open` ([acfa710](https://github.com/ringcentral/juno/commit/acfa710146f9aa72731f892190665c9efc565bac))
* **Downshift:** support autocomplete mode ([bca99a1](https://github.com/ringcentral/juno/commit/bca99a1b6e2007408a8d36b0da7a494407f548c6))
* **Downshift:** support custom `renderInput` ([e59a4b1](https://github.com/ringcentral/juno/commit/e59a4b173b39f49749ad0e4c6644d9efa8b26de2))
* **Downshift:** support padding with SuggestionList ([4e8d951](https://github.com/ringcentral/juno/commit/4e8d95196eb906de57f4971f7c04bdd5ea03ec74))
* **Test:** add UT for `useKeyboardMoveFocus` ([1edc754](https://github.com/ringcentral/juno/commit/1edc75419b3d4c29a7954c66c53bd602d2576d73))
* **Text support two(or more) line ellipsis:** add jsdoc and remove useless style ([dceed35](https://github.com/ringcentral/juno/commit/dceed354ee104eed9380d6f6b2b27211149191e1))
* **Text support two(or more) line ellipsis:** add line clamp support ([3541f2d](https://github.com/ringcentral/juno/commit/3541f2d2e1667cae5430a639cc0fdf85b083a6e3))
* **Theme:** fix token use ([1764e87](https://github.com/ringcentral/juno/commit/1764e87cd0e9ece53a3c59b2645e0f871b6c818b))
* **Theme:** not merge mui base theme token ([376b566](https://github.com/ringcentral/juno/commit/376b5666d6fd038a1017c25fa7404ed500a9c5b3))
* **Theme:** update scss theme ([d2b5135](https://github.com/ringcentral/juno/commit/d2b513558ec88f9830146c96d19d06a538e31778))


### Bug Fixes

* **Autocomplete:** deprecated `Autocomplete` ([b0d60ff](https://github.com/ringcentral/juno/commit/b0d60ffee7e0ed77597fce901fbe72134e1d0019))
* **DafaultTheme:** fix error default theme ([2a573c7](https://github.com/ringcentral/juno/commit/2a573c720bc6b48e3456cc9ad16868a3968f38c2))
* **Deprecated:** remove `AnnotationRightRail` ([b67b46f](https://github.com/ringcentral/juno/commit/b67b46f2d599ff0a8fcd3ce1558efea0d674ae0a))
* **Deprecated:** remove `LozengeButton`, `ExpansionPanel` ([552b875](https://github.com/ringcentral/juno/commit/552b875ed3e3e8eed00840414884755d468c745a))
* **Deprecated:** remove `RcFabButton`, `RcFabIconButton`, `RoundButton` ([866ab11](https://github.com/ringcentral/juno/commit/866ab1120bf972c02e268921d1e1967bfacca87b))
* **Deprecated:** remove `TextField` and move inner TextField outside ([8e2a874](https://github.com/ringcentral/juno/commit/8e2a874fe508a25f97732a7abb3af3c32d807c2b))
* **DialPad:** also set srcObject as null ([8296dc4](https://github.com/ringcentral/juno/commit/8296dc445554ae0da327a336ad4fab8a52d58779))
* **DialPad:** remove audio instance after destroy ([5d9de27](https://github.com/ringcentral/juno/commit/5d9de2716667f9f7d8fdda8f50f74afe7a69094c))
* **Downshift:** fix safari tab and enter in composition mode issue ([3a8202b](https://github.com/ringcentral/juno/commit/3a8202b4cda4db65e429253caa87de77a2476ea8))
* **foundation:** cleanup whole foundation ([0d8f71c](https://github.com/ringcentral/juno/commit/0d8f71ccf7a601f3f0118a75629ae2ac325f8913))
* **IconButton:** remove transition delay and easing ([9cc841b](https://github.com/ringcentral/juno/commit/9cc841b9a6cd79e2c1ac70a246805896b6754dab))
* **lineClamp:** maxHeight not more have height * 4 ([a0a54f8](https://github.com/ringcentral/juno/commit/a0a54f8fbfef0bf1e3f04998af0ac78b6a45f80a))
* **package:** remove not need `@types/smoothscroll-polyfill` ([351bd63](https://github.com/ringcentral/juno/commit/351bd638fdcde770a5d788f1157eab5310b0ff22))
* **Path:** TextField related path change ([506875e](https://github.com/ringcentral/juno/commit/506875e02eee332f193228362082a9e3b8a21068))
* **Script:** fix json to scss method ([467ae93](https://github.com/ringcentral/juno/commit/467ae93b02c9b9adfcf1b277f67cbc6c982bf980))
* **theme style:** remove not need style method ([6bf13b4](https://github.com/ringcentral/juno/commit/6bf13b45ba4185353bdd02a30a0e59e7115539c0))
* **Type:** fix rippleStyle type ([04f4d17](https://github.com/ringcentral/juno/commit/04f4d17a9301945b2bc5e2714bf01f9d5e1c1386))
* **useHiddenToFocus:** rename to `useHiddenTabindex` ([3c0624d](https://github.com/ringcentral/juno/commit/3c0624d87b7a6713815d4cf10788bfbb2aa0af1e))
* **useKeyboardMoveFocus:** fix loop when total is zero ([e8ca53e](https://github.com/ringcentral/juno/commit/e8ca53e3757e14f233107e43c1bb31c29df72aa7))

### 1.11.1 (2021-08-17)


### Features

* **project:** init project db3a050
