import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Link as routerLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import "./DashboardCard.css";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: "0 .5rem",
	},
	firstCard: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: ".5rem",
		width: "100%",
		paddingTop: ".5rem",
	},
	nameTitle: {
		paddingLeft: "1rem",
		// alignSelf: "flex-end",
	},
	large: {
		marginLeft: ".5rem",
		width: 100,
		height: 100,
		marginBottom: ".5rem",
	},
}));

function DashboardCard() {
	const classes = useStyles();

	return (
		<Box boxShadow={3} margin={2} className="DashboardCard">
			<Grid container direction="column">
				<Grid item xs={12} style={{ padding: "0 1rem 1rem 1rem" }}>
					<div className={classes.firstCard}>
						<Avatar
							alt="Remy Sharp"
							src={"https://randomuser.me/api/portraits/men/18.jpg"}
							className={classes.large}
						/>
						<div className={classes.nameTitle}>
							<Typography
								variant="h5"
								style={{ fontWeight: "500", marginBottom: ".3rem" }}
							>
								{"John Smith"}
							</Typography>
							<Typography
								variant="h6"
								style={{
									marginBottom: ".5rem",
									fontWeight: "300",
									lineHeight: "1.1",
								}}
							>
								{"Web Developer"}
							</Typography>
						</div>
					</div>
				</Grid>
				<Grid
					style={{ paddingBottom: ".5rem" }}
					container
					item
					xs={12}
					direction="row"
					justify="center"
					alignItems="center"
				>
					<Typography
						variant="h5"
						style={{ fontWeight: "500", marginBottom: ".8rem" }}
					>
						{"Views: 24"}
					</Typography>
				</Grid>
				<Grid
					style={{ paddingBottom: ".5rem" }}
					container
					item
					xs={12}
					direction="row"
					justify="center"
					alignItems="center"
				>
					<Button
						variant="contained"
						color="primary"
						component={routerLink}
						to={"/cards/new"}
						size="small"
						className={classes.button}
					>
						View Card
					</Button>
					<Button
						variant="contained"
						color="secondary"
						component={routerLink}
						to={"/cards/new"}
						size="small"
						className={classes.button}
					>
						Edit Card
					</Button>
					<Button
						variant="contained"
						color="default"
						component={routerLink}
						to={"/cards/new"}
						size="small"
						className={classes.button}
						endIcon={<DeleteIcon />}
					>
						Delete
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
}

export default DashboardCard;
