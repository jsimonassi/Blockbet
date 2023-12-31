import React from "react";
import {
	Routes,
	Route,
	BrowserRouter as Router,
	Navigate
} from "react-router-dom";
import { CONSTANTS } from "../../constants";
import { CreateBet, History, Home } from "../../pages";


export const LoggedRoutes = () => {

	return (
		<Router>
			<Routes>
				<Route path="*" element={<Navigate to={CONSTANTS.ROUTES.HOME} />} />
				<Route path={CONSTANTS.ROUTES.HOME} element={<Home />}/> 
				<Route path={CONSTANTS.ROUTES.CREATE_BET} element={<CreateBet />}/> 
				<Route path={CONSTANTS.ROUTES.HISTORY} element={<History />}/> 
			</Routes>
		</Router>
	);
};

