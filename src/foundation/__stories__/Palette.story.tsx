import { Story } from '@storybook/react';
import React, { useCallback, useMemo, useState } from 'react';

import { RcBox } from '../../components/Box';
import { RcTextField } from '../../components/Forms/TextField';
import { RcTypography } from '../../components/Typography';
import { isValidPalettes } from '../../storybook';
import styled, { useTheme } from '../styled-components';
import { radius, spacing } from '../styles';

export default {
  title: '🔧 Foundation/Palette',
};

const titleVariants: any[] = ['display1', 'headline1'];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px - 0.7rem);
`;

const itemWidth = '245px';

const Wrapper = styled.div`
  display: inline-flex;
  flex: 1 1 ${itemWidth};
  max-width: ${itemWidth};
  min-width: ${itemWidth};
  padding: 1%;
  box-sizing: border-box;
`;

const ColorWrapper = styled.div`
  margin: ${spacing(4)};
`;

const ColorDiv = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  width: 48px;
  height: 48px;
  border-radius: ${radius('md')};
  display: inline-block;
`;

const InfoWrapper = styled.div`
  margin-left: ${spacing(2)};
`;

const getColorArr = (
  parent: any,
  parentKey = '',
  layer = 0,
  searchText: string,
) => {
  const renderArr: any[] = [];
  Object.entries<string>(parent).forEach(([key, value]) => {
    const type = typeof value;

    switch (type) {
      case 'string':
        {
          const itemKey = parentKey ? `${parentKey}.${key}` : key;

          const _searchText = searchText.toLocaleLowerCase();

          if (
            !isValidPalettes(itemKey) ||
            (searchText &&
              !(
                itemKey.toLocaleLowerCase().includes(_searchText) ||
                value.toLocaleLowerCase().includes(_searchText)
              ))
          ) {
            return;
          }

          const item = (
            <Wrapper key={itemKey}>
              <ColorDiv color={value as string} />
              <InfoWrapper>
                <RcTypography color="neutral.f06">{itemKey}</RcTypography>
                <RcTypography color="neutral.f05">{value}</RcTypography>
              </InfoWrapper>
            </Wrapper>
          );

          // * when layer is zero and that is string, add title first
          if (layer === 0) {
            renderArr.push(
              <RcTypography
                color="neutral.f06"
                key={`${itemKey}_title`}
                variant={titleVariants[layer]}
              >
                {itemKey}
              </RcTypography>,
              <ColorWrapper key={`${itemKey}wrapper`}>{item}</ColorWrapper>,
            );
            break;
          }

          renderArr.push(item);
        }
        break;
      case 'object':
        {
          const renderValue = `${parentKey}${parentKey ? '.' : ''}${key}`;

          const items = getColorArr(value, key, layer + 1, searchText);

          if (items.length > 0) {
            renderArr.push(
              <RcTypography
                color="neutral.f06"
                key={renderValue}
                variant={titleVariants[layer]}
              >
                {renderValue}
              </RcTypography>,
            );
            renderArr.push(
              <ColorWrapper key={`${renderValue}wrapper`}>
                {items}
              </ColorWrapper>,
            );
          }
        }
        break;
      default:
        break;
    }
  });
  return renderArr;
};

export const Palette: Story = () => {
  const [filterText, setFilterText] = useState('');

  const { palette } = useTheme();

  const colorItems = useMemo(() => {
    return getColorArr(palette, undefined, undefined, filterText);
  }, [filterText, palette]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
      setFilterText(e.target.value);
    },
    [],
  );

  return (
    <>
      <Container>
        <RcTextField
          value={filterText}
          variant="outline"
          gutterBottom
          fullWidth
          placeholder="Search color token or color value"
          onChange={onChange}
        />
        <RcBox flex="1 1 auto" overflow="auto">
          {colorItems}
        </RcBox>
      </Container>
    </>
  );
};

Palette.parameters = {
  tags: [
    {
      name: 'Source',
      value: 'Token Sheet',
      href:
        'https://docs.google.com/spreadsheets/d/1eGJAib2seE1AMIReWVtbGJAhQppQNVfU49rct8a6CKk/edit#gid=0',
    },
    {
      name: 'Source',
      value: 'New vs Old',
      href:
        'https://docs.google.com/spreadsheets/d/1BYZUI2aDwLyvizO45tpQNylpVpMIkmeWLSz4geeuTP0/edit#gid=360032390',
      color: 'highlight.b03',
    },
    {
      name: 'Source',
      value: 'Wiki',
      href:
        'https://wiki.ringcentral.com/pages/viewpage.action?pageId=424536658',
      color: 'content.brand',
    },
  ],
};
