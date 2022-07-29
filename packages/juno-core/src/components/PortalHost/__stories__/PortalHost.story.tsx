import React, { ComponentProps, FC, useEffect, useRef, useState } from 'react';

import {
  ControlledProps,
  PortalController,
  PortalManager,
  RcButton,
  RcDialog,
  RcDialogActions,
  RcDialogContent,
  RcDialogTitle,
  RcDivider,
  RcIcon,
  RcList,
  RcListItem,
  RcListItemIcon,
  RcListItemText,
  RcPortalHost,
  RcSnackbar,
  RcSnackbarProps,
  RcTextField,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';
import { RcDrawer, RcDrawerProps } from '../../Drawer';
import {
  Delete,
  Draft,
  Email,
  Inbox,
  NewEmail,
  SendFilled,
  Voicemail,
} from '@ringcentral/juno-icon';

// FIXME: switch between Docs and canvas page issue will throw connectable error, should handle destroy

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

const drawerManager = new PortalManager();

const Drawer: FC<Omit<RcDrawerProps, 'onClose'> & ControlledProps> = ({
  onClose,
  children,
  open,
  ...rest
}) => {
  return (
    <RcDrawer
      onClose={() => {
        onClose();
      }}
      open={open}
      {...rest}
    >
      <RcList style={{ width: '100%' }}>
        <RcListItem>
          <RcListItemIcon>
            <RcIcon title="favorite" symbol={Inbox} size="small" />
          </RcListItemIcon>
          <RcListItemText primary="Inbox" />
        </RcListItem>
        <RcListItem>
          <RcListItemIcon>
            <RcIcon title="favorite" symbol={NewEmail} size="small" />
          </RcListItemIcon>
          <RcListItemText primary="Starred" />
        </RcListItem>
        <RcListItem>
          <RcListItemIcon>
            <RcIcon title="favorite" symbol={SendFilled} size="small" />
          </RcListItemIcon>
          <RcListItemText primary="Send email" />
        </RcListItem>
        <RcListItem>
          <RcListItemIcon>
            <RcIcon title="favorite" symbol={Draft} size="small" />
          </RcListItemIcon>
          <RcListItemText primary="Drafts" />
        </RcListItem>
        <RcDivider component="li" />
        <RcListItem>
          <RcListItemIcon>
            <RcIcon title="favorite" symbol={Email} size="small" />
          </RcListItemIcon>
          <RcListItemText primary="All mail" />
        </RcListItem>
        <RcListItem>
          <RcListItemIcon>
            <RcIcon title="favorite" symbol={Delete} size="small" />
          </RcListItemIcon>
          <RcListItemText primary="Trash" />
        </RcListItem>
        <RcListItem>
          <RcListItemIcon>
            <RcIcon title="favorite" symbol={Voicemail} size="small" />
          </RcListItemIcon>
          <RcListItemText primary="Voicemail" />
        </RcListItem>
      </RcList>
    </RcDrawer>
  );
};

export const PortalHostDrawerExample: Story<PortalHostProps> = () => {
  return (
    <>
      <RcPortalHost manager={drawerManager} />
      <RcButton
        onClick={() => {
          drawerManager.open(Drawer);
        }}
      >
        toggle drawer
      </RcButton>
    </>
  );
};

PortalHostDrawerExample.storyName = 'PortalHost Drawer Example';

const portalManager3 = new PortalManager();

export const PortalHostUpdatePropsExample: Story<PortalHostProps> = () => {
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

const InnerDialogPortal = (props: ControlledProps) => {
  const { onClose, open } = props;
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <RcDialog
      open={open}
      onClose={() => {
        onClose();
      }}
    >
      <RcDialogTitle>Dialog</RcDialogTitle>
      <RcDialogContent>
        <RcDialog
          maxWidth="xs"
          open={openDialog}
          onClose={() => {
            setOpenDialog(false);
          }}
        >
          <RcDialogTitle>Inner Dialog</RcDialogTitle>
          <RcDialogContent>This is content</RcDialogContent>
          <RcDialogActions>
            <RcButton
              onClick={() => {
                setOpenDialog(false);
              }}
            >
              close
            </RcButton>
          </RcDialogActions>
        </RcDialog>
        <RcButton
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          open inner dialog
        </RcButton>
      </RcDialogContent>
      <RcDialogActions>
        <RcButton
          onClick={() => {
            onClose();
          }}
        >
          close
        </RcButton>
      </RcDialogActions>
    </RcDialog>
  );
};

const innerDialogPortalManager = new PortalManager();

export const PortalHostWithInnerDialog: Story<PortalHostProps> = () => {
  const openDialog = () => {
    innerDialogPortalManager.open(InnerDialogPortal);
  };

  return (
    <>
      <RcPortalHost manager={innerDialogPortalManager} />
      <RcButton onClick={openDialog}>open dialog</RcButton>
    </>
  );
};

PortalHostWithInnerDialog.storyName = 'PortalHost With Inner Dialog';
