import { useNavigate } from 'react-router-dom';
import s from "./Chat.module.css";
import ReceivedMessage from "../Message/ReceivedMessage";
import SentMessage from "../Message/SentMessage";
import Dialogue from "./Dialogue";
import attention from "../../../img/icons/common/attention-light.svg"
import Error404 from "./../../Error404/Error404";
import { isInteger } from 'formik';
import { useRef } from 'react';
import { useEffect } from "react";

const Chat = (props) => {
	const navigate = useNavigate();
	let onKeyPress = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			if (state.newMessageText) props.sendMessageCreator(chatId);
		}
		if (e.key === "Escape") {
			e.preventDefault();
			navigate("/messages");
		}
	};
	const messagesEndRef = useRef(null)

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}

	let state = props.dialoguesPage;

	useEffect(() => {
		scrollToBottom()
	}, [state.dialogues]);

	let chatId = props.match && props.match.params.chatId;
	if (chatId >= state.dialogues.length || chatId < 0 || !isInteger(chatId)) {
		return <Error404 />;
	}

	let dialoguesElements = state.dialogues.map(d => <Dialogue key={d.id} id={d.id} name={d.name} />);

	let receivedMessagesElements = state.dialogues[chatId].messages.receivedMessages.map(r => <ReceivedMessage key={r.id} id={r.id}
		receivedMessage={r.message} />);

	let sentMessagesElements = state.dialogues[chatId].messages.sentMessages.map(s => <SentMessage
		key={s.id} id={s.id}
		sentMessage={s.message}
		messagesEndRef={messagesEndRef}
	/>);

	let onMessageChange = (e) => {
		let text = e.target.value;
		props.updateNewMessageTextCreator(text);
	};

	let onSendMessageClick = (e) => {
		if (!e.key && state.newMessageText) props.sendMessageCreator(chatId);
	};

	return (
		<div className={s.content_block}>
			<div className={s.allChats}>
				<div className={s.chatsColumns}>
					<div className={s.dialogues}>
						<div className={s.users}>
							{dialoguesElements}
						</div>
						<div className={s.hint}>
							<img src={attention} alt="Attention" />
							<span>This section contains demo data, the functionality of which has not yet been implemented.</span>
						</div>
					</div>
					<div className={s.messages}>
						<div className={s.messagesBlock}>
							<div className={s.receivedMessages}>
								{receivedMessagesElements}
							</div>
							<div className={s.sentMessages}>
								{sentMessagesElements}
							</div>
						</div>
						<div className={s.typeMessage}>
							<textarea autoFocus={true} onChange={onMessageChange} onKeyDown={onKeyPress}
								value={state.newMessageText} placeholder={"Write a message..."} />
							<button onClick={onSendMessageClick}>↩</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Chat;