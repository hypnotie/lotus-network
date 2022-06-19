import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { compose } from "redux";
import { getCurrentUserProfile } from "../../redux/profile-reducer";

class HeaderContainer extends React.Component {
	componentWillMount() {
		let userId = this.props.authorizedUserId;
		this.props.getCurrentUserProfile(userId);
	};

	render() {
		if (this.props.currentUserProfile !== null) {
			return <Header {...this.props} />;
		}
		else {
			return "";
		}
	}
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	currentUserProfile: state.profilePage.currentUserProfile,
	authorizedUserId: state.auth.id,
});

export default compose(
	connect(mapStateToProps, { getCurrentUserProfile })
)(HeaderContainer);