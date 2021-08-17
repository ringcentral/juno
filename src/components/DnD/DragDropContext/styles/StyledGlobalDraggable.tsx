import {
  createGlobalStyle,
  opacity,
  palette2,
  shadows,
  fakeBorder,
} from '../../../../foundation';
import { RcDraggableClasses } from '../../Draggable/utils';

export const GlobalDraggableStyle = createGlobalStyle`
  .${RcDraggableClasses.root} {
    &::before, &::after {
      content: '';
      opacity: 0;
      transition: opacity .2s;
    }
  }

  .${RcDraggableClasses.isDragging} {
    &::before, &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 1;
    }

    &::before {
      background-color: ${palette2('action', 'grayLight')};
      opacity: ${opacity('16')};
    }

    &::after {
      box-shadow: ${shadows('8')};
    }

    background-color: ${palette2('neutral', 'elevation')} !important;
    ${fakeBorder()};
    opacity: ${opacity('88')} !important;
    position: relative;
  }
`;
