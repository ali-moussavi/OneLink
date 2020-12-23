import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LinkIcon from "@material-ui/icons/Link";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import avatarImage from "../static/images/avatar2.jpg";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import CustomButton from "../components/CustomButton";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		maxWidth: 320,
		minWidth: 320,
		borderRadius: 10,
		marginBottom: ".5rem",
		backgroundColor: "white",
	},
	large: {
		marginLeft: ".5rem",
		width: 100,
		height: 100,
		marginBottom: ".5rem",
	},
	firstCard: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-begin",
		alignItems: "center",
		paddingBottom: ".5rem",
		width: "100%",
		paddingTop: ".5rem",
	},

	nameTitle: {
		paddingLeft: "1rem",
		alignSelf: "flex-end",
	},
});

const socialMediaIcons = createMuiTheme({
	palette: {
		primary: {
			main: "#0088cc",
		},
		secondary: {
			main: "#25D366",
			contrastText: "#fff",
		},

		contrastThreshold: 3,
		tonalOffset: 0.2,
	},

	typography: {
		button: {
			textTransform: "none",
		},

		fontFamily: [
			'"Poppins"',
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});

function OnelinkCard() {
	const classes = useStyles();

	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			style={{ backgroundColor: "#f7f7f7", height: "100%", paddingTop: "1rem" }}
		>
			<Box className={classes.root} boxShadow={3} padding={1} margin={2}>
				<div className={classes.firstCard}>
					<Avatar
						alt="Remy Sharp"
						src={avatarImage}
						className={classes.large}
					/>
					<div className={classes.nameTitle}>
						<Typography
							variant="h5"
							style={{ fontWeight: "500", marginBottom: ".3rem" }}
						>
							John Smith
						</Typography>
						<Typography
							variant="h6"
							style={{ marginBottom: ".5rem", fontWeight: "300" }}
						>
							Web Developer
						</Typography>
					</div>
				</div>

				<Typography
					variant="body1"
					style={{ marginBottom: ".7rem", padding: "0 .5rem" }}
				>
					I am a Fullstack Developer. I create intuitive and smooth web
					experiences with clean code. Self-driven and always learning new
					technologies.
				</Typography>
			</Box>
			<Box className={classes.root} boxShadow={3} padding={1} margin={2}>
				<Typography
					variant="h6"
					style={{
						fontWeight: "700",
						flexGrow: "1",
						marginRight: "auto",
						marginLeft: ".5rem",
						marginBottom: ".2rem",
					}}
				>
					Contact
				</Typography>
				<Grid
					item
					container
					direction="row"
					justify="center"
					alignItems="center"
					xs={12}
					style={{ marginBottom: ".9rem" }}
				>
					<ThemeProvider theme={socialMediaIcons}>
						<Button
							variant="contained"
							color="secondary"
							className={classes.button}
							startIcon={<WhatsAppIcon />}
							style={{ margin: ".3rem", textDecoration: "none" }}
							component={Link}
							href="https://wa.me/989131186434"
						>
							WhatsApp
						</Button>
						<Button
							variant="contained"
							color="primary"
							className={classes.button}
							startIcon={<TelegramIcon />}
							style={{ margin: ".3rem", textDecoration: "none" }}
							component={Link}
							href="https://t.me/M_Ali73"
						>
							Telegram
						</Button>
					</ThemeProvider>
				</Grid>
				<Grid
					item
					container
					direction="row"
					justify="flex-start"
					alignItems="center"
					xs={12}
					style={{ margin: ".2rem auto .9rem .5rem" }}
				>
					<Link
						href="tel:6476751234"
						color="textPrimary"
						style={{ display: "flex" }}
					>
						<PhoneIcon style={{ marginRight: ".5rem" }}></PhoneIcon>
						<Typography variant="body1">6476751234</Typography>
					</Link>
				</Grid>
				<Grid
					item
					container
					direction="row"
					justify="flex-start"
					alignItems="center"
					xs={12}
					style={{ margin: "0 auto .8rem .5rem" }}
				>
					<Link
						href="mailto:moussavi73@gmail.com"
						color="textPrimary"
						style={{ display: "flex" }}
					>
						<MailIcon style={{ marginRight: ".5rem" }}></MailIcon>
						<Typography variant="body1">j.smith@gmail.com</Typography>
					</Link>
				</Grid>
			</Box>
			<Box className={classes.root} boxShadow={3} padding={1} margin={2}>
				<Typography
					variant="h6"
					style={{
						fontWeight: "700",
						flexGrow: "1",
						marginRight: "auto",
						marginLeft: ".5rem",
						marginBottom: ".2rem",
					}}
				>
					Socia Media
				</Typography>
				<Grid
					item
					container
					direction="row"
					justify="center"
					alignItems="center"
					xs={12}
					style={{ marginBottom: ".5rem" }}
				>
					<CustomButton color="#E1306C">
						{" "}
						<InstagramIcon fontSize="large" />
					</CustomButton>
					<CustomButton color="#00acee">
						<TwitterIcon fontSize="large" />
					</CustomButton>
					<CustomButton color="#FF0000">
						<YouTubeIcon fontSize="large" />
					</CustomButton>
					<CustomButton color="#0e76a8">
						<LinkedInIcon fontSize="large" />
					</CustomButton>
				</Grid>
			</Box>
			<Box
				className={classes.root}
				boxShadow={3}
				padding={1}
				margin={2}
				style={{ marginBottom: "2rem" }}
			>
				<Typography
					variant="h6"
					style={{
						fontWeight: "700",
						flexGrow: "1",
						marginRight: "auto",
						marginLeft: ".5rem",
						marginBottom: ".5rem",
					}}
				>
					Links
				</Typography>

				<Grid
					item
					container
					direction="row"
					justify="flex-start"
					alignItems="center"
					xs={12}
					style={{ margin: "0 auto .6rem .5rem" }}
				>
					<Button
						variant="text"
						color="default"
						href="https://www.alimoussavi.dev/"
						startIcon={<LinkIcon />}
					>
						My Website
					</Button>
				</Grid>
				<Grid
					item
					container
					direction="row"
					justify="flex-start"
					alignItems="center"
					xs={12}
					style={{ margin: "0 auto .6rem .5rem" }}
				>
					<Button
						variant="text"
						color="default"
						href="https://www.alimoussavi.dev/"
						startIcon={<LinkIcon />}
					>
						My Telegram Channel
					</Button>
				</Grid>
			</Box>
		</Grid>
	);
}

export default OnelinkCard;
