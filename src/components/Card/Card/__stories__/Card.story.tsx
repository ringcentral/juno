import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';

import { spacing, styled } from '../../../../foundation';
import DateBorder from '../../../../icon/DateBorder';
import Doc from '../../../../icon/Doc';
import TimeBorder from '../../../../icon/TimeBorder';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '../../../../storybook';
import { RcAvatar } from '../../../Avatar';
import avatar from '../../../Avatar/__stories__/img/avatar.jpg';
import { RcBox } from '../../../Box';
import { RcDivider } from '../../../Divider';
import { RcCheckbox, RcSelect, RcSwitch } from '../../../Forms';
import { RcIcon } from '../../../Icon';
import { RcLink } from '../../../Link';
import { RcListItem, RcListItemIcon, RcListItemText } from '../../../List';
import { RcMenuItem } from '../../../Menu/MenuItem';
import { RcThumbnail } from '../../../Thumbnail';
import { RcTypography } from '../../../Typography';
import { RcCardContent } from '../../CardContent';
import { RcCard } from '../Card';

export default {
  title: '🚀 Cleanup Components/Cards/Card',
  component: RcCard,
  argTypes: {
    ...sortInDocTable<keyof RcCardProps>([
      'variant',
      'square',
      'elevation',
      'selected',
      'focusVisible',
    ]),
    ...notControlInDocTable<keyof RcCardProps>([]),
    ...notShowInDocTable<keyof RcCardProps>([]),
  },
} as Meta;

type RcCardProps = ComponentProps<typeof RcCard>;

export const Card: Story<RcCardProps> = ({ children, ...args }) => {
  switchToControlKnobs();

  return (
    <RcCard {...args}>
      <RcCardContent>
        <RcTypography gutterBottom variant="display1">
          Lizard
        </RcTypography>
        <RcTypography gutterBottom variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </RcTypography>
      </RcCardContent>
    </RcCard>
  );
};

Card.storyName = 'Card';

Card.args = {
  style: { width: 300 },
};

Card.argTypes = {
  ...notControlInDocTable<keyof RcCardProps>([]),
};

Card.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/cards/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

const Container = styled(RcCard)`
  padding: ${spacing(4, 10)};
  max-width: 508px;
  box-sizing: border-box;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: ${spacing(4)};
`;

const Title = styled(RcTypography)``;
Title.defaultProps = {
  color: 'neutral.f04',
};

const Content = styled(RcTypography)``;
Content.defaultProps = {
  color: 'neutral.f06',
  weight: 'bold',
  component: 'div',
};

const Item = styled.div<{ display?: string }>`
  margin-bottom: ${spacing(5)};
  display: ${({ display }) => display};

  &:last-child {
    margin-bottom: unset;
  }
`;

const Main = styled.main``;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${Container} + ${Container} {
    margin-left: 1em;
  }

  .mr-2 {
    margin-right: ${spacing(2)};
  }
`;

const Container2 = styled(RcCard)`
  margin: ${spacing(2)};
  padding: ${spacing(4, 6)};
  max-width: 400px;
  box-sizing: border-box;

  ${RcDivider} {
    margin-bottom: ${spacing(5)};
  }
`;

const AvatarWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  ${RcAvatar} {
    margin-right: ${spacing(1)};
  }
`;

const Container3 = styled(Container2)`
  margin: ${spacing(2)};
  padding: ${spacing(4, 6)};
  max-width: 800px;
  box-sizing: border-box;
`;

const menus = [
  { id: 0, value: 'All new messages' },
  { id: 1, value: 'Direct messages and mentions' },
  { id: 2, value: 'Off' },
];

