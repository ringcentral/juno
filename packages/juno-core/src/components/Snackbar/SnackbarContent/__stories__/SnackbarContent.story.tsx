import React, { ComponentProps } from 'react';

import { Close } from '@ringcentral/juno-icon';
import {
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { styled } from '../../../../foundation';
import { RcLink } from '../../../Link';
import { RcSnackbarAction } from '../../SnackbarAction/SnackbarAction';
import { RcSnackbarContent } from '../SnackbarContent';

export default {
  title: '🚀 Cleanup Components/Snackbar/SnackbarContent',
  component: RcSnackbarContent,
  argTypes: {
    ...sortInDocTable<keyof SnackbarContentProps>([
      'type',
      'size',
      'messageAlign',
      'square',
    ]),
    ...notShowInDocTable<keyof SnackbarContentProps>(['ariaLabel']),
  },
} as Meta;

type SnackbarContentProps = ComponentProps<typeof RcSnackbarContent>;

export const SnackbarContent: Story<SnackbarContentProps> = ({ ...args }) => {
  switchToControlKnobs();
  return <RcSnackbarContent {...args} />;
};

SnackbarContent.args = {
  message: 'Example snackbar content',
};
SnackbarContent.storyName = 'SnackbarContent';

SnackbarContent.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/api/snackbar-content/',
    },
  ],
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 12px 24px;
  margin: 12px 0;

  > div {
    margin-bottom: 10px;
  }
`;

export const SnackbarContentExamples: Story<SnackbarContentProps> = () => {
  return (
    <Wrapper>
      <RcSnackbarContent message="This is an success message." type="success" />
      <RcSnackbarContent
        type="error"
        message="This is an error message."
        action={<RcSnackbarAction key="action1">Action</RcSnackbarAction>}
      />
      <RcSnackbarContent
        type="warn"
        message={
          <>
            This is an warning message. &nbsp;
            <RcLink href="https://app.ringcentral.com/" target="_blank">
              https://app.ringcentral.com/
            </RcLink>
          </>
        }
        action={[
          <RcSnackbarAction key="action1">Action</RcSnackbarAction>,
          <RcSnackbarAction key="action2">Action</RcSnackbarAction>,
        ]}
      />
      <RcSnackbarContent
        type="info"
        message="This is an informational message."
        action={[
          <RcSnackbarAction key="action1" disabled>
            Action
          </RcSnackbarAction>,
          <RcSnackbarAction key="action2">Action</RcSnackbarAction>,
          <RcSnackbarAction key="action3" variant="icon" symbol={Close} />,
        ]}
      />
      <RcSnackbarContent
        type="info"
        message="This is an neutral message."
        loading
      />
      <RcSnackbarContent
        type="info"
        message="Only has icon"
        fullWidth
        action={
          <RcSnackbarAction key="action3" variant="icon" symbol={Close} />
        }
      />
      <RcSnackbarContent
        type="info"
        message="In the cellular phone industry, mobile phones and their networks sometimes support concatenated short message service (or concatenated SMS) to overcome the limitation on the number of characters that can be sent in a single SMS text message transmission (which is usually 160). Using this method, long messages are split into smaller messages by the sending device and recombined at the receiving end. Each message is then billed separately. When the feature works properly, it is nearly transparent to the user, appearing as a single long text message. Previously, due to incompatibilities between providers and lack of support in some phone models, there was not widespread use of this feature."
        action={[
          <RcSnackbarAction key="action3" variant="icon" symbol={Close} />,
        ]}
      />
    </Wrapper>
  );
};

SnackbarContentExamples.storyName = 'SnackbarContent Examples';
