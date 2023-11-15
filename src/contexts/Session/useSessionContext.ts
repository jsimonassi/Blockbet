import {useContext} from 'react';
import {SessionContext} from './SessionContext';

export const useSessionContext = () => {
  const contextData = useContext(SessionContext);
  if (!contextData) {
    throw new Error('Trying to access context outside provider.');
  }

  return contextData;
};
