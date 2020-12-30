export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case "USER_LOGIN_REGISTER_REQUEST":
			return { loading: true };

		case "USER_LOGIN_REGISTER_SUCCESS":
			return { loading: false, userInfo: action.payload };

		case "USER_LOGIN_FAIL":
			return { loading: false, loginError: action.payload, userInfo: {} };

		case "USER_REGISTER_FAIL":
			return { loading: false, registerError: action.payload, userInfo: {} };
		case "USER_LOGOUT":
			return {};
		default:
			return state;
	}
};
