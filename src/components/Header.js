import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Box from "@material-ui/core/Box";

import LogoPic from "../static/images/Logo.png";
import "./Header.css";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		paddingTop: "7px",
		position: "fixed",
		top: "0%",
		display: "flex",
		width: "100vw",
		zIndex: "100",

		[theme.breakpoints.down("sm")]: {
			background:
				"linear-gradient(90deg, rgba(164, 174, 223, 1) 9%, rgba(255, 112, 160, 1) 100%)",
		},
	},

	appBar: {
		background: "transparent",
		[theme.breakpoints.down("sm")]: {
			background:
				"linear-gradient(90deg, rgba(164, 174, 223, 1) 9%, rgba(255, 112, 160, 1) 100%)",
		},
		boxShadow: "none",
		color: "#3d3d3d",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},

	button: {
		textTransform: "none",
	},
}));

function Header() {
	const classes = useStyles();
	const location = useLocation();

	if (location.pathname !== "/:cardUrlId") {
		return (
			<div className={classes.root}>
				<AppBar position="static" className={classes.appBar}>
					<Toolbar>
						{/* <Typography variant="h6" className={classes.title}>
							OneLink
						</Typography> */}
						<Box flexGrow={1}>
							<Link to="/">
								<img
									src={LogoPic}
									alt="Logo"
									className={"Header__logo"}
								/>
							</Link>
						</Box>

						<Button
							color="inherit"
							className={classes.button}
							style={{ marginRight: "1rem" }}
							component={Link}
							to={"/signin"}
						>
							Login
						</Button>
						<Button
							variant="contained"
							color="primary"
							className={classes.button}
							component={Link}
							to={"/signup"}
						>
							Sign Up
						</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	} else {
		return null;
	}
}

export default Header;
