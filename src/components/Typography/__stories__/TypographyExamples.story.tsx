import React from 'react';

import { Story } from '@storybook/react';

import styled from '../../../foundation/styled-components';
import { RcDivider } from '../../Divider';
import { RcPaper } from '../../Paper';
import { RcTypography, RcTypographyVariant } from '../Typography';

export default {
  title: '🔧 Foundation/Typography List',
};

const variants: RcTypographyVariant[] = [
  'display4',
  'display3',
  'display2',
  'display1',
  'headline2',
  'headline1',
  'title2',
  'title1',
  'subheading2',
  'subheading1',
  'body2',
  'body1',
  'caption2',
  'caption1',
  'inherit',
];

const Text = styled(RcTypography)`
  margin-bottom: 1rem;
  flex: 2 1 0;
`;

const Attribute = styled(RcTypography)`
  flex: 1 1 0;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 1rem;
`;

class TypographyShow extends React.PureComponent<{ variant: string }> {
  text: React.RefObject<any>;

  state: any;

  constructor(props: any) {
    super(props);
    this.text = React.createRef();
    this.state = {};
  }

  componentDidMount() {
    const isTestEnv = (window as any).TEST_ENV;
    if (isTestEnv) {
      return;
    }
    const { fontSize, fontWeight, lineHeight } = window.getComputedStyle(
      this.text.current,
    );
    this.setState({
      fontSize,
      fontWeight,
      lineHeight,
    });
  }

  render() {
    return (
      <StyledContainer>
        <Text ref={this.text} variant={this.props.variant as any}>
          {this.props.variant}
        </Text>
        <Attribute>{this.state.fontWeight}</Attribute>
        <Attribute>{this.state.fontSize}</Attribute>
        <Attribute>{this.state.lineHeight}</Attribute>
      </StyledContainer>
    );
  }
}

export const Typography: Story = () => (
  <RcPaper
    style={{
      padding: '4rem',
      width: '1000px',
    }}
  >
    <StyledContainer>
      <Text variant={'caption1'}>Name/TypeFace</Text>
      <Attribute>font weight</Attribute>
      <Attribute>font size</Attribute>
      <Attribute>line height</Attribute>
    </StyledContainer>
    <RcDivider />
    {variants.map((variant) => (
      <React.Fragment key={variant}>
        <TypographyShow variant={variant}>{variant}</TypographyShow>
        <RcDivider />
      </React.Fragment>
    ))}
  </RcPaper>
);

Typography.storyName = 'Typography List';
