import React, { ComponentProps } from 'react';

import { Meta, Story } from '@storybook/react';

import { Add, AddBorder, MemberBorder, People } from '../../../../icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcIcon } from '../../../Icon';
import { RcTypography } from '../../../Typography';
import { RcCheckbox } from '../Checkbox';

export default {
  title: '🚀 Cleanup Components/Forms/Checkbox',
  component: RcCheckbox,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    ...sortInDocTable<keyof CheckboxProps>([
      'size',
      'checked',
      'disabled',
      'autoFocus',
      'readOnly',
      'required',
      'error',
      'followColorWhenUnChecked',
    ]),
    ...notControlInDocTable<keyof CheckboxProps>([]),
    ...notShowInDocTable<keyof CheckboxProps>([]),
  },
} as Meta;

type CheckboxProps = ComponentProps<typeof RcCheckbox>;

export const Checkbox: Story<CheckboxProps> = ({ ...args }) => {
  switchToControlKnobs();
  return <RcCheckbox {...args} />;
};

Checkbox.args = {
  color: 'interactive.f01',
  size: 'medium',
};

Checkbox.argTypes = {
  ...notControlInDocTable<keyof CheckboxProps>([]),
};

Checkbox.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/checkboxes/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const CheckboxExamples: Story<CheckboxProps> = () => {
  switchToControlKnobs();

  return (
    <div>
      <RcTypography
        color="neutral.f06"
        variant="headline1"
        paragraph
        display="block"
      >
        Label placement end
      </RcTypography>
      <RcCheckbox
        formControlLabelProps={{
          labelPlacement: 'end',
        }}
        label="Label"
      />
      <br />
      <br />
      <br />
      <RcTypography
        color="neutral.f06"
        variant="headline1"
        paragraph
        display="block"
      >
        Label placement start
      </RcTypography>
      <RcCheckbox
        formControlLabelProps={{
          labelPlacement: 'start',
        }}
        label="Label"
      />
    </div>
  );
};

CheckboxExamples.storyName = 'Checkbox Examples';

export const CheckboxWithCustomIcon: Story<CheckboxProps> = () => {
  return (
    <>
      <RcCheckbox
        label="Are you available?"
        icon={<RcIcon symbol={MemberBorder} />}
        checkedIcon={<RcIcon symbol={People} />}
      />
      <RcCheckbox
        label="Is that ok?"
        icon={<RcIcon symbol={AddBorder} />}
        checkedIcon={<RcIcon symbol={Add} />}
      />
    </>
  );
};

CheckboxWithCustomIcon.storyName = 'Checkbox with custom icon';
