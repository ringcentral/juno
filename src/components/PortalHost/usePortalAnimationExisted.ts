import { usePortalController } from './PortalControllerProvider';
import { TransitionHandlerProps } from '@material-ui/core/transitions';
import { useEventCallback } from '../../foundation';

export const usePortalAnimationExisted = (
  onExitedProp?: TransitionHandlerProps['onExited'],
) => {
  const controller = usePortalController();

  const handleExited = useEventCallback<
    NonNullable<TransitionHandlerProps['onExited']>
  >((node) => {
    onExitedProp?.(node);
    controller?.unmount();
  });

  return handleExited;
};
