import { rcConfiguration } from '../config';

export const isShowJunoWarning =
  !rcConfiguration.WARNING_IGNORE && process.env.NODE_ENV !== 'production';
