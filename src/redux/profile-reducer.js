import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";


let initialState = {
	posts: [
		{ id: 4, likes: 127, text: "Everything gets caught in the light. There’s no escaping. In the traces of the flesh of the land everything swells in the glow of our orbiting star. A garden is a place of focus and growth. Undulating in the soil of the earth things transform and birth. Things get made by the hands of undefined forms. The roots of wonder wander the expectations of life’s intuition. The kinds of things that can be made are up to imaginations and esteemed focus. The world spins forward full of its happenstance and coincidence." },
		{ id: 3, likes: 21, text: "I was different then, I don’t need them to be cool." },
		{ id: 2, likes: 15, text: "It’s just a cigarette like you always used to do." },
		{ id: 1, likes: 15, text: "Honey, don’t you love me and you know it makes me sad?" },
		{ id: 0, likes: 19, text: "It’s just a cigarette and it cannot be that bad." }
	],
	newPostText: "",
	profile: null,
	status: ""
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: state.posts.length,
				likes: 0,
				text: state.newPostText
			};
			return {
				...state,
				posts: [newPost, ...state.posts],
				newPostText: ""
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
		case SET_STATUS:
			return {
				...state,
				status: action.status
			}
		default:
			return state;
	}
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getProfile = (userId) => {
	return (dispatch) => {
		profileAPI.getProfile(userId)
			.then(response => {
				dispatch(setUserProfile(response.data));
			});
	}
};

export const getStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId)
			.then(response => {
				dispatch(setStatus(response.data));
			});
	}
};

export const updateStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(setStatus(status));
				}
			});
	}
};

export default profileReducer;