import React from "react";
import {
	Routes,
	Route,
	BrowserRouter as Router
} from "react-router-dom";
import { CONSTANTS } from "../../constants";
import { Home } from "../../pages";
// import { useAppTheme } from "../contexts/Theme";
// import "../assets/styles/App.css";
// import GlobalStyle from "../assets/styles/GlobalStyle";
// import CONSTANTS from "../constants";
// import PrivateRoute from "../services/auth/PrivateRoute";
// import Menu from "../components/Menu";
// import { About, ErrorPage, MyClasses, OldClasses, PostLogin } from "../pages";

export const LoggedRoutes = () => {

	// const { currentTheme } = useAppTheme();

	return (
		<Router>
			{/* <GlobalStyle theme={currentTheme} /> */}
			<Routes>
				<Route path={CONSTANTS.ROUTES.HOME} element={<Home />}/> 
			</Routes>
		</Router>
	);
};

