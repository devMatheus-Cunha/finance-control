import React from "react";
import { Switch, Route } from "react-router-dom"

// view
import Auth from "../view/auth";

const AuthRoutes = () => (
	<Switch>
		<Route path="/" component={Auth} exact />
	</Switch>
)

export default AuthRoutes;
