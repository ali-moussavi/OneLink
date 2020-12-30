import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link as routerLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import DashboardCard from "../components/DashboardCard";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "4rem",
		paddingTop: "1rem",
		paddingLeft: "2rem",
	},

	dashboardPage: {
		flexGrow: 1,
		background:
			"linear-gradient(90deg, rgba(164, 174, 223, 1) 9%, rgba(255, 112, 160, 1) 100%)",
		minHeight: "100vh",
	},
}));

function Dashboard() {
	const classes = useStyles();
	return (
		<Grid
			container
			justify="center"
			alignItems="center"
			direction="column"
			className={classes.dashboardPage}
		>
			<Grid
				container
				direction="row"
				justify="flex-start"
				alignItems="center"
				className={classes.root}
			>
				<Typography
					variant="h3"
					style={{
						fontWeight: "200",
						color: "#115293",
						borderBottom: "2px solid #f500578c",
					}}
				>
					Dashboard
				</Typography>
			</Grid>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				style={{ padding: "1.2rem 0 2rem 0" }}
			>
				<DashboardCard></DashboardCard>
			</Grid>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				style={{ padding: "2rem" }}
			>
				<Button
					variant="contained"
					color="primary"
					component={routerLink}
					to={"/cards/new"}
					size="large"
				>
					Add New Card
				</Button>
			</Grid>
		</Grid>
	);
}

export default Dashboard;
