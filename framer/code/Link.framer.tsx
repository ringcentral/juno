import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcLink: React.ComponentType = ({ _children, ...rest }: any) => {
  return (
    <lib.RcThemeProvider>
      <lib.RcLink {...rest}>{_children}</lib.RcLink>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcLink, {
  _children: {
    title: 'children',
    type: ControlType.String,
    defaultValue: 'Link',
  },
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "color for Link display, support palette pass", */
    defaultValue: 'informative.f02',
    options: lib.colorOptions,
  },
  href: {
    type: ControlType.String,
    title: 'href',
    defaultValue: 'http://127.0.0.1',
  },
  target: {
    type: ControlType.String,
    title: 'target',
    defaultValue: '_blank',
  },
  disabled: {
    title: 'disabled',
    type: ControlType.Boolean,
    /** description: "is that link is disabled", */
    defaultValue: false,
  },
  variant: {
    title: 'variant',
    type: ControlType.Enum,
    /** description: "variant of Link, default is body1", */
    defaultValue: 'body1',
    options: [
      'inherit',
      'display4',
      'display3',
      'display2',
      'display1',
      'headline2',
      'headline1',
      'title2',
      'title1',
      'subheading2',
      'subheading1',
      'body2',
      'body1',
      'caption2',
      'caption1',
    ],
  },
  download: {
    title: 'download',
    type: ControlType.Boolean,
    /** description: "is that href can be download", */
    defaultValue: false,
  },
  // Component: {
  //   title: "Component",
  //   type: ControlType.Object,
  //   /** description: "root render element, default is `<a />`", */
  //   defaultValue: "a",
  // },
});

export default RcLink;
