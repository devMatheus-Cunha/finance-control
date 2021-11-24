import React from "react";
import ReactDOM from "react-dom";

// container
import App from "./App";

// context
import { ThemeProvider } from "./context/theme";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);
