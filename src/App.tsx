import React from "react";
import { ThemeProvider } from "styled-components";

// hooks
import { useTheme } from "./hooks/useTheme";

// routes
import Routes from "./routes";

// global styles
import CreateGlobalStyle from "./assets/styles/globalStyles";

const App: React.FC = () => {
	const { theme } = useTheme();
	return (
		<ThemeProvider theme={theme}>
			<Routes />
			<CreateGlobalStyle />
		</ThemeProvider>
	);
};

export default App;
