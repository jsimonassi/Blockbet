import {useState} from "react";

export const useSessionData = () => {
	const [currentSession, setCurrentSession] = useState<null>(null); //Put here infos about metameask account

	return {
		currentSession,
		setCurrentSession
	};
};
