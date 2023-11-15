import React from 'react';
import { AuthRoutes, LoggedRoutes } from './routes';
import { useSessionContext } from './contexts/Session';

function App() {

  const sessionContext = useSessionContext();

  if(sessionContext.currentSession) { //Is Logged?
    return (<LoggedRoutes />);
  }

  return ( <AuthRoutes />);
}

export default App;
