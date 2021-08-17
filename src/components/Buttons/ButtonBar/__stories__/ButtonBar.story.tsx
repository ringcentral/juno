import { boolean, number, select } from '@storybook/addon-knobs';
import React from 'react';

import refresh from '../../../../icon/Refresh';
import star from '../../../../icon/Star';
import starBorder from '../../../../icon/StarBorder';
import { RcCheckbox } from '../../../Forms/Checkbox';
import { RcIcon } from '../../../Icon';
import { RcIconButton } from '../../IconButton/IconButton';
import { RcButtonBar, RcButtonBarProps } from '../ButtonBar';

export default {
  title: '🖤 deprecated Components/Buttons/ButtonBar',
};

function getKnobs() {
  const direction = select<RcButtonBarProps['direction']>(
    'direction',
    {
      vertical: 'vertical',
      horizontal: 'horizontal',
    },
    'horizontal',
  );

  const size = select(
    'size',
    {
      small: 'small',
      medium: 'medium',
      large: 'large',
    },
    'medium',
  );

  const overlapSize = number('overlapSize', 0);
  const invisible = boolean('invisible', false);
  return {
    direction,
    size,
    overlapSize,
    invisible,
  };
}

export const PlainIconButtonBar = () => {
  return (
    <div>
      <RcButtonBar {...getKnobs()}>
        <RcIconButton variant="plain" title="like" symbol={refresh} />
        <RcIconButton variant="plain" title="like" symbol={refresh} />
        <RcIconButton variant="plain" title="like" symbol={refresh} />
        <RcIconButton variant="plain" title="like" symbol={refresh} />
      </RcButtonBar>
    </div>
  );
};

export const RoundIconButtonBar = () => {
  return (
    <div>
      <RcButtonBar {...getKnobs()}>
        <RcIconButton variant="round" title="like" symbol={refresh} />
        <RcIconButton variant="round" title="like" symbol={refresh} />
        <RcIconButton variant="round" title="like" symbol={refresh} />
        <RcIconButton variant="round" title="like" symbol={refresh} />
      </RcButtonBar>
    </div>
  );
};

export const CheckboxButtonBar = () => {
  return (
    <div>
      <RcButtonBar {...getKnobs()}>
        <RcCheckbox
          title="favorite"
          useRcTooltip
          icon={<RcIcon symbol={starBorder} />}
          checkedIcon={<RcIcon symbol={star} />}
        />
        <RcCheckbox
          title="favorite"
          useRcTooltip
          icon={<RcIcon symbol={starBorder} />}
          checkedIcon={<RcIcon symbol={star} />}
        />
        <RcCheckbox
          title="favorite"
          icon={<RcIcon symbol={starBorder} />}
          checkedIcon={<RcIcon symbol={star} />}
        />
        <RcCheckbox
          title="favorite"
          icon={<RcIcon symbol={starBorder} />}
          checkedIcon={<RcIcon symbol={star} />}
        />
      </RcButtonBar>
    </div>
  );
};
