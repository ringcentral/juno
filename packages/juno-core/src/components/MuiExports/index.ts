/**
 * MUI Components Re-exports
 *
 * These are direct re-exports from @material-ui/core and @material-ui/lab.
 * They are prefixed with "Mui" to indicate they are raw MUI components,
 * not JUNO-styled wrappers.
 *
 * Usage:
 * ```tsx
 * import { MuiFab, MuiCollapse, MuiListItem } from '@ringcentral/juno';
 * ```
 *
 * Note: These exports exist to centralize MUI dependencies.
 * Consider using JUNO components (Rc* prefixed) when available.
 */

// ============================================
// @material-ui/core Components
// ============================================

// Buttons
export { default as MuiFab } from '@material-ui/core/Fab';

// Transitions
export { default as MuiCollapse } from '@material-ui/core/Collapse';
export { default as MuiSlide } from '@material-ui/core/Slide';

// List
export { default as MuiListItem } from '@material-ui/core/ListItem';
export { default as MuiListItemText } from '@material-ui/core/ListItemText';
export { default as MuiListItemIcon } from '@material-ui/core/ListItemIcon';

// Form Inputs
export { default as MuiTextField } from '@material-ui/core/TextField';
export { default as MuiInput } from '@material-ui/core/Input';
export { default as MuiInputLabel } from '@material-ui/core/InputLabel';
export { default as MuiInputAdornment } from '@material-ui/core/InputAdornment';
export { default as MuiFormHelperText } from '@material-ui/core/FormHelperText';

// Progress
export { default as MuiCircularProgress } from '@material-ui/core/CircularProgress';

// Card (additional exports not in RcCard)
export { default as MuiCardContent } from '@material-ui/core/CardContent';

// ============================================
// @material-ui/lab Components
// ============================================

export { default as MuiAutocomplete } from '@material-ui/lab/Autocomplete';

// ============================================
// Type exports
// ============================================

export type { FabProps as MuiFabProps } from '@material-ui/core/Fab';
export type { CollapseProps as MuiCollapseProps } from '@material-ui/core/Collapse';
export type { SlideProps as MuiSlideProps } from '@material-ui/core/Slide';
export type { ListItemProps as MuiListItemProps } from '@material-ui/core/ListItem';
export type { ListItemTextProps as MuiListItemTextProps } from '@material-ui/core/ListItemText';
export type { ListItemIconProps as MuiListItemIconProps } from '@material-ui/core/ListItemIcon';
export type { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';
export type { InputProps as MuiInputProps } from '@material-ui/core/Input';
export type { InputLabelProps as MuiInputLabelProps } from '@material-ui/core/InputLabel';
export type { InputAdornmentProps as MuiInputAdornmentProps } from '@material-ui/core/InputAdornment';
export type { FormHelperTextProps as MuiFormHelperTextProps } from '@material-ui/core/FormHelperText';
export type { CircularProgressProps as MuiCircularProgressProps } from '@material-ui/core/CircularProgress';
export type { CardContentProps as MuiCardContentProps } from '@material-ui/core/CardContent';
export type { AutocompleteProps as MuiAutocompleteProps } from '@material-ui/lab/Autocomplete';

