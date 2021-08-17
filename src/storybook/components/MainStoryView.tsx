import { ButtonBaseActions } from '@material-ui/core';
import React, { FunctionComponent, ReactNode, useRef } from 'react';

import {
  RcButtonBase,
  RcIconButton,
  RcLink,
  RcTypography,
} from '../../components';
import {
  createGlobalStyle,
  getParsePaletteColor,
  palette2,
  radius,
  styled,
} from '../../foundation';
import { TagProps } from '../../typings/storybook';
import CenterFocusWeak from '../assets/CenterFocusWeak';
import { Tag } from './Tag';

const GlobalStyle = createGlobalStyle<{ backgroundColor?: string }>`
  .sb-show-main,
  .sbdocs-preview {
    background-color: ${({ backgroundColor }) =>
      backgroundColor
        ? getParsePaletteColor(backgroundColor)
        : palette2('neutral', 'b01')};
  }
`;

const ThemeContainer = styled.div`
  display: block;
  position: fixed;
  right: 0;
  top: 7px;
`;

const FocusButton = styled(RcButtonBase)`
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  position: absolute;
  pointer-events: none;
  margin-left: -16px;
  margin-top: -8px;
  overflow: visible;
  border-radius: ${radius('circle')};
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 32px;
  margin-bottom: 0.5rem;
  > * + * {
    margin-left: 0.5em;
  }
`;

const Main = styled.main`
  position: relative;
`;

export type MainStoryViewProps = {
  tags: TagProps[];
  name: string;
  backgroundColor: string;
  themeChildren: ReactNode;
};

export const MainStoryView: FunctionComponent<MainStoryViewProps> = ({
  tags,
  name,
  children,
  backgroundColor,
  themeChildren,
}) => {
  const ref = useRef<ButtonBaseActions>(null);

  return (
    <>
      <Header>
        <RcIconButton
          symbol={CenterFocusWeak}
          size="small"
          title="Reset focus to test keyboard navigation"
          onClick={() => ref.current!.focusVisible()}
        />
        {tags.length > 0 &&
          tags.map((tag, i) => {
            const tagColor =
              tag.color ??
              {
                Spec: 'avatar.oasis',
                Mui: 'content.brand',
                Accessibility: undefined,
                Source: undefined,
              }[tag.name];

            const tagValue =
              tag.value ??
              {
                Spec: 'abstract',
                Mui: name,
                Accessibility: undefined,
                Source: undefined,
              }[tag.name];

            return (
              // eslint-disable-next-line react/no-array-index-key
              <Tag key={`${tag.name}-${i}`} color={tagColor}>
                <RcTypography variant="caption1" color="neutral.f01">
                  {tag.name}
                </RcTypography>
                {tag.href ? (
                  <RcLink
                    variant="caption1"
                    color="neutral.f06"
                    href={tag.href}
                    target="_blank"
                  >
                    {tagValue}
                  </RcLink>
                ) : (
                  <RcTypography variant="caption1" color="neutral.f06">
                    {tagValue}
                  </RcTypography>
                )}
              </Tag>
            );
          })}
      </Header>
      <Main>
        <FocusButton
          focusRipple
          tabIndex={-1}
          aria-label="A generic container that is programmatically focused to test keyboard navigation of our components."
          action={ref}
        />
        {children}
      </Main>
      <GlobalStyle backgroundColor={backgroundColor} />
      <ThemeContainer>{themeChildren}</ThemeContainer>
    </>
  );
};
