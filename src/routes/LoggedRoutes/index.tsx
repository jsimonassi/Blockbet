import React from "react";
import {
	Routes,
	Route,
	BrowserRouter as Router
} from "react-router-dom";
import { CONSTANTS } from "../../constants";
import { Home } from "../../pages";


export const LoggedRoutes = () => {

	return (
		<Router>
			<Routes>
				<Route path={CONSTANTS.ROUTES.HOME} element={<Home />}/> 
			</Routes>
		</Router>
	);
};

