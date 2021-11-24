import React from "react";
import { Switch, Route } from "react-router-dom"

// layout
import Layout from "../layout";

// view
import Dashboard from "../view/dashboard";
import Transactions from "../view/transactions";

// import { Container } from './styles';

const AppRoutes = () => (
	<Layout>
		<Switch>
			<Route path="/dashboard" component={Dashboard} exact />
			<Route path="/transactions/:type" component={Transactions} exact />
		</Switch>
	</Layout>
)

export default AppRoutes;
