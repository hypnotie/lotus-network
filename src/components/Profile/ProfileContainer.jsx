import React from "react";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profile-reducer";
import { checkFollow, follow, unfollow } from "../../redux/users-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import withRouter from "../../hoc/withRouter";
import Error404 from "./../Error404/Error404";

class ProfileContainer extends React.Component {
	// Creating state in case of URL like: "users/randomtext"
	constructor() {
		super();
		this.state = {
			isProfile: true
		}
	}

	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : this.props.authorizedUserId;
		if (userId) {
			this.props.getProfile(userId).then(result => { this.setState({ isProfile: result }); });
			this.props.getStatus(userId);
			this.props.checkFollow(userId);
		}
	}

	componentDidUpdate() {
		document.title = this.props.profile?.fullName;
	}

	render() {
		return <>
			{this.state.isProfile
				? <Profile
					{...this.props}
					profile={this.props.profile}
					status={this.props.status}
					isAuth={this.props.isAuth}
					updateStatus={this.props.updateStatus}
					authorizedUserId={this.props.authorizedUserId}
					savePhoto={this.props.savePhoto}
					saveProfile={this.props.saveProfile}
					followingInProgress={this.props.followingInProgress}
					isFollowed={this.props.isFollowed}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
				/>
				: <Error404 />
			}
		</>
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	posts: state.profilePage.posts,
	status: state.profilePage.status,
	isAuth: state.auth.isAuth,
	authorizedUserId: state.auth.id,
	followingInProgress: state.usersPage.followingInProgress,
	isFollowed: state.usersPage.isFollowed
});


export default compose(
	connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto, saveProfile, checkFollow, follow, unfollow }),
	withRouter,
)(ProfileContainer);