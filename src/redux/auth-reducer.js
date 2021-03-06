import { authAPI } from "../api/api";

const SET_USER_DATA = "lotus-network/auth/SET_USER_DATA";
const SET_PROFILE_THUMBNAIL = "lotus-network/auth/SET_PROFILE_THUMBNAIL";
const SET_CAPTCHA = "lotus-network/auth/SET_CAPTCHA";

let initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
	profile: null,
	url: null
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
		case SET_CAPTCHA:
			return {
				...state,
				url: action.url
			}
		default:
			return state;
	}
};

export const setProfileThumbnail = (profile) => ({ type: SET_PROFILE_THUMBNAIL, profile });
export const setAuthUserData = (id, login, email, isAuth, url) => ({
	type: SET_USER_DATA,
	payload: { id, login, email, isAuth, url }
});
export const setCaptcha = (url) => ({ type: SET_CAPTCHA, url });

export const getAuthUserData = () => async (dispatch) => {
	let response = await authAPI.getAuth();
	if (response.data.resultCode === 0) {
		let { id, login, email } = response.data.data;
		dispatch(setAuthUserData(id, login, email, true, null));
		dispatch(setProfileThumbnail(response.data.data.id));
	}
};

export const getCaptchaUrl = () => async (dispatch) => {
	let response = await authAPI.getCaptcha();
	dispatch(setCaptcha(response.data.url));
};

export const login = (email, password, captcha, setFieldValue) => async (dispatch) => {
	let response = await authAPI.login(email, password, captcha);
	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData());
	} else {
		if (response.data.resultCode === 10) {
			dispatch(getCaptchaUrl());
		}
		setFieldValue("general", response.data.messages);
	}
};

export const logout = () => async (dispatch) => {
	let response = await authAPI.logout();
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
};

export default authReducer;