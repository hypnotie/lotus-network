import Chat from "./Chat";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../../redux/dialogues-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		dialoguesPage: state.dialoguesPage
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageText: (text) => dispatch(updateNewMessageTextCreator(text)),
		sendMessage: () => dispatch(sendMessageCreator())
	}
};

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;