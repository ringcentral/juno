import { RcClasses } from '../../../foundation';
import { RcRatingProps } from '../Rating';

const RcRatingClasses = RcClasses<RcRatingProps>(
  [
    'readOnly',
    'disabled',
    'focusVisible',
    'pristine',
    'label',
    'icon',
    'iconEmpty',
    'iconFilled',
    'iconActive',
  ],
  'RcRating',
);

export { RcRatingClasses };
