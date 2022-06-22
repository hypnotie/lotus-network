import React from "react";
import MyPosts from "./MyPosts";
import { getProfile, addPostCreator, updateNewPostTextCreator } from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import { compose } from "redux";

class MyPostsContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.authorizedUserId;
		if (userId !== null) {
			this.props.getProfile(userId);
		}
	};

	componentDidUpdate(prevProps) {
		if (prevProps.authorizedUserId !== this.props.authorizedUserId) {
			let userId = this.props.authorizedUserId;
			this.props.getProfile(userId);
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
		profile: state.profilePage.profile,
		authorizedUserId: state.auth.id
	}
};


export default compose(
	connect(mapStateToProps, { getProfile, updateNewPostTextCreator, addPostCreator })
)(MyPostsContainer);