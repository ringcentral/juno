import React, { ComponentProps, FunctionComponent, useState } from 'react';

import range from 'lodash/range';

import {
  flexCenterStyle,
  radius,
  RcAvatar,
  RcBox,
  RcButton,
  RcDialog,
  RcDialogContent,
  RcDialogTitle,
  RcDivider,
  RcDrawer,
  RcIcon,
  RcList,
  RcListItem,
  RcListItemIcon,
  RcListItemText,
  RcMenuItem,
  RcMenuList,
  RcPaper,
  RcSelect,
  RcSwitch,
  RcText,
  RcTypography,
  spacing,
  styled,
} from '@ringcentral/juno';
import {
  Delete,
  Draft,
  Email,
  Inbox,
  NewEmail,
  SendFilled,
  Voicemail,
} from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import avatar from '../../Avatar/__stories__/img/avatar.jpg';

export default {
  title: '🚀 Cleanup Components/Drawer',
  component: RcDrawer,
  argTypes: {
    ...sortInDocTable<keyof DrawerProps>([
      'anchor',
      'inlinePaper',
      'elevation',
    ]),
    ...notControlInDocTable<keyof DrawerProps>(['open', 'variant']),
    ...notShowInDocTable<keyof DrawerProps>([]),
  },
} as Meta;

type DrawerProps = ComponentProps<typeof RcDrawer>;

type Anchor = NonNullable<DrawerProps['anchor']>;

const CustomPaper = styled(RcPaper)`
  ${flexCenterStyle}
  flex-direction: column;
  padding: ${spacing(4, 6, 3, 6)};

  .mt-2 {
    margin-top: ${spacing(2)};
  }
`;

const List: FunctionComponent<{
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}> = ({ onClick }) => (
  <RcList style={{ width: '100%' }}>
    <RcListItem onClick={onClick}>
      <RcListItemIcon>
        <RcIcon title="favorite" symbol={Inbox} size="small" />
      </RcListItemIcon>
      <RcListItemText primary="Inbox" />
    </RcListItem>
    <RcListItem onClick={onClick}>
      <RcListItemIcon>
        <RcIcon title="favorite" symbol={NewEmail} size="small" />
      </RcListItemIcon>
      <RcListItemText primary="Starred" />
    </RcListItem>
    <RcListItem onClick={onClick}>
      <RcListItemIcon>
        <RcIcon title="favorite" symbol={SendFilled} size="small" />
      </RcListItemIcon>
      <RcListItemText primary="Send email" />
    </RcListItem>
    <RcListItem onClick={onClick}>
      <RcListItemIcon>
        <RcIcon title="favorite" symbol={Draft} size="small" />
      </RcListItemIcon>
      <RcListItemText primary="Drafts" />
    </RcListItem>
    <RcDivider component="li" />
    <RcListItem onClick={onClick}>
      <RcListItemIcon>
        <RcIcon title="favorite" symbol={Email} size="small" />
      </RcListItemIcon>
      <RcListItemText primary="All mail" />
    </RcListItem>
    <RcListItem onClick={onClick}>
      <RcListItemIcon>
        <RcIcon title="favorite" symbol={Delete} size="small" />
      </RcListItemIcon>
      <RcListItemText primary="Trash" />
    </RcListItem>
    <RcListItem onClick={onClick}>
      <RcListItemIcon>
        <RcIcon title="favorite" symbol={Voicemail} size="small" />
      </RcListItemIcon>
      <RcListItemText primary="Voicemail" />
    </RcListItem>
  </RcList>
);

export const Drawer: Story<DrawerProps> = ({ children, ...args }) => {
  switchToControlKnobs();

  const [open, setOpen] = useState(false);

  return (
    <>
      <RcButton onClick={() => setOpen(true)}>open</RcButton>
      <RcDrawer {...args} open={open} onClose={() => setOpen(false)}>
        <List onClick={() => setOpen(false)} />
      </RcDrawer>
    </>
  );
};

Drawer.storyName = 'Drawer';

Drawer.args = {};

Drawer.argTypes = {
  ...notControlInDocTable<keyof DrawerProps>(['anchor', 'inlinePaper']),
};

