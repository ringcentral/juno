import { useState } from 'react';

import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcAccordion: React.ComponentType = ({ _children, ...rest }: any) => {
  const children = _children.map((a: any) => {
    return a.props.children;
  });

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <lib.RcThemeProvider>
      <lib.RcAccordion
        {...rest}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        {children}
      </lib.RcAccordion>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcAccordion, {
  _children: {
    title: 'children',
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
    /** description: "The content of the accordion.", */
  },
  expanded: {
    title: 'expanded',
    type: ControlType.Boolean,
    /** description: "If `true`, expands the accordion, otherwise collapse it.
Setting this prop enables control over the accordion.", */
    defaultValue: false,
  },
  disabled: {
    title: 'disabled',
    type: ControlType.Boolean,
    /** description: "If `true`, the accordion will be displayed in a disabled state.", */
    defaultValue: false,
  },
  //   component: {
  //     title: "component",
  //     type: ControlType.Object,
  //     /** description: "The component used for the root node.
  // Either a string to use a HTML element or a component.", */
  //     defaultValue: undefined,
  //   },
  elevation: {
    title: 'elevation',
    type: ControlType.Number,
    /** description: "Shadow depth, corresponds to `dp` in the spec.
It accepts values between 0 and 24 inclusive.", */
    defaultValue: undefined,
  },
  variant: {
    title: 'variant',
    type: ControlType.Enum,
    /** description: "The variant to use.", */
    defaultValue: 'elevation',
    options: ['outlined', 'elevation'],
  },
  defaultExpanded: {
    title: 'defaultExpanded',
    type: ControlType.Boolean,
    /** description: "If `true`, expands the accordion by default.", */
    defaultValue: false,
  },
  //   TransitionComponent: {
  //     title: "TransitionComponent",
  //     type: ControlType.Object,
  //     /** description: "The component used for the collapse effect.
  // [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.", */
  //     defaultValue: undefined,
  //   },
  //   TransitionProps: {
  //     title: "TransitionProps",
  //     type: ControlType.Object,
  //     /** description: "Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.", */
  //     defaultValue: undefined,
  //   },
});

export default RcAccordion;
