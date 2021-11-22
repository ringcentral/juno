import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';

import { Meta } from '@storybook/react';

// @ts-ignore
import svgToComponentMapping from '../../../../scripts/utils/svgToComponentMapping';
import { palette2, useEventCallback } from '../../../foundation';
import styled from '../../../foundation/styled-components';
import Warning from '../../../icon/Warning';
import { RcBox } from '../../Box';
import { RcTextField } from '../../Forms/TextField';
import { RcCircularProgress } from '../../Progress';
import { RcTypography } from '../../Typography';
import { RcIcon } from '../Icon';
import localIcons from '../icon-symbol';

export default {
  title: '🔧 Foundation/Icon List',
} as Meta;

const StyledMain = styled.div`
  color: ${palette2('neutral', 'f06')};
`;

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const StyledIcon = styled.div<{ state: 'new' | 'delete' | 'exist' }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  color: ${({ state }) => {
    switch (state) {
      case 'new':
        return palette2('success', 'f02');
      case 'delete':
        return palette2('danger', 'f02');
      default:
        return palette2('neutral', 'f06');
    }
  }};

  & svg {
    margin-bottom: 4px;
    box-shadow: 0 0 10px
      ${({ state }) => {
        switch (state) {
          case 'exist':
            return 'silver';
          case 'new':
            return 'green';
          case 'delete':
            return 'red';
          default:
            return 'silver';
        }
      }};
    width: 1em;
    height: 1em;
    font-size: 36px;
  }
`;

const mapping = Object.entries<any>(svgToComponentMapping).reduce<any>(
  (prev, [key, value]) => {
    prev[value] = key;
    return prev;
  },
  {},
);

const getIconList = (svgData: string) => {
  const re = /<title>(.+?)<\/title>/g;
  const matches: string[] = [];
  svgData.replace(re, (m, p1) => {
    matches.push(p1);
    return m;
  });
  return matches;
};

// eslint-disable-next-line require-await
const getRemoteSvgFile = async () => {
  try {
    return await fetch(
      'https://i.icomoon.io/public/6483cc0f53/Jupiternewicontest/symbol-defs.svg',
    ).then((res) => {
      return res.text();
    });
  } catch (e) {
    return null;
  }
};

type IconListProps = {};

const currentIcons = getIconList(localIcons);

const insertSVG = (data: string) => {
  const body = document.body;
  const x = document.createElement('x');
  x.innerHTML = data;
  const svg = x.getElementsByTagName('svg')[0];
  if (svg) {
    svg.setAttribute('aria-hidden', 'true');
    svg.style.position = 'absolute';
    svg.style.width = '0';
    svg.style.height = '0';
    svg.style.overflow = 'hidden';
    body.insertBefore(svg, body.firstChild);
  }
};

export const IconList: FunctionComponent<IconListProps> = () => {
  const [remoteIcons, setRemoteIcons] = useState<string[]>([]);
  const [deletedIcons, setDeletedIcons] = useState<string[]>([]);
  const [loadFail, setLoadFail] = useState(false);
  const [filterText, setFilterText] = useState('');

  const resultIcons = useMemo(() => {
    return filterText
      ? remoteIcons.filter((x) => {
          function isInclude(value: string) {
            const _filterText = filterText
              .toLocaleLowerCase()
              .replace(/_|-/g, '');
            const _value = value.toLocaleLowerCase().replace(/_|-/g, '');

            return _value.includes(_filterText);
          }

          return isInclude(x) || (mapping[x] && isInclude(mapping[x]));
        })
      : remoteIcons;
  }, [filterText, remoteIcons]);

  const [loading, setLoading] = useState(true);

  const getRemoteIconList = async () => {
    const value = await getRemoteSvgFile();
    if (value) {
      insertSVG(value);
      const icons = getIconList(value);

      setDeletedIcons(currentIcons.filter((x) => !icons.includes(x)));
      setRemoteIcons(icons);
      setLoading(false);
      return;
    }

    setLoadFail(true);
    insertSVG(localIcons);
    setRemoteIcons(currentIcons);
    setLoading(false);
  };

  useEffect(() => {
    getRemoteIconList();
  }, []);

  const handleChange = useEventCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
      setFilterText(e.target.value);
    },
  );

  return (
    <StyledMain>
      <h3>current icon number: {currentIcons.length}</h3>
      <h3>
        latest icon number:{' '}
        {loading ? <RcCircularProgress /> : remoteIcons.length}
      </h3>
      <p>
        <RcTypography color="success.f02" variant="body1" component="span">
          green{' '}
        </RcTypography>
        shadow means this icon is not in current version of icon yet, you can
        update icon by running 'npm run update-icon'
      </p>
      <p>
        <RcTypography color="danger.f02" variant="body1" component="span">
          red{' '}
        </RcTypography>
        shadow means this icon is deleted, they will not be available in next
        version of icon
      </p>
      <div style={{ width: 600 }}>
        <RcTextField
          value={filterText}
          variant="outline"
          gutterBottom
          fullWidth
          placeholder="Search by component name or svg name"
          onChange={handleChange}
        />
      </div>
      {!loading && (
        <>
          {loadFail && (
            <RcBox display="flex" alignItems="center" clone marginBottom="1em">
              <RcTypography color="danger.f02" variant="body1" component="span">
                <RcIcon symbol={Warning} /> get remote svg file fail, current is
                local files
              </RcTypography>
            </RcBox>
          )}
          <StyledList>
            {resultIcons.map((icon) => {
              const isExist = currentIcons.includes(icon);

              return (
                <StyledIcon state={isExist ? 'exist' : 'new'} key={icon}>
                  <RcIcon
                    color="neutral.f06"
                    symbol={(props) => (
                      <svg {...props}>
                        <use xlinkHref={`#icon-${icon}`} />
                      </svg>
                    )}
                  />
                  {isExist && (
                    <RcTypography color="neutral.f06" variant="subheading2">
                      {mapping[icon]}
                    </RcTypography>
                  )}
                  <RcTypography color="neutral.f03">{icon}</RcTypography>
                </StyledIcon>
              );
            })}
            {deletedIcons.map((icon) => (
              <StyledIcon state="delete" key={icon}>
                <RcIcon
                  color="neutral.f06"
                  symbol={(props) => (
                    <svg {...props}>
                      <use xlinkHref={`#icon-${icon}`} />
                    </svg>
                  )}
                />
                {icon}
              </StyledIcon>
            ))}
          </StyledList>
        </>
      )}
    </StyledMain>
  );
};
