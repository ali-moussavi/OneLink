import "./App.css";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";
import DeleteCard from "../pages/DeleteCard";
import EditCard from "../pages/EditCard";
import LandingPage from "../pages/LandingPage";
import NewCard from "../pages/NewCard";
import OnelinkCard from "../pages/OnelinkCard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

let theme = createMuiTheme({
	typography: {
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
		button: {
			textTransform: "none",
		},
	},
});

theme = responsiveFontSizes(theme);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<BrowserRouter>
					<div>
						<Switch>
							<Route path="/:cardUrlId" exact component={OnelinkCard} />
							<>
								<Header className="App__Header"></Header>
								<Route path="/" exact component={LandingPage} />
								<Route path="/signin" exact component={SignIn} />
								<Route path="/signup" exact component={SignUp} />
								<Route path="/dashboard" exact component={Dashboard} />
								<Route path="/cards/new" exact component={NewCard} />
								<Route
									path="/cards/edit/:cardid"
									exact
									component={EditCard}
								/>
								<Route
									path="/delete/:cardid"
									exact
									component={DeleteCard}
								/>
							</>
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		</ThemeProvider>
	);
}

export default App;
