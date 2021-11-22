import {
  hasValue as MuiHasValue,
  isFilled as MuiIsFilled,
} from '@material-ui/core/InputBase/utils';

/**
 * Copy from Mui
 * @see https://facebook.github.io/react/docs/forms.html#controlled-components
 * @param value
 * @returns {boolean} true if string (including '') or number (including zero)
 */
export const hasValue: (value: any) => boolean = MuiHasValue;

/**
 * Determine if field is empty or filled.
 * Response determines if label is presented above field or as placeholder.

 * @param obj
 * @param SSR
 * @returns {boolean} False when not present or empty string.
                    True when any number or string with length.
 */
export const isFilled: (obj: { value: any }, SSR?: boolean) => boolean =
  MuiIsFilled;
