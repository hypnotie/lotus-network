import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { compose } from "redux";
import { getCurrentUserProfile } from "../../redux/profile-reducer";

class HeaderContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.authorizedUserId;
		this.props.getCurrentUserProfile(userId);
	};

	componentDidUpdate(prevProps) {
		if (prevProps.authorizedUserId !== this.props.authorizedUserId) {
			let userId = this.props.authorizedUserId;
			this.props.getCurrentUserProfile(userId);
		}
	}

	render() {
		return <Header {...this.props} />;
	}
};

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		currentUserProfile: state.profilePage.currentUserProfile,
		authorizedUserId: state.auth.id
	}
};

export default compose(
	connect(mapStateToProps, { getCurrentUserProfile })
)(HeaderContainer);