Drawer.parameters = {
  tags: [
    {
      name: 'Spec',
      href: '',
    },
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/drawers',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const DrawerExamples: Story<DrawerProps> = ({
  children,
  inlinePaper,
  ...args
}) => {
  switchToControlKnobs();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (
      event: React.KeyboardEvent | React.MouseEvent,
      reason?: 'backdropClick' | 'escapeKeyDown',
    ) => {
      console.log(event, reason);
      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      {(['left', 'right', 'top', 'bottom'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <RcButton onClick={toggleDrawer(anchor, true)}>{anchor}</RcButton>
          <RcDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            inlinePaper={inlinePaper}
            {...args}
          >
            <RcBox maxWidth={inlinePaper ? '300px' : undefined} clone>
              <CustomPaper as={inlinePaper ? undefined : 'div'}>
                <List onClick={toggleDrawer(anchor, false)} />
              </CustomPaper>
            </RcBox>
          </RcDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

DrawerExamples.args = {};

DrawerExamples.argTypes = {
  ...notControlInDocTable<keyof DrawerProps>(['anchor']),
};

export const DrawerWithInlinePaper: Story<DrawerProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  const [open, setOpen] = useState(false);

  return (
    <>
      <RcButton onClick={() => setOpen(true)}>open</RcButton>
      <RcDrawer
        {...args}
        inlinePaper
        open={open}
        onClose={() => setOpen(false)}
      >
        <CustomPaper>
          <List onClick={() => setOpen(false)} />
        </CustomPaper>
      </RcDrawer>
    </>
  );
};

DrawerWithInlinePaper.args = {
  anchor: 'bottom',
  radius: 'xl',
};

// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
function checkIsMobile() {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a,
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        a.substr(0, 4),
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || (window as any).opera);
  return check;
}

const isMobile = checkIsMobile();

const Text = styled(RcText)`
  margin: ${spacing(4)};
`;

const Button = styled(RcButton)`
  && {
    padding: ${spacing(5, 0)};
  }
`;

const CustomDrawer = styled(RcDrawer)`
  ${RcPaper}${RcPaper} {
    min-width: 360px;
    border-radius: ${radius('md')};
    margin-bottom: ${spacing(2)};
  }
`;

const DialogContent = styled(RcDialogContent)`
  && {
    padding: 0;
  }
`;

const ListTitle = styled(RcText)`
  margin: ${spacing(2, 4)};
`;

ListTitle.defaultProps = {
  color: 'neutral.f04',
  variant: 'caption1',
};

const items = range(0, 20);

export const DrawerAndModalSwitchInDevice: Story<DrawerProps> = ({
  children,
  ...args
}) => {
  switchToControlKnobs();

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [mobile, setMobile] = useState(isMobile);

  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);

  const header = (
    <>
      <Text align="center" color="neutral.f04" variant="caption1">
        Are you sure you want to leave this webinar?
      </Text>
      <RcDivider />
    </>
  );

  const confirm = (
    <Button onClick={handleClose} color="danger.f02" variant="plain" fullWidth>
      Leave
    </Button>
  );

  const cancel = (
    <Button
      onClick={handleClose}
      color="interactive.f01"
      variant="plain"
      fullWidth
    >
      Cancel
    </Button>
  );

  const content = (
    <>
      <RcDialogTitle>
        How Covid 19 has changed workplace permanently
      </RcDialogTitle>
      <DialogContent dividers>
        <RcMenuList maxHeight={300}>
          <ListTitle>Host</ListTitle>
          <RcMenuItem avatar={<RcAvatar src={avatar} size="small" />}>
            <RcListItemText primary={'label'} />
          </RcMenuItem>
          <ListTitle>Panelists</ListTitle>
          {items.map((x) => (
            <RcMenuItem key={x} avatar={<RcAvatar src={avatar} size="small" />}>
              <RcListItemText primary={`User Name ${x}`} />
            </RcMenuItem>
          ))}
        </RcMenuList>
      </DialogContent>
    </>
  );

  return (
    <>
      <RcButton onClick={() => setOpen(true)}>open confirm</RcButton>
      <br />
      <br />
      <RcButton onClick={() => setOpen2(true)}>open details</RcButton>
      <Title>current is {mobile ? 'mobile' : 'desktop'}</Title>
      <RcButton color="highlight.b01" onClick={() => setMobile(!mobile)}>
        switch to {mobile ? 'desktop' : 'mobile'}
      </RcButton>
      {mobile ? (
        <CustomDrawer
          {...args}
          inlinePaper
          open={open}
          onClose={handleClose}
          // if you don't what background add that
          // BackdropProps={{ invisible: true }}
        >
          <RcPaper>
            {header}
            {confirm}
          </RcPaper>
          <RcPaper>{cancel}</RcPaper>
        </CustomDrawer>
      ) : (
        <RcDialog maxWidth="xs" open={open} onClose={handleClose}>
          {header}
          {confirm}
          {cancel}
        </RcDialog>
      )}

      {mobile ? (
        <CustomDrawer
          {...args}
          open={open2}
          radius="md"
          onClose={handleClose2}
          // if you don't what background add that
          // BackdropProps={{ invisible: true }}
        >
          {content}
        </CustomDrawer>
      ) : (
        <RcDialog maxWidth="xs" open={open2} onClose={handleClose2}>
          {content}
        </RcDialog>
      )}
    </>
  );
};

DrawerAndModalSwitchInDevice.args = {
  anchor: 'bottom',
  radius: 'xl',
};

const SelectDemo = () => {
  const [value, setValue] = useState(0);
  return (
    <RcSelect
      variant="box"
      value={value}
      onChange={(evt) => setValue(evt.target.value as any)}
    >
      {Array.from(new Array(20).keys()).map((item) => (
        <RcMenuItem key={item} value={item}>
          MenuItem {item}
        </RcMenuItem>
      ))}
    </RcSelect>
  );
};

export const MultiDrawer: Story<DrawerProps> = ({ children, ...args }) => {
  const [opens, setOpens] = useState({});
  const [keepDrawer, setKeepDrawer] = useState(true);

  return (
    <>
      <RcButton onClick={() => setOpens({ ...opens, level_0: true })}>
        open Drawer 0
      </RcButton>
      <RcSwitch
        label="Toggle Drawer Keep"
        onChange={() => setKeepDrawer(!keepDrawer)}
      />
      <RcDrawer
        {...args}
        data-drawer-level="0"
        open={opens['level_0']}
        onClose={() => setOpens({ ...opens, level_0: false })}
      >
        <RcTypography variant="headline1">Drawer 0</RcTypography>
        <RcDivider />
        <SelectDemo />
        <RcDivider />
        <RcList>
          <RcListItem>ListItem 0 - 0</RcListItem>
          <RcListItem>ListItem 0 - 1</RcListItem>
          <RcListItem>ListItem 0 - 2</RcListItem>
          <RcListItem
            onClick={() =>
              setOpens({
                ...opens,
                level_1: true,
                level_0: !!keepDrawer,
              })
            }
          >
            Open Drawer 1
          </RcListItem>
          <RcListItem onClick={() => setOpens({ ...opens, level_0: false })}>
            Close Drawer 0
          </RcListItem>
        </RcList>
      </RcDrawer>
      <RcDrawer
        {...args}
        data-drawer-level="1"
        open={opens['level_1']}
        onClose={() => setOpens({ ...opens, level_1: false })}
      >
        <RcTypography variant="headline1">Drawer 1</RcTypography>
        <RcDivider />
        <RcList>
          <RcListItem>ListItem 1 - 0</RcListItem>
          <RcListItem>ListItem 1 - 1</RcListItem>
          <RcListItem
            onClick={() =>
              setOpens({ ...opens, level_2: true, level_1: !!keepDrawer })
            }
          >
            Open Drawer 2
          </RcListItem>
          <RcListItem onClick={() => setOpens({ ...opens, level_1: false })}>
            Close Drawer 1
          </RcListItem>
        </RcList>
      </RcDrawer>
      <RcDrawer
        {...args}
        data-drawer-level="2"
        open={opens['level_2']}
        onClose={() => setOpens({ ...opens, level_2: false })}
      >
        <RcTypography variant="headline1">Drawer 2</RcTypography>
        <RcDivider />
        <SelectDemo />
        <RcDivider />
        <RcList>
          <RcListItem>ListItem 2 - 0</RcListItem>
          <RcListItem>ListItem 2 - 1</RcListItem>
          <RcListItem onClick={() => setOpens({ ...opens, level_2: false })}>
            Close Drawer 2
          </RcListItem>
        </RcList>
      </RcDrawer>
    </>
  );
};

MultiDrawer.args = {
  anchor: 'bottom',
};
