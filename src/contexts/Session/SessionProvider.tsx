import React, {ReactNode} from 'react';
import {SessionContext} from './SessionContext';
import {useSessionData} from './useSessionData';

interface OwnProps {
  children: ReactNode;
}

export const SessionProvider = ({children}: OwnProps) => {
  return (
    <SessionContext.Provider value={useSessionData()}>
      {children}
    </SessionContext.Provider>
  );
};
