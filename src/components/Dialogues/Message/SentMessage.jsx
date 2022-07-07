import s from "./SentMessage.module.css";
import attention from "../../../img/icons/common/attention.svg"

const SentMessage = (props) => {
	return (
		<div className={s.wrapper}>
			<div className={props.id > 0 ? [s.messageContainer, s.newMessage].join(" ") : s.messageContainer}>
				<div className={s.message} ref={props.messagesEndRef}>
					{props.sentMessage}
				</div>
				{props.id > 0 &&
					<div className={s.hint}>
						<img src={attention} alt="Attention" />
						<span>This message will be deleted after the page is refreshed,
							because the functionality of chat is not yet implemented in the API.</span>
					</div>
				}
			</div>
		</div>
	);
}

export default SentMessage;