import React from "react";
import { ThemeProvider } from "styled-components"

// layout
import Layout from "./layout";

// view
import Dashboard from "./view/dashboard";
import Transactionsfrom from "./view/transactions";

// global styles
import CreateGlobalStyle from "./assets/styles/globalStyles";

// themes
import dark from "./assets/styles/themes/dark";
// import light from "./assets/styles/themes/light";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={dark}>
			<Layout>
				<Transactionsfrom />
				{/* <Dashboard /> */}
			</Layout>
			<CreateGlobalStyle />
		</ThemeProvider>
	);
}

export default App;
