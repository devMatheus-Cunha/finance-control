import React from "react";
import ReactDOM from "react-dom";

// container
import App from "./App";

// context
import { ThemeProvider } from "./context/theme";
import { AuthProvider } from "./context/auth";

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);
