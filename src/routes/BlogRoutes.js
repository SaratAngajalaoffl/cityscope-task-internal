import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminNavbarComponent from "../components/navbar/AdminNavbar";
import DashboardScreen from "../screens/core/dashboard";
import DraftsScreen from "../screens/core/drafts";
import EditBlogScreen from "../screens/core/edit-blog";

function AdminRoutes() {
	return (
		<>
			<AdminNavbarComponent />
			<Switch>
				<Route exact path="/drafts" component={DraftsScreen} />
				<Route exact path="/edit/:blogId" component={EditBlogScreen} />
				<Route path="*" component={DashboardScreen} />
			</Switch>
		</>
	);
}

export default AdminRoutes;
