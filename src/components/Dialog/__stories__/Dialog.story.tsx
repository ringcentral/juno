import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps, FunctionComponent, useState } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../storybook';
import { RcButton } from '../../Buttons/Button';
import { RcCheckbox } from '../../Forms/Checkbox';
import { RcRadio } from '../../Forms/Radio';
import { RcRadioGroup } from '../../Forms/RadioGroup';
import { RcTypography } from '../../Typography';
import { RcDialog } from '../Dialog';
import { RcDialogActions } from '../DialogActions';
import { RcDialogContent, RcDialogContentProps } from '../DialogContent';
import { RcDialogTitle } from '../DialogTitle';
import { RcResponsive } from '../../Responsive';
import { useResponsiveContext, useResponsiveMatch } from '../../../foundation';
import { RcSwitch, RcFormControlLabel } from '../../Forms';

export default {
  title: '🚀 Cleanup Components/Dialog/Dialog',
  component: RcDialog,
  excludeStories: /DialogExampleComponent|DialogWithResponsiveExample/,
  argTypes: {
    ...sortInDocTable<keyof DialogProps>([
      'size',
      'scroll',
      'fullWidth',
      'fullScreen',
    ]),
    ...notControlInDocTable<keyof DialogProps>([]),
    ...notShowInDocTable<keyof DialogProps>([]),
  },
} as Meta;

type DialogProps = ComponentProps<typeof RcDialog>;

export const DialogExampleComponent: FunctionComponent<Partial<
  DialogProps & Pick<RcDialogContentProps, 'dividers'>
>> = ({ children, childrenSize, dividers, ...rest }) => {
  const [openState, setOpenState] = useState(false);

  const isSmall = childrenSize === 'small';
  return (
    <>
      <RcButton
        type="button"
        onClick={() => {
          setOpenState(true);
        }}
      >
        Open Children Modal
        {childrenSize && <span>(childrenSize: {childrenSize})</span>}
      </RcButton>
      <RcDialog
        childrenSize={childrenSize}
        {...rest}
        open={openState}
        onClose={(e: any) => {
          setOpenState(false);
          console.log('onClose', e);
        }}
        onExited={(e) => console.log('onExited', e)}
        onBackdropClick={(e) => console.log('onBackdropClick', e)}
        onEscapeKeyDown={(e) => console.log('onEscapeKeyDown', e)}
      >
        <RcDialogTitle>Title</RcDialogTitle>
        <RcDialogContent dividers={dividers}>
          <RcTypography>some content</RcTypography>
          <RcCheckbox title="Go" label="Do something" />
          <RcCheckbox label="Custom Field" />
          <RcRadioGroup defaultValue="mail">
            <RcRadio label="mail" value="mail" />
            <RcRadio label="address" value="address" />
          </RcRadioGroup>
          {children}
        </RcDialogContent>
        <RcDialogActions>
          <RcButton fullWidth={isSmall}>Custom Button</RcButton>
          <RcButton fullWidth={isSmall}>Custom Button</RcButton>
        </RcDialogActions>
      </RcDialog>
    </>
  );
};

export const Dialog: Story<DialogProps> = ({ children, ...args }) => {
  switchToControlKnobs();

  return <DialogExampleComponent {...args} />;
};

Dialog.storyName = 'Dialog';

Dialog.args = {};

Dialog.argTypes = {
  ...notControlInDocTable<keyof DialogProps>([]),
};

Dialog.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/dialogs/#dialog',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

const ResponsiveDialogExample = ({ ...args }) => {
  const [openState, setOpenState] = useState(false);
  const [enableRes, setEnableRes] = useState(false);

  const bp = useResponsiveContext();
  const matchResult = useResponsiveMatch();

  console.log(bp, matchResult);
  const { ltSM, xs, gtXS } = matchResult;

  return (
    <>
      <RcButton
        type="button"
        onClick={() => {
          setOpenState(true);
        }}
      >
        Open Responsive Dialog
      </RcButton>
      <RcDialog {...args} open={openState} fullScreen={ltSM}>
        <RcDialogTitle>{bp} Size</RcDialogTitle>
        <RcDialogContent>
          <RcTypography>try to resize screen</RcTypography>
          <RcFormControlLabel
            control={
              <RcSwitch
                name="enable component responsive"
                value={enableRes}
                onChange={(evt, checked) => setEnableRes(checked)}
              />
            }
            label="Enable Comp Responsive"
          />
          <RcRadioGroup row={enableRes && gtXS}>
            <RcRadio
              label={enableRes && gtXS ? 'horizontal radio' : 'vertical radio'}
            />
            <RcRadio
              label={enableRes && gtXS ? 'horizontal radio' : 'vertical radio'}
            />
          </RcRadioGroup>
        </RcDialogContent>
        <RcDialogActions
          direction={enableRes && xs ? 'vertical' : 'horizontal'}
        >
          <RcButton
            onClick={() => setOpenState(false)}
            color="danger.b04"
            fullWidth={enableRes && xs}
          >
            Cancel
          </RcButton>
          <RcButton fullWidth={enableRes && xs}>OK</RcButton>
        </RcDialogActions>
      </RcDialog>
    </>
  );
};

export const DialogWithResponsiveExample: FunctionComponent<Partial<
  DialogProps
>> = ({ children, ...args }) => {
  return (
    <>
      <RcResponsive>
        <ResponsiveDialogExample {...args}>{children}</ResponsiveDialogExample>
      </RcResponsive>
    </>
  );
};

export const DialogWithResponsive: Story<DialogProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  return (
    <DialogWithResponsiveExample {...args}>
      {children}
    </DialogWithResponsiveExample>
  );
};

DialogWithResponsive.storyName = 'Dialog with responsive';

DialogWithResponsive.args = {};

DialogWithResponsive.argTypes = {
  ...notControlInDocTable<keyof DialogProps>([]),
};

export const DialogChildrenSizes: Story<DialogProps> = () => {
  switchToControlKnobs();

  const [dividers, setDividers] = useState(false);
  return (
    <>
      <RcSwitch
        label="dividers"
        value={dividers}
        onChange={() => setDividers(!dividers)}
      />
      <br />
      <br />
      <DialogExampleComponent childrenSize="small" dividers={dividers} />
      <br />
      <br />
      <DialogExampleComponent dividers={dividers} />
    </>
  );
};

DialogChildrenSizes.storyName = 'Dialog with different children sizes';

DialogChildrenSizes.args = {};

DialogChildrenSizes.argTypes = {
  ...notControlInDocTable<keyof DialogProps>([]),
};
