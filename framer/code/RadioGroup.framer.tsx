import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcRadioGroup: React.ComponentType = ({
  _children,
  value: valueProp,
  ...rest
}: any) => {
  const [value, setValue] = useState(valueProp);

  const children = _children.map((a: any) => {
    return a.props.children;
  });

  return (
    <lib.RcThemeProvider>
      {children.length > 0 ? (
        <lib.RcRadioGroup
          {...rest}
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>, value) => {
            setValue(value);
          }}
        >
          {children}
        </lib.RcRadioGroup>
      ) : (
        <div>choice children</div>
      )}
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcRadioGroup, {
  //   defaultValue: {
  //     title: "defaultValue",
  //     type: ControlType.Object,
  //     /** description: "The default `input` element value. Use when the component is not controlled.", */
  //     defaultValue: undefined,
  //   },
  _children: {
    title: 'children',
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
    /** description: "The content of the component.", */
  },
  row: {
    title: 'row',
    type: ControlType.Boolean,
    /** description: "Display group of elements in a compact row.", */
    defaultValue: false,
  },
  //   name: {
  //     title: "name",
  //     type: ControlType.String,
  //     /** description: "The name used to reference the value of the control.
  // If you don't provide this prop, it falls back to a randomly generated name.", */
  //     defaultValue: undefined,
  //   },
  value: {
    title: 'value',
    type: ControlType.String,
    /** description: "Value of the selected radio button. The DOM API casts this to a string.", */
    defaultValue: undefined,
  },
});

export default RcRadioGroup;
