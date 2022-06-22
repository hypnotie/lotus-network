import { useNavigate } from 'react-router-dom';
import s from "./Chat.module.css";
import ReceivedMessage from "../Message/ReceivedMessage";
import SentMessage from "../Message/SentMessage";
import Dialogue from "./Dialogue";
import attention from "../../../img/icons/common/attention-light.svg"

const Chat = (props) => {
	let state = props.dialoguesPage;

	let dialoguesElements = state.dialogues.map(d => <Dialogue key={d.id} id={d.id} name={d.name} />);

	let receivedMessagesElements = state.messages.receivedMessages.map(r => <ReceivedMessage key={r.id} id={r.id}
		receivedMessage={r.message} />);

	let sentMessagesElements = state.messages.sentMessages.map(s => <SentMessage key={s.id} id={s.id}
		sentMessage={s.message} />);

	let onMessageChange = (e) => {
		let text = e.target.value;
		props.updateNewMessageTextCreator(text);
	};

	const navigate = useNavigate();
	let onKeyPress = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			if (state.newMessageText) props.sendMessageCreator();
		}
		if (e.key === "Escape") {
			e.preventDefault();
			navigate("/messages");
		}
	};

	let onSendMessageClick = (e) => {
		if (!e.key && state.newMessageText) props.sendMessageCreator();
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