import Dialogues from "./Dialogues";
import { connect } from "react-redux";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";
import React  from "react";

class DialoguesContainer extends React.Component {
	render() {
		return (
			<Dialogues
				{...this.props}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		dialoguesPage: state.dialoguesPage,
	}
};

export default compose(
	connect(mapStateToProps),
	withAuthRedirect
)(DialoguesContainer);