import React from "react";
import { AppBar, Toolbar, ButtonBase, IconButton, useTheme } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import LogoComponent from "../logo";
import SignOutIcon from "@mui/icons-material/ExitToApp";
import DraftIcon from "@mui/icons-material/Drafts";
import { logoutUser } from "../../helpers/user-helper";

import "./styles.css";

const AdminNavbarComponent = () => {
	const history = useHistory();
	const theme = useTheme();

	const handleLogout = () => {
		logoutUser();
	};

	return (
		<AppBar elevation={10} position="static">
			<Toolbar variant="dense" className="navbar-container">
				<ButtonBase component={Link} to="/dashboard">
					<LogoComponent />
				</ButtonBase>
				<div className="action-items">
					<IconButton onClick={() => history.push("/drafts")}>
						<DraftIcon style={{ color: theme.palette.primary.contrastText }} />
					</IconButton>
					<IconButton onClick={handleLogout}>
						<SignOutIcon style={{ color: theme.palette.primary.contrastText }} />
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default AdminNavbarComponent;
