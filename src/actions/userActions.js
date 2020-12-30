import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: "USER_LOGIN_REGISTER_REQUEST" });
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const response = await axios.post(
			`/api/users/login`,
			{ email, password },
			config
		);
		dispatch({
			type: "USER_LOGIN_REGISTER_SUCCESS",
			payload: response.data,
		});

		localStorage.setItem("userInfo", JSON.stringify(response.data));
	} catch (error) {
		dispatch({
			type: "USER_LOGIN_FAIL",
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.response,
		});
	}
};

export const logoutUser = () => (dispatch) => {
	localStorage.removeItem("userInfo");
	dispatch({
		type: "USER_LOGOUT",
	});
};

export const registerUser = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: "USER_LOGIN_REGISTER_REQUEST" });
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const response = await axios.post(
			`/api/users/register`,
			{ email, password },
			config
		);
		dispatch({
			type: "USER_LOGIN_REGISTER_SUCCESS",
			payload: response.data,
		});

		localStorage.setItem("userInfo", JSON.stringify(response.data));
	} catch (error) {
		dispatch({
			type: "USER_REGISTER_FAIL",
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.response,
		});
	}
};
