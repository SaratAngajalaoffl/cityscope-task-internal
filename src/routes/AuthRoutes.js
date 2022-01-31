import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthNavbarComponent from "../components/navbar/AuthNavbar";
import LoginScreen from "../screens/auth/login";

function AuthRoutes() {
	return (
		<>
			<AuthNavbarComponent />
			<Switch>
				<Route exact path="*" component={LoginScreen} />
			</Switch>
		</>
	);
}

export default AuthRoutes;
