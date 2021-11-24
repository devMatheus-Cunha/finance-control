import React from "react";
import { BrowserRouter } from "react-router-dom";

// layout
import AuthRoutes from "./auth.routes";

const Routes = () => (
	<BrowserRouter>
		<AuthRoutes />
	</BrowserRouter>
);

export default Routes;
