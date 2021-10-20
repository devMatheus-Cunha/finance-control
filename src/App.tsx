import React from "react";
import { ThemeProvider } from "styled-components"

// view
import Dashboard from "./view/dashboard";
import { TransactionsContainer } from "./container/transactions";

// global styles
import CreateGlobalStyle from "./assets/styles/globalStyles";

// themes
import dark from "./assets/styles/themes/dark";
// import light from "./assets/styles/themes/light";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={dark}>
			<Dashboard />
			<TransactionsContainer />
			<CreateGlobalStyle />
		</ThemeProvider>
	);
}

export default App;
