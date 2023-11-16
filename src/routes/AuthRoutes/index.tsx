import React from "react";
import {
	Routes,
	Route,
	BrowserRouter as Router,
	Navigate
} from "react-router-dom";
import { CONSTANTS } from "../../constants";
import { SignIn } from "../../pages/SignIn";

export const AuthRoutes = () => {


	return (
		<Router>
			<Routes>
				{/* If enter in this stack without login, redirect */}
				<Route path="*" element={<Navigate to={CONSTANTS.ROUTES.SIGN_IN} />} />
				<Route path={CONSTANTS.ROUTES.SIGN_IN} element={<SignIn />} />
			</Routes>
		</Router>
	);
};
