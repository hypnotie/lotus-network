import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "140d028e-900b-45d6-98cd-b35fe1f3597d" // hypno7ie@gmail.com, UID 23279
	}
});

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`);
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`);
	},
	updateStatus(status) { return instance.put(`profile/status`, { status }); },
	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append("image", photoFile);
		return instance.put(`profile/photo`, formData);
	},
	saveProfile(profile) {
		return instance.put(`profile`, profile);
	}
};

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 50) { return instance.get(`users?page=${currentPage}&count=${pageSize}`); },
	checkFollow(userId) { return instance.get(`follow/${userId}`); },
	followUser(userId) { return instance.post(`follow/${userId}`); },
	unfollowUser(userId) { return instance.delete(`follow/${userId}`); }
};

export const authAPI = {
	getAuth() { return instance.get(`auth/me`); },
	login(email, password, captcha) {
		return instance.post(`auth/login`, { email, password, captcha });
	},
	logout() { return instance.delete(`auth/login`); },
	getCaptcha() { return instance.get(`security/get-captcha-url`) }
};