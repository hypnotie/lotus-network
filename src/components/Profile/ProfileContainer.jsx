import React from "react";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import withRouter from "../../hoc/withRouter";
// import { Navigate } from "react-router-dom";
import { logout } from "../../redux/auth-reducer";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : this.props.authorizedUserId;
		this.props.getProfile(userId);
		this.props.getStatus(userId);
		this.props.authorizedUserId !== 23279 && this.props.logout();
	}

	render() {
		return <>
			{/* {this.props.isAuth && this.props.authorizedUserId !== 23279 && <Navigate to="/login" />} */}
			<Profile
				{...this.props}
				profile={this.props.profile}
				status={this.props.status}
				isAuth={this.props.isAuth}
				updateStatus={this.props.updateStatus}
				authorizedUserId={this.props.authorizedUserId}
				savePhoto={this.props.savePhoto}
				saveProfile={this.props.saveProfile}
			/>
		</>
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	posts: state.profilePage.posts,
	status: state.profilePage.status,
	isAuth: state.auth.isAuth,
	authorizedUserId: state.auth.id
});


export default compose(
	connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto, saveProfile, logout }),
	withRouter,
)(ProfileContainer);