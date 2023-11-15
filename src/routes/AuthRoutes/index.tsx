import React from "react";
import {
	Routes,
	Route,
	BrowserRouter as Router
} from "react-router-dom";
import { CONSTANTS } from "../../constants";
import { Home } from "../../pages";

export const AuthRoutes = () => {


	return (
		<Router>
			<Routes>
				<Route path={CONSTANTS.ROUTES.SIGN_IN} element={<Home />}/> 
			</Routes>
		</Router>
	);
};
