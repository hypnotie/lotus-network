import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_PROFILE_THUMBNAIL = "SET_PROFILE_THUMBNAIL";

let initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
	profile: ""
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload
			};
		case SET_PROFILE_THUMBNAIL:
			return {
				...state,
				profile: action.profile,
			};
		default:
			return state;
	}
};

export const setProfileThumbnail = (profile) => ({ type: SET_PROFILE_THUMBNAIL, profile });
export const setAuthUserData = (id, login, email, isAuth) => ({
	type: SET_USER_DATA,
	payload: { id, login, email, isAuth }
});

export const getAuthUserData = () => (dispatch) => {
	return authAPI.getAuth()
		.then(response => {
			if (response.data.resultCode === 0) {
				let { id, login, email } = response.data.data;
				dispatch(setAuthUserData(id, login, email, true));
				dispatch(setProfileThumbnail(response.data.data.id));
			}
		});
};

export const login = (email, password, rememberMe, setFieldValue) => {
	return (dispatch) => {
		authAPI.login(email, password, rememberMe)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(getAuthUserData());
				} else {
					setFieldValue("general", response.data.messages.join(" "))
				}
			});
	}
};

export const logout = () => {
	return (dispatch) => {
		authAPI.logout()
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(setAuthUserData(null, null, null, false));
				}
			});
	}
};

export default authReducer;