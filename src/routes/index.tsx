import React from "react";
import { BrowserRouter } from "react-router-dom";

// hooks
import { useAuth } from "../hooks/useAuth";

// routes
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes = () => {
	const { logged } = useAuth()
	return (
		<BrowserRouter>
			{logged ? <AppRoutes /> :	<AuthRoutes />}
		</BrowserRouter>
	);
};

export default Routes;
