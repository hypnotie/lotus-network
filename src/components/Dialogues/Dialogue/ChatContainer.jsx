import Chat from "./Chat";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../../redux/dialogues-reducer";
import { connect } from "react-redux";
import React from "react";
import { withAuthRedirect } from "./../../../hoc/withAuthRedirect";
import { compose } from "redux";

class ChatContainer extends React.Component {
	render() {
		return <Chat {...this.props} />;
	}
};

const mapStateToProps = (state) => {
	return {
		dialoguesPage: state.dialoguesPage
	}
};

export default compose(
	connect(mapStateToProps, { updateNewMessageTextCreator, sendMessageCreator }),
	withAuthRedirect
)(ChatContainer);