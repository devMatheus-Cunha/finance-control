import { useContext } from "react";

// context
import { IThemeContext } from "../context/interface";
import { ThemeContext } from "../context/theme";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export function useTheme(): IThemeContext {
	const context = useContext(ThemeContext);

	return context;
}
