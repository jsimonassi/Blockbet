import {createContext} from 'react';
import {useSessionData} from './useSessionData';

export const SessionContext = createContext<ReturnType<
  typeof useSessionData
> | null>(null);
