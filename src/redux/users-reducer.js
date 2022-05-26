import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = "lotus-network/users/FOLLOW";
const UNFOLLOW = "lotus-network/users/UNFOLLOW";
const SET_USERS = "lotus-network/users/SET_USERS";
const SET_CURRENT_PAGE = "lotus-network/users/SET_CURRENT_PAGE";
const SET_TOTAL_ITEMS_COUNT = "lotus-network/users/SET_TOTAL_ITEMS_COUNT";
const TOGGLE_IS_FETCHING = "lotus-network/users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "lotus-network/users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
	users: [],
	pageSize: 50,
	totalItemsCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
			};
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
			};
		case SET_USERS:
			return {
				...state,
				users: action.users
			}
		case SET_CURRENT_PAGE:
			return {
				...state, currentPage: action.currentPage
			}
		case SET_TOTAL_ITEMS_COUNT:
			return {
				...state, totalItemsCount: action.count
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state, isFetching: action.isFetching
			}
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			}
		default:
			return state;
	}
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalItemsCount = (count) => ({ type: SET_TOTAL_ITEMS_COUNT, count });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
});

export const requestUsers = (page, pageSize) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	dispatch(setCurrentPage(page));
	let response = await usersAPI.getUsers(page, pageSize);
	dispatch(toggleIsFetching(false));
	dispatch(setUsers(response.data.items));
	dispatch(setTotalItemsCount(response.data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true, userId));
	let response = await apiMethod(userId);
	if (response.data.resultCode === 0) {
		dispatch(actionCreator(userId));
	}
	dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
	followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccess);
};

export const unfollow = (userId) => async (dispatch) => {
	followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess);
};

export default usersReducer;