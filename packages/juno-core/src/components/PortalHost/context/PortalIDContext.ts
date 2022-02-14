import { createContext } from 'react';

import { UniqID } from '../PortalManager';

export const PortalIDContext = createContext<UniqID | undefined>(undefined);

export const PortalIDProvider = PortalIDContext.Provider;
