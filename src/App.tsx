import React from "react";
import { ThemeProvider } from "styled-components"

// routes
import Routes from "./routes";

// global styles
import CreateGlobalStyle from "./assets/styles/globalStyles";

// themes
import dark from "./assets/styles/themes/dark";
// import light from "./assets/styles/themes/light";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={dark}>
			<Routes />
			<CreateGlobalStyle />
		</ThemeProvider>
	);
}

export default App;
