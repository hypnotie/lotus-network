import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialoguesPage: dialoguesReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;