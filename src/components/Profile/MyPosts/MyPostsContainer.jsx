import React from "react";
import MyPosts from "./MyPosts";
import { getCurrentUserProfile, addPostCreator, updateNewPostTextCreator } from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import { compose } from "redux";

class MyPostsContainer extends React.Component {
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
		return <MyPosts {...this.props} />;
	}
};
const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
		currentUserProfile: state.profilePage.currentUserProfile,
		authorizedUserId: state.auth.id
	}
};


export default compose(
	connect(mapStateToProps, { getCurrentUserProfile, updateNewPostTextCreator, addPostCreator })
)(MyPostsContainer);