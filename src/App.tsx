import React from "react";
import { AuthRoutes, LoggedRoutes } from "./routes";
import { useSessionContext } from "./contexts/Session";
import { ThemeProvider } from "styled-components";
import AppProvider from "./contexts";
import { CONSTANTS } from "./constants";
import { Toaster } from "react-hot-toast";
import GlobalStyle from "./assets/styles/GlobalStyle";


const MainRouter = () => {
	const sessionContext = useSessionContext();

	if (sessionContext.currentSession) { //Is Logged?
		return (<LoggedRoutes />);
	}

	return (<AuthRoutes />);
};


const App = () => {

	return (
		// Can be replaced by useTheme, if you want to change the theme dynamically
		<ThemeProvider theme={CONSTANTS.THEMES.DARK_THEME}>
			<AppProvider>
				<Toaster
					toastOptions={{
						style: {
							fontFamily: "Light"
						},
						success: {
							iconTheme: {
								primary: "green",
								secondary: "white",
							},
						},
					}}
				/>
				<GlobalStyle />
				<MainRouter />
			</AppProvider>
		</ThemeProvider>
	);

};

export default App;
