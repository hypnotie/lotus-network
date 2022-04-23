const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
	dialogues: [
		{ id: 0, name: "Saved Messages" },
		{ id: 1, name: "Roman Shcherbyna" },
		{ id: 2, name: "Artem Shcherbyna" },
		{ id: 3, name: "Alina Matnurova" },
		{ id: 4, name: "Ira Ulchich" },
		{ id: 5, name: "Magomed Soltanaliev" }
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
};

const dialoguesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = {
				id: state.messages.sentMessages.length,
				message: state.newMessageText
			};
			return {
				...state,
				messages: {
					...state.messages,
					sentMessages: [...state.messages.sentMessages, newMessage]
				},
				newMessageText: ""
			};
		case UPDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.newText
			};
		default:
			return state;
	}
};

export const sendMessageCreator = () => ({
	type: SEND_MESSAGE
});

export const updateNewMessageTextCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	newText: text
});

export default dialoguesReducer;