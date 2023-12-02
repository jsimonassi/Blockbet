import { useState } from "react";
import { MetaMaskUser } from "../../../types/User";

export const useSessionData = () => {
  const [currentSession, setCurrentSession] = useState<MetaMaskUser | null>(
    null
  );

  return {
    currentSession,
    setCurrentSession,
  };
};
