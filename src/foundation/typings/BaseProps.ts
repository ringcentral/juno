export type RcBaseProps<T, K extends keyof T | '' = ''> = Omit<T, K>;
