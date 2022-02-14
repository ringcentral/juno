import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcAccordionDetails: React.ComponentType = ({
  _children,
  ...rest
}: any) => {
  const children = _children.map((a: any) => {
    return a.props.children || a;
  });
  return (
    <lib.RcThemeProvider>
      <lib.RcAccordionDetails {...rest}>
        {children.length > 0 ? (
          children
        ) : (
          <div style={{ background: 'white' }}>add children</div>
        )}
      </lib.RcAccordionDetails>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcAccordionDetails, {
  _children: {
    title: 'children',
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
    /** description: "The content of the accordion details.", */
  },
});

export default RcAccordionDetails;
