import s from "./Post.module.css";
import heart from "../../../../img/icons/profile/heart.svg";

const Post = (props) => {
	return (
		<div className={s.profile_post}>
			<img className={s.profile_picture}
				src="https://i.ibb.co/KKfVVJd/image.png"
				alt="Profile"
			/>
			<div className={s.post_content}>
				<h4 className={s.author_name}>
					Maksym Hanhalo
				</h4>
				<div className={s.text}>
					{props.text}
				</div>
			</div>
			<div className={s.likes_count}>
				{props.likes}
			</div>
			<div className={s.like_icon}>
				<img src={heart} alt={"Like"} />
			</div>
		</div>
	);
}

export default Post;