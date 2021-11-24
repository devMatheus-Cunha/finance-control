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
	const [theme, setTheme] = useState<ITheme>(() => {
		const themeSeved = localStorage.getItem("@finance-control:theme")
		if (themeSeved) {
			return JSON.parse(themeSeved)
		}
		return dark
	});

	const toggleTheme = () => {
		if (theme.title === "dark") {
			setTheme(light);
			localStorage.setItem("@finance-control:theme", JSON.stringify(light))
		} else {
			setTheme(dark);
			localStorage.setItem("@finance-control:theme", JSON.stringify(dark))
		}
	};

	return (
		<ThemeContext.Provider value={{ toggleTheme, theme }}>
			{children}
		</ThemeContext.Provider>
	);
};
