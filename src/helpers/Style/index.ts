import { AppTheme } from "../../types/StyledComponents/AppTheme";

const getAppGradientBackground = (appTheme: AppTheme) => {

	return `linear-gradient(45deg, ${appTheme.palette.gradientStart} 0%, ${appTheme.palette.gradientEnd} 100%);`;
};

export const Style = {
	getAppGradientBackground
};