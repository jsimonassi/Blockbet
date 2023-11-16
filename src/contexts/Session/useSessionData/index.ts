import {useState} from "react";

export const useSessionData = () => {
	const [currentSession, setCurrentSession] = useState<string | null>(null); //Put here infos about metameask account

	return {
		currentSession,
		setCurrentSession
	};
};
