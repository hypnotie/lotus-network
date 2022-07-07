import s from "./MyPosts.module.css";
import attention from "../../../img/icons/common/attention-light.svg"

const MyPosts = (props) => {
	let onClickAddPost = () => {
		if (props.newPostText) props.addPostCreator(props.newPostText);
	};

	let onKeyAddPost = (e) => {
		if (e.ctrlKey && e.key === "Enter") {
			if (props.newPostText) props.addPostCreator(props.newPostText);
		}
	};

	let onPostChange = (e) => {
		let text = e.target.value;
		props.updateNewPostTextCreator(text);
	};

	return (
		<div className={s.myPosts}>
			<h3 className={s.header}>
				My Posts
			</h3>
			<div className={s.addPostHint}>
				<textarea onChange={onPostChange} onKeyDown={onKeyAddPost} placeholder={"What’s on your mind?"} value={props.newPostText}
					cols="80" rows="3" />
				<div className={s.hint}>
					<div className={s.add_post}>
						<button onClick={onClickAddPost}>Add Post</button>
						<span>Ctrl + Enter</span>
					</div>
				</div>
			</div>
			<div className={s.attentionHint}>
				<div className={s.hint}>
					<img src={attention} alt="Attention" />
					<span>This section contains demo data, the functionality of which has not yet been implemented.</span>
				</div>
			</div>
			{props.postsElements}
		</div>
	);
}

export default MyPosts;