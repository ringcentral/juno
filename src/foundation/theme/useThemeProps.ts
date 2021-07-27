import { useTheme } from '../styled-components';
import { combineProps } from '../utils/combineProps';
import { RcComponentsProps } from './theme.type';

export function useThemeProps<T, K extends keyof RcComponentsProps>({
  props,
  name,
}: {
  props: T;
  name: K;
}) {
  const theme = useTheme();

  return combineProps((theme.props as any)?.[name], props) as T;
}
