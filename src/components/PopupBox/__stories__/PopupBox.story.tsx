import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps, useState } from 'react';

import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../storybook';
import { RcBox } from '../../Box';
import { RcButton } from '../../Buttons/Button';
import { RcDialogContentText } from '../../Dialog';
import { RcTextField } from '../../Forms';
import { RcPopupBox } from '../PopupBox';

export default {
  title: '🚀 Cleanup Components/PopupBox',
  component: RcPopupBox,
  argTypes: {
    ...sortInDocTable<keyof PopupBoxProps>([
      'open',
      'scroll',
      'title',
      'footer',
      'loading',
      'loadingOverlay',
      'disableEscapeKeyDown',
      'disableBackdropClick',
      'confirmButtonText',
      'confirmButtonProps',
      'onConfirm',
      'cancelButtonText',
      'cancelButtonProps',
      'onCancel',
    ]),
    ...notControlInDocTable<keyof PopupBoxProps>([]),
    ...notShowInDocTable<keyof PopupBoxProps>([]),
  },
} as Meta;

type PopupBoxProps = ComponentProps<typeof RcPopupBox>;

export const PopupBox: Story<PopupBoxProps> = ({ open: openProp, ...args }) => {
  switchToControlKnobs();

  const [open, setOpen] = useState(openProp);

  return (
    <>
      <RcButton
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Children Modal
      </RcButton>

      <RcPopupBox
        {...args}
        open={open}
        TransitionProps={{
          onExited: (e) => {
            console.log('exit');
          },
        }}
        onConfirm={() => {
          console.log('confirm');
          setOpen(false);
        }}
        onCancel={(e, reason) => {
          console.log('cancel', reason);
          setOpen(false);
        }}
      >
        <RcTextField fullWidth autoFocus />
        <RcBox height="1000px">cool</RcBox>
        <RcDialogContentText gutterBottom={false}>bottom</RcDialogContentText>
      </RcPopupBox>
    </>
  );
};

PopupBox.storyName = 'PopupBox';

PopupBox.args = {
  confirmButtonText: 'ok',
  cancelButtonText: 'cancel',
  title: 'Title',
  open: false,
};

PopupBox.argTypes = {
  ...notControlInDocTable<keyof PopupBoxProps>([]),
};

PopupBox.parameters = {
  tags: [
    {
      name: 'Source',
      value: 'w3c',
      color: 'informative.b01',
      href: 'https://www.w3schools.com/js/js_popup.asp',
    },
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/dialogs/#alerts',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};
