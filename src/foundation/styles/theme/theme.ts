import { Theme as MuiTheme } from '@material-ui/core/styles/createMuiTheme';
import { Palette as MuiPalette } from '@material-ui/core/styles/createPalette';
import { ZIndex as MuiZIndex } from '@material-ui/core/styles/zIndex';

import { ThemedStyledProps } from '../../styled-components';
import { DeepPartial } from '../../typings';
import breakpoints from './assets/breakpoints.json';
import opacity from './assets/opacity.json';
import palette from './assets/palette.light.json';
import radius from './assets/radius.json';
import shape from './assets/shape.json';
import zIndex from './assets/zIndex.json';
import { RcTypographyType } from './typography.type';

import {
  RcAccordionProps,
  RcAccordionDetailsProps,
  RcAccordionSummaryProps,
} from '../../../components/Accordion';
import { RcAlertProps } from '../../../components/Alert';
import { RcAppBarProps } from '../../../components/AppBar';

import { RcAvatarProps } from '../../../components/Avatar';
import { RcBackdropProps } from '../../../components/Backdrop';
import { RcBadgeProps } from '../../../components/Badge';
import { RcBoxProps } from '../../../components/Box';
import {
  RcButtonProps,
  RcButtonGroupProps,
  RcIconButtonProps,
  RcIconButtonGroupProps,
  RcSplitButtonProps,
  RcToggleButtonProps,
  RcToggleButtonGroupProps,
} from '../../../components/Buttons';
import {
  RcCardProps,
  RcCardActionAreaProps,
  RcCardActionsProps,
  RcCardContentProps,
  RcCardHeaderProps,
  RcCardHoverActionsProps,
  RcCardMediaProps,
  RcCardSelectionAreaProps,
} from '../../../components/Card';
import { RcChipProps } from '../../../components/Chip';
import { RcDetachedWindowProps } from '../../../components/DetachedWindow';
import {
  RcDialerProps,
  RcDialDeleteProps,
  RcDialPadProps,
  RcDialTextFieldProps,
} from '../../../components/Dialer';
import {
  RcDialogProps,
  RcDialogActionsProps,
  RcDialogContentProps,
  RcDialogContentTextProps,
  RcDialogTitleProps,
} from '../../../components/Dialog';
import { RcDividerProps } from '../../../components/Divider';
import {
  RcDragDropContextProps,
  RcDraggableProps,
  RcDragHandleProps,
  RcDroppableProps,
} from '../../../components/DnD';
import {
  RcDownshiftProps,
  RcSuggestionListProps,
} from '../../../components/Downshift';
import { RcDrawerProps } from '../../../components/Drawer';
import { RcHighlightProps } from '../../../components/Animations/Highlight';
import {
  RcCheckboxProps,
  RcFormProps,
  RcFormControlLabelProps,
  RcFormControlProps,
  RcFormGroupProps,
  RcFormHelperTextProps,
  RcFormLabelProps,
  RcInputLabelProps,
  RcDatePickerProps,
  RcTimePickerProps,
  RcRadioProps,
  RcRadioGroupProps,
  RcSelectProps,
  RcSliderProps,
  RcSwitchProps,
  RcTextareaProps,
  RcTextFieldProps,
} from '../../../components/Forms';
import { RcGridProps } from '../../../components/Grid';
import { RcIconProps } from '../../../components/Icon';
import { RcInlineEditableProps } from '../../../components/InlineEditable';
import { RcLinkProps } from '../../../components/Link';
import {
  RcListProps,
  RcListItemProps,
  RcListItemAvatarProps,
  RcListItemIconProps,
  RcListItemSecondaryActionProps,
  RcListItemTextProps,
  RcListSubheaderProps,
} from '../../../components/List';
import { RcLoadingProps } from '../../../components/Loading';
import {
  RcMenuProps,
  RcMenuItemProps,
  RcMenuListProps,
  RcSubMenuProps,
} from '../../../components/Menu';
import {
  RcPaginationProps,
  RcPaginationItemProps,
} from '../../../components/Pagination';
import { RcPaperProps } from '../../../components/Paper';
import { RcPopoverProps } from '../../../components/Popover';
import { RcPopperProps } from '../../../components/Popper';
import { RcPopupBoxProps } from '../../../components/PopupBox';
import { RcPortalProps } from '../../../components/Portal';
import { RcPresenceProps } from '../../../components/Presence';
import {
  RcCircularProgressProps,
  RcLinearProgressProps,
} from '../../../components/Progress';
import { RcRatingProps } from '../../../components/Rating';
import { RcResponsiveProps } from '../../../components/Responsive';
import {
  RcSnackbarProps,
  RcSnackbarActionProps,
  RcSnackbarContentProps,
} from '../../../components/Snackbar';
import {
  RcStepProps,
  RcStepButtonProps,
  RcStepConnectorProps,
  RcStepContentProps,
  RcStepIconProps,
  RcStepLabelProps,
  RcStepperProps,
} from '../../../components/Stepper';
import { RcTablePaginationProps } from '../../../components/TablePagination';
import {
  TableHeadCellProps,
  TableHeadProps,
  RcTableProps,
} from '../../../components/Tables';
import {
  RcTabProps,
  RcTabListProps,
  RcTabPanelProps,
  RcTabsProps,
} from '../../../components/Tabs';
import { RcTagProps } from '../../../components/Tag';
import { RcTextProps } from '../../../components/Text';
import { RcThumbnailProps } from '../../../components/Thumbnail';
import { RcToolbarProps } from '../../../components/Toolbar';
import { RcTooltipProps } from '../../../components/Tooltip';
import {
  RcCollapseProps,
  RcFadeProps,
  RcGrowProps,
  RcSlideProps,
  RcZoomProps,
  RcZoomFromProps,
  RcZoomInFadeOutProps,
} from '../../../components/Transitions';
import { RcTypographyProps } from '../../../components/Typography';

