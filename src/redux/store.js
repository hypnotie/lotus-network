import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 0, likes: 19, text: "It's just a cigarette and it cannot be that bad." },
				{ id: 1, likes: 15, text: "Honey, don't you love me and you know it makes me sad?" },
				{ id: 2, likes: 15, text: "It's just a cigarette like you always used to do." },
				{ id: 3, likes: 21, text: "I was different then, I don't need them to be cool." }
			],
			newPostText: ""
		},
		dialoguesPage: {
			dialogues: [
				{ id: 0, name: "Saved Messages" },
				{ id: 1, name: "Roman Shcherbyna" },
				{ id: 2, name: "Artem Shcherbyna" },
				{ id: 3, name: "Alina Matnurova" },
				{ id: 4, name: "Ira Ulchich" }
			],
			messages: {
				receivedMessages: [
					{ id: 0, message: "Привет" },
					{ id: 1, message: "Как ты там, нормально?" },
					{
						id: 2,
						message: "Я буквально вчера удалил некоторых друзей в Стиме, которые в сети не появлялись 1-2 года. Мне даже как-то грустно немного было"
					}
				],
				sentMessages: [
					{ id: 0, message: "да, всё гуд!" },
					{ id: 1, message: "привет" }
				]
			},
			newMessageText: ""
		}
	},
	_callSubscriber() {
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action);
		this._callSubscriber(this._state);
	}
};

export default store;