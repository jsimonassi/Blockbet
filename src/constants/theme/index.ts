import { AppTheme } from "../../types/StyledComponents/AppTheme";

const DARK_THEME: AppTheme = {
	palette: {
		primaryColor: "#E27031",
		pageBackground: "#4C4C4C",

		surface1: "#737373", //Cards and first layer surfaces
		surface2: "#D9D9D9", // Surface over surface1
		surface3: "#272727", //Header and footer, if exists

		gradientStart: "#E27031",
		gradientEnd: "#B56639",

		textPrimary: "#FFFFFF",
		icons: "#FFFFFF",

		modalBackdrop: "#0000007D",
	},
};

export const THEMES = {
	DARK_THEME,
};
