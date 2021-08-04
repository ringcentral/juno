import { useTheme } from '../styled-components';
import { combineProps } from '../utils/combineProps';
import { RcComponentsProps } from './theme.type';

/**
 * use combine props from default theme props
 *
 * @see {@link https://ringcentral.github.io/juno/?path=/story/api-reference-hooks-usethemeprops--page 🔧-foundation-hooks-usethemeprops--use-theme-props-example}
 */
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
