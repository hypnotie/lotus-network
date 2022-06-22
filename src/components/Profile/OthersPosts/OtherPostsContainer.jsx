import React from "react";
import OthersPosts from "./OthersPosts";
import { connect } from "react-redux";
import { compose } from "redux";

class OthersPostsContainer extends React.Component {
	render() {
		return <OthersPosts {...this.props} />;
	}
};

const mapStateToProps = (state) => {
	return {
		userId: state.profilePage.profile.userId
	}
};

export default compose(
	connect(mapStateToProps, { })
)(OthersPostsContainer);