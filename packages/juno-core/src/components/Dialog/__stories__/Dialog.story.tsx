import React, { ComponentProps, FunctionComponent, useState } from 'react';

import {
  RcBox,
  RcButton,
  RcCheckbox,
  RcDialog,
  RcDialogActions,
  RcDialogContent,
  RcDialogContentProps,
  RcDialogContentText,
  RcDialogContext,
  RcDialogProps,
  RcDialogTitle,
  RcDrawer,
  RcFormControlLabel,
  RcRadio,
  RcRadioGroup,
  RcResponsive,
  RcSwitch,
  RcTypography,
  styled,
  useResponsiveContext,
  useResponsiveMatch,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

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

const Content: FunctionComponent<DialogExampleComponentProps> = ({
  children,
  childrenSize,
  dividers,
  onClick,
}) => {
  const isSmall = childrenSize === 'small';

  return (
    <>
      <RcDialogTitle>Title</RcDialogTitle>
      <RcDialogContent dividers={dividers}>
        <RcDialogContentText>some content</RcDialogContentText>
        {children}
      </RcDialogContent>
      <RcDialogActions>
        <RcButton fullWidth={isSmall} variant="text" onClick={onClick as any}>
          Cancel
        </RcButton>
        <RcButton fullWidth={isSmall} onClick={onClick as any}>
          Ok
        </RcButton>
      </RcDialogActions>
    </>
  );
};

type DialogExampleComponentProps = Partial<
  DialogProps & Pick<RcDialogContentProps, 'dividers'>
>;

export const DialogExampleComponent: FunctionComponent<DialogExampleComponentProps> =
  (props) => {
    const { children, childrenSize, dividers, ...rest } = props;
    const [openState, setOpenState] = useState(false);

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
          onClose={(e: any, reason) => {
            setOpenState(false);
            console.log('onClose', e, reason);
          }}
          TransitionProps={{
            onExited: (e) => console.log('onExited', e),
          }}
        >
          <Content {...props} onClick={() => setOpenState(false)}>
            <RcCheckbox title="Go" label="Do something" />
            <RcCheckbox label="Custom Field" />
            <RcRadioGroup defaultValue="mail">
              <RcRadio label="mail" value="mail" />
              <RcRadio label="address" value="address" />
            </RcRadioGroup>
          </Content>
        </RcDialog>
      </>
    );
  };

export const Dialog: Story<DialogProps> = ({ children, ...args }) => {
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
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/61ef0d5dc04f09a714f4f7f383738f95e0826a16/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/AC3B5209-2248-47A2-B030-17F44D343197',
    },
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

export const DialogWithResponsiveExample: FunctionComponent<
  Partial<DialogProps>
> = ({ children, ...args }) => {
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

const DrawerWrapper = styled.div`
  ${RcDialogContent} {
    max-height: 200px;
    overflow: auto;
  }
`;

export const DialogChildrenSizes: Story<DialogProps> = ({
  children,
  childrenSize: childrenSizeProp,
  ...args
}) => {
  const [dividers, setDividers] = useState(false);
  const [openState, setOpenState] = useState(false);
  const [mode, setMode] = useState('dialog');
  const [childrenSize, setChildrenSize] = useState(
    childrenSizeProp || 'medium',
  );

  const handleClose: RcDialogProps['onClose'] = (e, reason) => {
    setOpenState(false);
    console.log('onClose', e, reason);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.value);
  };

  const handleChildrenSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChildrenSize(event.target.value as any);
  };

  const content = (
    <Content
      childrenSize={childrenSize}
      dividers={dividers}
      onClick={() => setOpenState(false)}
    >
      <RcDialogContentText gutterBottom={false}>
        Show in dialog
      </RcDialogContentText>
      <RcBox height="1000px" />
      <RcDialogContentText gutterBottom={false}>bottom</RcDialogContentText>
    </Content>
  );

  return (
    <>
      <RcSwitch
        label="dividers"
        value={dividers}
        onChange={() => setDividers(!dividers)}
      />
      <br />
      <RcRadioGroup row value={mode} onChange={handleChange}>
        <RcRadio label="dialog" value="dialog" />
        <RcRadio label="drawer" value="drawer" />
      </RcRadioGroup>
      <br />
      <RcRadioGroup row value={childrenSize} onChange={handleChildrenSize}>
        <RcRadio label="small" value="small" />
        <RcRadio label="medium" value="medium" />
      </RcRadioGroup>
      <br />
      <RcButton
        type="button"
        onClick={() => {
          setOpenState(true);
        }}
      >
        Open Children Modal
      </RcButton>
      {mode === 'drawer' ? (
        <RcDrawer
          {...args}
          anchor="bottom"
          radius="xl"
          open={openState}
          onClose={handleClose}
        >
          <RcDialogContext.Provider value={{ size: childrenSize }}>
            <DrawerWrapper>{content}</DrawerWrapper>
          </RcDialogContext.Provider>
        </RcDrawer>
      ) : (
        <RcDialog
          {...args}
          childrenSize={childrenSize}
          open={openState}
          onClose={handleClose}
          TransitionProps={{
            onExited: (e) => console.log('onExited', e),
          }}
        >
          {content}
        </RcDialog>
      )}
    </>
  );
};

DialogChildrenSizes.storyName = 'Dialog with different children sizes';

DialogChildrenSizes.args = {};

DialogChildrenSizes.argTypes = {
  ...notControlInDocTable<keyof DialogProps>([]),
};
