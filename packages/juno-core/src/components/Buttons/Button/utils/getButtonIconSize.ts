import { RcBaseSize } from '../../../../foundation';
import { RcIconSize } from '../../../Icon';

export type RcButtonSize = RcBaseSize<
  'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
>;

export function getButtonIconSize(size?: RcButtonSize): RcIconSize {
  switch (size) {
    case 'xlarge':
      return 'large';
    case 'large':
      return 'medium';
    case 'small':
    case 'medium':
      return 'small';
    case 'xsmall':
      return 'xsmall';
    default:
      return 'inherit';
  }
}
