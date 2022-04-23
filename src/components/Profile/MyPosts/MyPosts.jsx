import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
	let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} text={p.text} likes={p.likes} />)

	let onClickAddPost = () => {
		if (props.newPostText) props.addPost();
	};

	let onKeyAddPost = (e) => {
		if (e.ctrlKey && e.key === "Enter") {
			if (props.newPostText) props.addPost();
		}
	};

	let onPostChange = (e) => {
		let text = e.target.value;
		props.updateNewPostText(text);
	};

	return (
		<div>
			<h3 className={s.header}>
				My Posts
			</h3>
			<div>
				<textarea onChange={onPostChange} onKeyDown={onKeyAddPost} placeholder={"What's on your mind?"} value={props.newPostText}
					cols="80" rows="3" />
				<div className={s.add_post}>
					<button onClick={onClickAddPost}>Add Post</button>
				</div>
			</div>
			{postsElements}
		</div>
	);
}

export default MyPosts;