import {
  RcVirtualizedDividerProps,
  RcVirtualizedMenuListProps,
  RcVirtualizedMenuProps,
} from '../../../components/VirtualizedMenu';

/** that theme provide user to custom with */
export interface DefaultTheme {}

/** inner for make `(DefaultTheme & ForExtendTheme)['palette']` work with ts */
type ForExtendTheme = { palette: {} };

export type RcPalette = typeof palette &
  (DefaultTheme & ForExtendTheme)['palette'] &
  MuiPalette;

export type RcPaletteColor = Omit<
  RcPalette,
  | 'type'
  | 'contrastThreshold'
  | 'getContrastText'
  | 'augmentColor'
  | 'tonalOffset'
>;

type Opacity = typeof opacity;
type Radius = typeof radius;
type ZIndex = typeof zIndex & MuiZIndex;
type Shape = typeof shape;
type Breakpoints = typeof breakpoints;

export type RcTheme = {
  palette: RcPalette;
  typography: RcTypographyType;
  opacity: Opacity;
  radius: Radius;
  zIndex: ZIndex;
  shape: Shape;
  breakpoints: Breakpoints;
} & Omit<MuiTheme, 'palette'> &
  DefaultTheme & {
    props?: {
      RcAccordion?: RcAccordionProps;
      RcAccordionDetails?: RcAccordionDetailsProps;
      RcAccordionSummary?: RcAccordionSummaryProps;
      RcAlert?: RcAlertProps;
      RcAppBar?: RcAppBarProps;
      RcAvatar?: RcAvatarProps;
      RcBackdrop?: RcBackdropProps;
      RcBadge?: RcBadgeProps;
      RcBox?: RcBoxProps;

      RcButton?: RcButtonProps;
      RcButtonGroup?: RcButtonGroupProps;
      RcIconButton?: RcIconButtonProps;
      RcIconButtonGroup?: RcIconButtonGroupProps;
      RcSplitButton?: RcSplitButtonProps;
      RcToggleButton?: RcToggleButtonProps;
      RcToggleButtonGroup?: RcToggleButtonGroupProps;

      RcCard?: RcCardProps;
      RcCardActionArea?: RcCardActionAreaProps;
      RcCardActions?: RcCardActionsProps;
      RcCardContent?: RcCardContentProps;
      RcCardHeader?: RcCardHeaderProps;
      RcCardHoverActions?: RcCardHoverActionsProps;
      RcCardMedia?: RcCardMediaProps;
      RcCardSelectionArea?: RcCardSelectionAreaProps;

      RcChip?: RcChipProps;
      RcDetachedWindow?: RcDetachedWindowProps;

      RcDialer?: RcDialerProps;
      RcDialDelete?: RcDialDeleteProps;
      RcDialPad?: RcDialPadProps;
      RcDialTextField?: RcDialTextFieldProps;

      RcDialog?: RcDialogProps;
      RcDialogActions?: RcDialogActionsProps;
      RcDialogContent?: RcDialogContentProps;
      RcDialogContentText?: RcDialogContentTextProps;
      RcDialogTitle?: RcDialogTitleProps;
      RcDivider?: RcDividerProps;
      RcDragDropContext?: RcDragDropContextProps;
      RcDraggable?: RcDraggableProps;
      RcDragHandle?: RcDragHandleProps;
      RcDroppable?: RcDroppableProps;

      RcDownshift?: RcDownshiftProps;
      RcSuggestionList?: RcSuggestionListProps<any>;
      RcDrawer?: RcDrawerProps;
      RcHighlight?: RcHighlightProps;

      RcCheckbox?: RcCheckboxProps;
      RcForm?: RcFormProps;
      RcFormControlLabel?: RcFormControlLabelProps;
      RcFormControl?: RcFormControlProps;
      RcFormGroup?: RcFormGroupProps;
      RcFormHelperText?: RcFormHelperTextProps;
      RcFormLabel?: RcFormLabelProps;
      RcInputLabel?: RcInputLabelProps;
      RcDatePicker?: RcDatePickerProps;
      RcTimePicker?: RcTimePickerProps;
      RcRadio?: RcRadioProps;
      RcRadioGroup?: RcRadioGroupProps;
      RcSelect?: RcSelectProps;
      RcSlider?: RcSliderProps;
      RcSwitch?: RcSwitchProps;
      RcTextarea?: RcTextareaProps;
      RcTextField?: RcTextFieldProps;

      RcGrid?: RcGridProps;
      RcIcon?: RcIconProps;
      RcInlineEditable?: RcInlineEditableProps;
      RcLink?: RcLinkProps;

      RcList?: RcListProps;
      RcListItem?: RcListItemProps;
      RcListItemAvatar?: RcListItemAvatarProps;
      RcListItemIcon?: RcListItemIconProps;
      RcListItemSecondaryAction?: RcListItemSecondaryActionProps;
      RcListItemText?: RcListItemTextProps;
      RcListSubheader?: RcListSubheaderProps;

      RcLoading?: RcLoadingProps;

      RcMenu?: RcMenuProps;
      RcMenuItem?: RcMenuItemProps;
      RcMenuList?: RcMenuListProps;
      RcSubMenu?: RcSubMenuProps;

      RcPagination?: RcPaginationProps;
      RcPaginationItem?: RcPaginationItemProps;

      RcPaper?: RcPaperProps;
      RcPopover?: RcPopoverProps;
      RcPopper?: RcPopperProps;
      RcPopupBox?: RcPopupBoxProps;
      RcPortal?: RcPortalProps;
      RcPresence?: RcPresenceProps;

      RcCircularProgress?: RcCircularProgressProps;
      RcLinearProgress?: RcLinearProgressProps;

      RcRating?: RcRatingProps;
      RcResponsive?: RcResponsiveProps;
      RcSnackbar?: RcSnackbarProps;
      RcSnackbarAction?: RcSnackbarActionProps;
      RcSnackbarContent?: RcSnackbarContentProps;

      RcStep?: RcStepProps;
      RcStepButton?: RcStepButtonProps;
      RcStepConnector?: RcStepConnectorProps;
      RcStepContent?: RcStepContentProps;
      RcStepIcon?: RcStepIconProps;
      RcStepLabel?: RcStepLabelProps;
      RcStepper?: RcStepperProps;

      RcTablePagination?: RcTablePaginationProps;

      RcTableHeadCell?: TableHeadCellProps;
      RcTableHeadView?: TableHeadProps;
      RcTable?: RcTableProps;

      RcTab?: RcTabProps;
      RcTabList?: RcTabListProps;
      RcTabPanel?: RcTabPanelProps;
      RcTabs?: RcTabsProps;

      RcTag?: RcTagProps;
      RcText?: RcTextProps;
      RcThumbnail?: RcThumbnailProps;
      RcToolbar?: RcToolbarProps;
      RcTooltip?: RcTooltipProps;

      RcCollapse?: RcCollapseProps;
      RcFade?: RcFadeProps;
      RcGrow?: RcGrowProps;
      RcSlide?: RcSlideProps;
      RcZoom?: RcZoomProps;
      RcZoomFrom?: RcZoomFromProps;
      RcZoomInFadeOut?: RcZoomInFadeOutProps;

      RcTypography?: RcTypographyProps;

      RcVirtualizedDivider: RcVirtualizedDividerProps;
      RcVirtualizedMenu?: RcVirtualizedMenuProps;
      RcVirtualizedMenuList?: RcVirtualizedMenuListProps;
    };
  };

export type RcComponentsProps = NonNullable<RcTheme['props']>;

export type RcThemeProps = {
  theme: RcTheme;
};

export type RcThemedStyled<T = any, K = (themeOptions: RcThemeProps) => any> = (
  props: ThemedStyledProps<T, RcTheme>,
) => K;

export type RcThemeInput = DeepPartial<RcTheme>;

/** @deprecated use `RcPaletteProp` to replace that for full type support */
export type RcColorSet = string[] | string;
