import { profileAPI } from "../api/api";

const ADD_POST = "lotus-network/profile/ADD_POST";
const DELETE_POST = "lotus-network/profile/DELETE_POST";
const UPDATE_NEW_POST_TEXT = "lotus-network/profile/UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "lotus-network/profile/SET_USER_PROFILE";
const SET_CURRENT_USER_PROFILE = "lotus-network/profile/SET_CURRENT_USER_PROFILE";
const SET_STATUS = "lotus-network/profile/SET_STATUS";
const SAVE_PHOTO_SUCCESS = "lotus-network/profile/SAVE_PHOTO_SUCCESS";


let initialState = {
	posts: [
		{ id: 3, text: "Something runs deeper in the currents of the different situations in these spreads. Dreaming of a different you. Finding the assembly of parts to realize the visually united disorder of color imagery mixed with black-and-white is a reader’s métier." },
		{ id: 2, text: "There is a boundless limit to what happens on this our planet of Earth. Feel the electricity of terra." },
		{ id: 1, text: "A camera is focused. It is a mysterious creature folded in the illusion of literality. But like the forming of memories embellishments are most succulent." },
		{ id: 0, text: "Everything gets caught in the light. There’s no escaping. In the traces of the flesh of the land everything swells in the glow of our orbiting star. A garden is a place of focus and growth. Undulating in the soil of the earth things transform and birth. Things get made by the hands of undefined forms. The roots of wonder wander the expectations of life’s intuition. The kinds of things that can be made are up to imaginations and esteemed focus. The world spins forward full of its happenstance and coincidence." }
	],
	newPostText: "",
	profile: null,
	currentUserProfile: null,
	status: ""
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: state.posts.length,
				likes: 0,
				text: action.newPostText
			};
			return {
				...state,
				posts: [newPost, ...state.posts],
				newPostText: ""
			}
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(p => p.id !== action.id)
			}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		case SET_CURRENT_USER_PROFILE:
			return {
				...state,
				currentUserProfile: action.currentUserProfile
			}
		case SET_STATUS:
			return {
				...state,
				status: action.status
			}
		case SAVE_PHOTO_SUCCESS:
			return {
				...state,
				profile: { ...state.profile, photos: action.photos }
			}
		default:
			return state;
	}
};

export const addPostCreator = (text) => ({ type: ADD_POST, newPostText: text });
export const deletePost = (id) => ({ type: DELETE_POST, id });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setCurrentUserProfile = (currentUserProfile) => ({ type: SET_CURRENT_USER_PROFILE, currentUserProfile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getProfile = (userId) => async (dispatch) => {
	let response = await profileAPI.getProfile(userId);
	dispatch(setUserProfile(response.data));
};

export const getCurrentUserProfile = (userId) => async (dispatch) => {
	let response = await profileAPI.getProfile(userId);
	dispatch(setCurrentUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};

export const savePhoto = (file) => async (dispatch) => {
	let response = await profileAPI.savePhoto(file);
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
};

export const saveProfile = (profile, setFieldValue) => async (dispatch, getState) => {
	const id = getState().auth.id;
	let response = await profileAPI.saveProfile(profile);
	const isOk = response.data.resultCode === 0;
	if (isOk) {
		dispatch(getProfile(id));
	} else {
		setFieldValue("general", response.data.messages);
	}
	return isOk;
};

export default profileReducer;