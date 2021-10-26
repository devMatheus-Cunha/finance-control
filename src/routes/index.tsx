import React from "react";
import { BrowserRouter } from "react-router-dom";

// layout
import AppRoutes from "./app.routes";

// import { Container } from './styles';

const Routes: React.FC = () => (
	<BrowserRouter>
		<AppRoutes />
	</BrowserRouter>
);

export default Routes;
