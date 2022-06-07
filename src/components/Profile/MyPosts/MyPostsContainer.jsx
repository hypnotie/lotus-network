import MyPosts from "./MyPosts";
import { addPostCreator, updateNewPostTextCreator } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => dispatch(updateNewPostTextCreator(text)),
		addPost: (text) => dispatch(addPostCreator(text))
	}
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;