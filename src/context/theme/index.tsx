import React, { createContext, useState } from "react";

// themes
import dark from "../../assets/styles/themes/dark";
import light from "../../assets/styles/themes/light";

// interface
import { ITheme, IThemeContext, IThemeProvider } from "./interface";

// create context
export const ThemeContext = createContext({} as IThemeContext);

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export const ThemeProvider = ({ children }: IThemeProvider) => {
	// states
	const [theme, setTheme] = useState<ITheme>(dark);

	const toggleTheme = () => {
		if (theme.title === "dark") {
			setTheme(light);
		} else {
			setTheme(dark);
		}
	};

	return (
		<ThemeContext.Provider value={{ toggleTheme, theme }}>
			{children}
		</ThemeContext.Provider>
	);
};
