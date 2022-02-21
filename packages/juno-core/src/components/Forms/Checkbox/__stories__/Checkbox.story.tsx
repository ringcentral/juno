import React, { ComponentProps } from 'react';

import { RcCheckbox, RcIcon, RcTypography } from '@ringcentral/juno';
import { Add, AddBorder, MemberBorder, People } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

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
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/a11e88130c79a89ea23900bab4855c3e872610fe/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/84E0AC7F-7238-4629-B540-9719A8E10D97?mode=design&sha=a11e88130c79a89ea23900bab4855c3e872610fe',
    },
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
