import React from "react";

// global styles
import CreateGlobalStyle from "./assets/styles/globalStyles";
import Dashboard from "./view/dashboard";

const App: React.FC = () => {
	return (
		<>
			<Dashboard />
			<CreateGlobalStyle />
		</>
	);
}

export default App;
