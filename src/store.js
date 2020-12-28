import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cardInfoReducer } from "./reducers/cardReducers";

const reducer = combineReducers({
	cardInfo: cardInfoReducer,
});

const initialState = {};

const middleWare = [thunk];
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
