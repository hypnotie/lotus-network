const SEND_MESSAGE = "lotus-network/dialogues/SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "lotus-network/dialogues/UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
	dialogues: [
		{
			id: 0,
			name: "Saved Messages",
			messages: {
				receivedMessages: [],
				sentMessages: [
					{
						id: 0, message: `TO DO:
					
														 1. Добавить проект «Lotus Social Network» в резюме.
														 2. Подготовиться к собеседованию.` }
				]
			},
		},
		{
			id: 1, name: "Roman Shcherbyna",
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
					{ id: 0, message: "да, всё гуд! привет" }
				]
			},
		},
		{
			id: 2, name: "Artem Shcherbyna",
			messages: {
				receivedMessages: [
					{ id: 0, message: "Ты вчера спрашивал у меня источники с образовательным IT-контентом. Я не использовал каких-то конкретных ресурсов, я тупо гуглил типа «как сделать ... на с++» и искал по разным ссылкам" },
					{
						id: 1, message: "Но как вспомогательные форумы, где много ответов на вопросы, это StackOverflow и Habr"
					}
				],
				sentMessages: [
					{ id: 0, message: "спасибо большое, тём!" }
				]
			},
		},
		{
			id: 3, name: "Alina Matnurova",
			messages: {
				receivedMessages: [
					{ id: 0, message: "Короче, я хотела сказать что я поняла, мне это важно!" },
					{ id: 1, message: "Спасибо, что сказал ❤️" }
				],
				sentMessages: [
					{ id: 0, message: "❤️" }
				]
			},
		},
		{
			id: 4, name: "Ira Ulchich",
			messages: {
				receivedMessages: [
					{ id: 0, message: "типа перед собеседованием нужно пройти личностный тест" },
					{ id: 1, message: "и потом еще один" },
					{ id: 2, message: "где поотвечать на вопросы" },
					{
						id: 3, message: `Перед Вами 6 чистых листов бумаги.
					 	  							Нарисуйте, пожалуйста от руки, 6 рисунков тематики, перечисленной ниже. При этом, выполните каждый рисунок на отдельном листе.
					  								Соблюдайте указанную в списке последовательность изображения рисунков.` }
				],
				sentMessages: [
					{ id: 0, message: "а что за вакансия?" }
				]
			},
		},
		{
			id: 5, name: "Magomed Soltanaliev",
			messages: {
				receivedMessages: [
					{ id: 0, message: "в оригинале белый классно контрастирует, больше нравится" }
				],
				sentMessages: [
					{ id: 0, message: "ну да, есть такое" }
				]
			},
		}
	],
	newMessageText: ""
};

const dialoguesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = {
				id: state.dialogues[action.chatId].messages.sentMessages.length,
				message: state.newMessageText
			};
			let newState = {
				...state,
				dialogues: state.dialogues.map(d => {
					if (d.id === parseInt(action.chatId)) {
						d.messages.sentMessages.push(newMessage);
					}
					return d;
				}),
				newMessageText: ""
			};
			return newState;
		case UPDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.newText
			};
		default:
			return state;
	}
};

export const sendMessageCreator = (chatId) => ({
	type: SEND_MESSAGE,
	chatId
});

export const updateNewMessageTextCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	newText: text
});

export default dialoguesReducer;