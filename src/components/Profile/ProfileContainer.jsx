import React from "react";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import withRouter from "../../hoc/withRouter";
import { Navigate } from "react-router-dom";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : this.props.authorizedUserId;
		this.props.getProfile(userId);
		this.props.getStatus(userId);
	}
	render() {
		return <>
			{!this.props.match && !this.props.authorizedUserId && <Navigate to="/login" />}
			<Profile
				{...this.props}
				profile={this.props.profile}
				status={this.props.status}
				isAuth={this.props.isAuth}
				updateStatus={this.props.updateStatus}
				authorizedUserId={this.props.authorizedUserId}
			/>
		</>
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	isAuth: state.auth.isAuth,
	authorizedUserId: state.auth.id
});


export default compose(
	connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
	withRouter,
)(ProfileContainer);