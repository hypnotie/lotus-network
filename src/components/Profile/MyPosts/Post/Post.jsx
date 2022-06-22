import s from "./Post.module.css";
// import heart from "../../../../img/icons/profile/heart.svg";
import def_profile from "../../../../img/icons/users/default-profile-picture.png"
import attention from "../../../../img/icons/common/attention.svg"

const Post = (props) => {
	return (
		<div className={s.profile_post}>
			<img className={s.profile_picture}
				src={props.profile?.photos.small || def_profile}
				alt={"Profile"}
			/>
			<div className={s.post_content}>
				<h4 className={s.author_name}>
					{props.profile?.fullName}
					{props.id > 3 &&
						<div className={s.hint}>
							<img src={attention} alt="Attention" />
							<span>This post will be deleted after the page is refreshed,
								because the functionality of the posts is not yet implemented in the API.</span>
						</div>
					}
				</h4>
				<div className={s.text}>
					{props.text}
				</div>
			</div>
			{/* <div className={s.likes_count}>
				{props.likes}
			</div>
			<div className={s.like_icon}>
				<img src={heart} alt={"Like"} />
			</div> */}
		</div>
	);
}

export default Post;