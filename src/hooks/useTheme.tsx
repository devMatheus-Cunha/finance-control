import { useContext } from "react";

// context
import { ThemeContext } from "../context/theme";
import { IThemeContext } from "../context/theme/interface";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export function useTheme(): IThemeContext {
	const context = useContext(ThemeContext);

	return context;
}