export const CardExamples: Story<RcCardProps> = () => {
  switchToControlKnobs();
  return (
    <Wrapper>
      <Container variant="outlined">
        <Header>
          <RcIcon
            className="mr-2"
            symbol={DateBorder}
            color="informative.f02"
          />
          <RcLink color="informative.f02">
            <RcTypography weight="bold" variant="subheading2">
              Global presentation with marketing team
            </RcTypography>
          </RcLink>
        </Header>
        <Main>
          <Item>
            <Title>Date & time</Title>
            <Content>
              Thu, 12/05/2019 at 8:00 AM - 11:00AM, repeating every month
            </Content>
          </Item>
          <Item>
            <Title>Location</Title>
            <Content>XMN office - 10F</Content>
          </Item>
          <Item>
            <Title>Description</Title>
            <Content>
              This is description of note. Mauris non tempor quam, et lacinia
              sapien. Mauris accumsan eros eget libero posuere vulputate.
            </Content>
          </Item>
        </Main>
      </Container>
      <Container2 variant="outlined">
        <Header>
          <RcLink color="danger.f02">
            <RcTypography weight="bold" variant="subheading2">
              Global presentation with marketing team
            </RcTypography>
          </RcLink>
          <RcBox flex="1 1 auto" />
          <div>
            <RcCheckbox color="danger.f02" followColorWhenUnChecked />
          </div>
        </Header>
        <Main>
          <Item display="flex">
            <RcIcon className="mr-2" symbol={TimeBorder} color="neutral.f04" />
            <Content display="inline">
              Thu, 12/05/2019 at 8:00 AM - 11:00AM
            </Content>
          </Item>
          <Item>
            <Title>Assignee</Title>
            <Content>
              <AvatarWrapper className="mr-2">
                <RcAvatar src={avatar} size="xsmall" />
                Jesse
              </AvatarWrapper>
              <AvatarWrapper>
                <RcAvatar src={avatar} size="xsmall" />
                Tomas
              </AvatarWrapper>
            </Content>
          </Item>
          <Item>
            <Title>Section</Title>
            <Content>
              This is description of note. Mauris non tempor quam, et lacinia
              sapien.
            </Content>
          </Item>

          <Item>
            <Title>Attachments</Title>
            <Content>
              <RcListItem button>
                <RcListItemIcon>
                  <RcThumbnail symbol={Doc} />
                </RcListItemIcon>
                <RcListItemText
                  primary="RCB Press Relate.docx"
                  secondary="Michael Peachey 4/2/2020"
                />
              </RcListItem>
            </Content>
          </Item>
        </Main>
      </Container2>

      <Container3 variant="outlined">
        <Main>
          <Item display="flex">
            <RcBox flex="2 1 0">
              <Content>Desktop notifications for browser</Content>
              <Title>
                Receive notifications in your web browser when the RingCentral
                app is not open (browser permission needed)
              </Title>
            </RcBox>
            <RcBox flex="1 1 0" textAlign="right">
              <RcSwitch defaultChecked />
            </RcBox>
          </Item>
          <RcDivider />
          <Item display="flex">
            <RcBox flex="2 1 0">
              <Content>New messages</Content>
              <Title>
                Choose your preference for desktop notifications for new
                messages
              </Title>
            </RcBox>
            <RcBox flex="1 1 0" display="flex" justifyContent="flex-end">
              <RcSelect id="line-select" value={0} variant="box">
                {menus.map((item) => (
                  <RcMenuItem value={item.id} key={item.id}>
                    {item.value}
                  </RcMenuItem>
                ))}
              </RcSelect>
            </RcBox>
          </Item>
          <RcDivider />
          <Item display="flex">
            <RcBox flex="2 1 0">
              <Content>Incoming calls</Content>
              <Title>Receive notifications for incoming calls</Title>
            </RcBox>
            <RcBox flex="1 1 0" textAlign="right">
              <RcSwitch defaultChecked />
            </RcBox>
          </Item>
          <RcDivider />
          <Item display="flex">
            <RcBox flex="2 1 0">
              <Content>Missed calls and new voicemails</Content>
              <Title>
                Receive notifications for missed calls and new voicemails
              </Title>
            </RcBox>
            <RcBox flex="1 1 0" textAlign="right">
              <RcSwitch />
            </RcBox>
          </Item>
        </Main>
      </Container3>
    </Wrapper>
  );
};
