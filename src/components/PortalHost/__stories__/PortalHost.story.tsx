import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps, FC, useRef, useState, useEffect } from 'react';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../storybook';
import { RcButton } from '../../Buttons';
import {
  RcDialog,
  RcDialogActions,
  RcDialogContent,
  RcDialogTitle,
} from '../../Dialog';
import { RcPortalHost } from '../PortalHost';
import {
  PortalManager,
  PortalController,
  ControlledProps,
  UniqID,
} from '../PortalManager';
import { RcSnackbar, RcSnackbarProps } from '../../Snackbar';
import { usePortalController } from '../PortalControllerProvider';
import { RcTextField } from '../../Forms';

export default {
  title: '🚀 Cleanup Components/PortalHost',
  component: RcPortalHost,
  argTypes: {
    ...sortInDocTable<keyof PortalHostProps>([]),
    ...notControlInDocTable<keyof PortalHostProps>([]),
    ...notShowInDocTable<keyof PortalHostProps>([]),
  },
} as Meta;

type PortalHostProps = ComponentProps<typeof RcPortalHost>;

const portalManager = new PortalManager();

type DialogProps = ControlledProps<{ n?: number }, string>;

const Dialog: FC<DialogProps> = ({ onClose, n = 0, open }) => {
  const [content, setContent] = useState('no content');

  return (
    <RcDialog
      open={open}
      onClose={(_, reason) => {
        onClose(`dialog ${n} closed, reason: ${reason}`);
      }}
    >
      <RcDialogTitle>Base Dialog {n}</RcDialogTitle>
      <RcDialogContent>{content}</RcDialogContent>
      <RcDialogActions>
        <RcButton
          onClick={async () => {
            const feedback = await portalManager.open(Dialog, {
              props: { n: n + 1 },
            }).afterClosed;

            if (feedback) setContent(feedback);
          }}
        >
          open Dialog
        </RcButton>
        <RcButton
          onClick={() => {
            onClose(`dialog ${n} closed, reason: closed button`);
          }}
        >
          close
        </RcButton>
      </RcDialogActions>
    </RcDialog>
  );
};

export const PortalHostDialogExample: Story<PortalHostProps> = () => {
  switchToControlKnobs();

  return (
    <>
      <RcPortalHost manager={portalManager} />
      <RcButton
        onClick={() => {
          portalManager.open(Dialog, { props: { n: 0 } });
        }}
      >
        open dialog
      </RcButton>
    </>
  );
};

PortalHostDialogExample.storyName = 'PortalHost Dialog Example';

type SnackbarProps = ControlledProps<RcSnackbarProps, undefined>;

const Snackbar: FC<SnackbarProps> = ({ onClose, children, ...rest }) => {
  // onClose no need check reason
  return (
    <RcSnackbar
      onClose={(_, reason) => {
        if (reason !== 'clickaway') onClose();
      }}
      {...rest}
    />
  );
};

export const PortalHostSnackbarExample: Story<PortalHostProps> = () => {
  switchToControlKnobs();

  const [open, setOpen] = useState(false);
  const snackbarRef = useRef<PortalController<SnackbarProps, undefined>>();

  return (
    <>
      <RcPortalHost manager={portalManager} />
      <RcButton
        onClick={() => {
          if (!open) {
            snackbarRef.current = portalManager.open(Snackbar, {
              props: { autoHideDuration: 2000, message: '233' },
            });

            snackbarRef.current.afterOpened.then(() => {
              setOpen(true);
            });
            snackbarRef.current.afterClosed.then(() => {
              setOpen(false);
            });
          } else {
            snackbarRef.current?.close();
          }
        }}
      >
        {open ? 'close' : 'open'} snackbar
      </RcButton>
    </>
  );
};

PortalHostSnackbarExample.storyName = 'PortalHost Snackbar Example';

export const PortalHostUpdatePropsExample: Story<PortalHostProps> = () => {
  switchToControlKnobs();

  const snackbarRef = useRef<PortalController<SnackbarProps, undefined>>();

  const [value, setValue] = useState('');

  useEffect(() => {
    snackbarRef.current = portalManager.open(Snackbar, {
      props: { autoHideDuration: null, type: 'error', message: value },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RcPortalHost manager={portalManager} />
      <br />
      <RcTextField
        placeholder="snackbar message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <br />
      <RcButton
        onClick={() => {
          // cover
          // snackbarRef.current?.updateProps({ message: value });
          // combine
          snackbarRef.current?.updateProps({ message: value }, true);
        }}
      >
        update props
      </RcButton>
    </>
  );
};

PortalHostUpdatePropsExample.storyName = 'PortalHost Update Props Example';

const portalManagerWithAddition = new PortalManager<{ tag: string }>();

export const PortalHostWithAdditionExample: Story<PortalHostProps> = () => {
  switchToControlKnobs();

  useEffect(() => {
    const { id, updateProps } = portalManagerWithAddition.open(Snackbar, {
      addition: { tag: 'a-tag' },
    });

    updateProps({
      message: portalManagerWithAddition.getAdditionByID(id)?.tag,
    });
  }, []);

  return (
    <>
      <RcPortalHost manager={portalManagerWithAddition} />
    </>
  );
};

PortalHostWithAdditionExample.storyName = 'PortalHost With Addition Example';
