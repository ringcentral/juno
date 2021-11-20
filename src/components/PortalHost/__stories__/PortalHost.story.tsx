import { Meta, Story } from '@storybook/react';
import React, { ComponentProps, FC, useEffect, useRef, useState } from 'react';
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
import { RcTextField } from '../../Forms';
import { RcSnackbar, RcSnackbarProps } from '../../Snackbar';
import { RcPortalHost } from '../PortalHost';
import {
  ControlledProps,
  PortalController,
  PortalManager,
} from '../PortalManager';

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
          onClick={() => {
            portalManager
              .open(Dialog, {
                props: { n: n + 1 },
              })
              .onClosed.then((feedback) => {
                if (feedback) setContent(feedback);
              });
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

const portalManager2 = new PortalManager();

const Snackbar: FC<SnackbarProps> = ({ onClose, children, ...rest }) => {
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
      <RcPortalHost manager={portalManager2} />
      <RcButton
        onClick={() => {
          if (!open) {
            snackbarRef.current = portalManager2.open(Snackbar, {
              props: { autoHideDuration: 2000, message: '233' },
            });

            snackbarRef.current.onOpened.then(() => {
              setOpen(true);
            });
            snackbarRef.current.onClosed.then(() => {
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

const portalManager3 = new PortalManager();

export const PortalHostUpdatePropsExample: Story<PortalHostProps> = () => {
  switchToControlKnobs();

  const snackbarRef = useRef<PortalController<SnackbarProps, undefined>>();

  const [value, setValue] = useState('Example');

  useEffect(() => {
    snackbarRef.current = portalManager3.open(Snackbar, {
      props: { autoHideDuration: null, message: value },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RcPortalHost manager={portalManager3} />
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
          snackbarRef.current?.updateProps({ message: value });
        }}
      >
        update props
      </RcButton>
    </>
  );
};

PortalHostUpdatePropsExample.storyName = 'PortalHost Update Props Example';

class TagPortalManager extends PortalManager<{ tag: string }> {
  closeByTag(tag: string) {
    for (const portal of this.portalStore.portals) {
      if (portal.portalController.data?.tag === tag) {
        this.closeByID(portal.id);
      }
    }
  }
}
const tagPortalManager = new TagPortalManager();

export const PortalHostWithAdditionExample: Story<PortalHostProps> = () => {
  switchToControlKnobs();

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);

    if (!open) {
      tagPortalManager.open(Snackbar, {
        props: { message: '233' },
        data: { tag: 'a-tag' },
      });
      return;
    }
    tagPortalManager.closeByTag('a-tag');
  };

  return (
    <>
      <RcPortalHost manager={tagPortalManager} />
      <RcButton onClick={toggle}>{open ? 'close' : 'open'} by tag</RcButton>
    </>
  );
};

PortalHostWithAdditionExample.storyName = 'PortalHost With Addition Example';
