import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';

import {
  css,
  palette2,
  RcBox,
  RcCircularProgress,
  RcIcon,
  RcSwitch,
  RcText,
  RcTextField,
  RcTypography,
  styled,
  useEventCallback,
} from '@ringcentral/juno';
import * as allIcons from '@ringcentral/juno-icon';
import { Warning } from '@ringcentral/juno-icon';
import localIcons from '@ringcentral/juno-icon/devUtils/iconSymbol';
import localJsonIcons from '@ringcentral/juno-icon/devUtils/iconJsonSymbol.json';
import { Meta } from '@storybook/react';

import { SelectionSvgResponse } from './SelectionSvgResponse';

const svgToComponentMapping = require('@ringcentral/juno-icon/devUtils/svgToComponentMapping.ts');

const localIconMap = Object.entries<any>(svgToComponentMapping).reduce<any>(
  (prev, [key, value]) => {
    prev[value] = key;
    return prev;
  },
  {},
);

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

type StyledIconProps = {
  state: 'new' | 'delete' | 'exist';
  duplicated?: boolean;
};

const StyledIcon = styled.div<StyledIconProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  position: relative;

  & svg {
    font-size: 36px;

    ${({ state, duplicated }) => {
      if (duplicated) {
        return css`
          box-shadow: 0 0 3px 5px ${palette2('warning', 'f02')};
        `;
      }
      switch (state) {
        case 'new':
          return css`
            box-shadow: 0 0 3px 5px ${palette2('success', 'f02')};
          `;
        case 'delete':
          return css`
            box-shadow: 0 0 3px 5px ${palette2('danger', 'f02')};
          `;
        default:
          return css`
            box-shadow: 0px 0px 0px 1px ${palette2('neutral', 'f06')};
          `;
      }
    }};
  }
`;

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

function getIconList(response: SelectionSvgResponse) {
  const iconNames = response.icons.map((icon) => {
    return icon.properties.name;
  });
  return iconNames;
}

const getRemoteSelectionJsonFile = async () => {
  try {
    const res = await fetch(
      'https://i.icomoon.io/public/6483cc0f53/Jupiternewicontest/selection-svg.json',
    );
    const response: SelectionSvgResponse = await res.json();

    return getIconList(response);
  } catch (e) {
    return null;
  }
};

type IconListProps = {};

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

const localIconList = getIconList(localJsonIcons as SelectionSvgResponse);

export const IconList: FunctionComponent<IconListProps> = () => {
  const [remoteIcons, setRemoteIcons] = useState<string[]>([]);
  const [showMode, setShowMode] = useState<'local' | 'remote'>('local');

  const [loading, setLoading] = useState(true);
  const [loadFail, setLoadFail] = useState(false);
  const [filterText, setFilterText] = useState('');

  const resultIcons = useMemo(() => {
    const _filterText = filterText.toLocaleLowerCase().replace(/_|-/g, '');

    const showIcons = showMode === 'local' ? localIconList : remoteIcons;

    return filterText
      ? showIcons.filter((x) => {
          function isInclude(value: string) {
            const _value = value.toLocaleLowerCase().replace(/_|-/g, '');

            return _value.includes(_filterText);
          }

          return isInclude(x);
        })
      : showIcons;
  }, [filterText, showMode, remoteIcons]);

  const getRemoteIconList = async () => {
    const [value, remoteSelectionIcons] = await Promise.all([
      getRemoteSvgFile(),
      getRemoteSelectionJsonFile(),
    ]);

    if (value && remoteSelectionIcons) {
      insertSVG(value);
      setLoading(false);

      setRemoteIcons(remoteSelectionIcons);

      return;
    }

    setLoadFail(true);
    insertSVG(localIcons);
    // setRemoteIcons(currentIcons);
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
      <h3>current icon number: {Object.keys(localIconMap).length}</h3>
      <h3>
        latest icon number:{' '}
        {loading ? <RcCircularProgress /> : remoteIcons.length}
        <span style={{ paddingLeft: '1em' }}>{''}</span>
        <RcSwitch
          onChange={(e, checked) => {
            setShowMode(checked ? 'remote' : 'local');
          }}
          label="Show Remote"
        />
      </h3>
      <p>
        <RcTypography color="success.f02" variant="body1" component="span">
          green{' '}
        </RcTypography>
        badge means this icon is not in current version of icon yet, you can
        update icon by running 'yarn update-icon'
      </p>
      <p>
        <RcTypography color="danger.f02" variant="body1" component="span">
          red{' '}
        </RcTypography>
        badge means this icon is deleted, they will not be available in next
        version of icon
      </p>
      <p>
        <RcTypography color="warning.f02" variant="body1" component="span">
          warning{' '}
        </RcTypography>
        badge means that icon have a duplicated name, should remove that or
        change name <RcText highlight>(name is not case sensitive)</RcText>
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
      {!(loading && showMode === 'remote') && (
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
              const sourceName = localIconMap[icon];

              const ComponentName = Number.isNaN(+sourceName)
                ? sourceName
                : `Svg${sourceName}`;

              const isExist = !!sourceName;

              const RemoteComponent = (props: any) => (
                <svg {...props}>
                  <use xlinkHref={`#icon-${icon}`} />
                </svg>
              );

              const IconComponent = isExist
                ? allIcons[ComponentName]
                : RemoteComponent;

              const duplicated = !isExist && IconComponent;

              return (
                <StyledIcon
                  state={isExist ? 'exist' : 'new'}
                  duplicated={duplicated}
                  key={icon}
                >
                  <RcIcon
                    color="neutral.f06"
                    symbol={duplicated ? RemoteComponent : IconComponent}
                  />
                  {isExist && (
                    <RcTypography color="neutral.f06" variant="subheading2">
                      {ComponentName}
                    </RcTypography>
                  )}
                  <RcTypography color="neutral.f03">{icon}</RcTypography>
                </StyledIcon>
              );
            })}
          </StyledList>
        </>
      )}
    </StyledMain>
  );
};
