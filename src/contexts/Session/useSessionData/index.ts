import { useEffect, useState } from "react";
import { MetaMaskUser } from "../../../types/User";

export const useSessionData = () => {
  const [currentSession, setCurrentSession] = useState<MetaMaskUser | null>(null);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setCurrentSession(JSON.parse(currentUser));
    }
  }, []);

  const updateCurrentUser = (user: MetaMaskUser) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    setCurrentSession(user);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentSession(null);
    //TODO: Validar se precisar deslogar da metamask
  };

  return {
    currentSession,
    updateCurrentUser,
    logout
  };
};
