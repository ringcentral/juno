import 'focus-visible';

import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import React, { Component, ReactNode } from 'react';

import {
  RcIconMap,
  RcIconService,
} from '../../../components/Icon/utils/IconService';
import { ThemeProvider as StyledThemeProvider } from '../../styled-components';
import { RcTheme, RcThemeInput } from '../theme.type';
import { RcThemeHandler } from '../ThemeHandler';

type RcThemeProviderProps = {
  themeName?: string;
  theme?: RcThemeInput;
  icons?: RcIconMap;
  children?: ReactNode;
};

type RcThemeProviderPropsState = {
  theme: RcTheme | null;
};

/**
 * @deprecated
 * should switch to release ThemeProvider,
 * and control theme cache by yourself
 */
class RcThemeProvider extends Component<
  RcThemeProviderProps,
  RcThemeProviderPropsState
> {
  themeInstance = RcThemeHandler.getInstance();

  constructor(props: RcThemeProviderProps) {
    super(props);
    this.state = {
      theme: null,
    };
  }

  async componentDidMount() {
    // That need set icon maps firstly
    this.themeInstance.themeProviderRef += 1;
    this._setIconMaps(this.props.icons);

    // When init listen theme change
    this.themeInstance.listen(this._updateTheme);

    await this._initTheme();
  }

  // TODO: Icon template for icons map, that will remove in the feature.
  private _setIconMaps(icons: RcThemeProviderProps['icons']) {
    if (icons) {
      RcIconService.setInstance(icons);
    }
  }

  private async _initTheme() {
    const { themeName, theme } = this.props;

    let themeOptions: RcThemeInput = {};
    if (theme) {
      themeOptions = theme;
    } else if (themeName) {
      themeOptions = await this.themeInstance.read(themeName);
    }

    this._setTheme(themeOptions);
  }

  shouldComponentUpdate(
    nextProps: RcThemeProviderProps,
    nextState: RcThemeProviderPropsState,
  ) {
    // when props is not same set theme
    if (this.props.theme !== nextProps.theme && nextProps.theme) {
      this._setTheme(nextProps.theme);
    }

    // If theme name changed, read theme and set theme again
    if (this.props.themeName !== nextProps.themeName && nextProps.themeName) {
      this.themeInstance.read(nextProps.themeName).then((theme) => {
        this._setTheme(theme);
      });
    }

    // If icons changed, update icon map
    if (this.props.icons !== nextProps.icons && nextProps.icons) {
      this._setIconMaps(nextProps.icons);
    }

    // only render when state theme change
    return (
      this.props.children !== nextProps.children ||
      this.state.theme !== nextState.theme
    );
  }

  private _updateTheme(theme: RcTheme) {
    this.setState({ theme });
  }

  private _setTheme(themeOptions: RcThemeInput) {
    const theme = this.themeInstance.setTheme(themeOptions, false);
    this._updateTheme(theme);
  }

  componentWillUnmount() {
    this.themeInstance.themeProviderRef -= 1;
    if (this.themeInstance.themeProviderRef === 0) {
      this.themeInstance.destroy();
    }
  }

  render() {
    const { theme } = this.state;
    const { children } = this.props;
    return (
      theme && (
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <StyledThemeProvider theme={theme}>
              <React.Fragment>{children}</React.Fragment>
            </StyledThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      )
    );
  }
}

export { RcThemeProvider, RcThemeProviderProps };
