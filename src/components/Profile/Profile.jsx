import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import OthersPostsContainer from "./OthersPosts/OtherPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { useEffect } from "react";
import Preloader from "../common/Preloader/Preloader";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {
	let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} text={p.text} profile={props.profile} />);

	useEffect(() => {
		document.getElementById("content").scrollTo(0, 0);
	}, []);

	if (!props.profile) {
		return (
			<div className={s.preloaderContainer}>
				<span className={s.preloader}>
					<Preloader />
				</span>
			</div>
		)
	}

	return (
		<div className={s.profile}>
			<div className={s.content_block}>
				<ProfileInfo
					profile={props.profile}
					status={props.status}
					isAuth={props.isAuth}
					updateStatus={props.updateStatus}
					authorizedUserId={props.authorizedUserId}
					savePhoto={props.savePhoto}
					saveProfile={props.saveProfile}
					followingInProgress={props.followingInProgress}
					isFollowed={props.isFollowed}
					follow={props.follow}
					unfollow={props.unfollow}
				/>
				{props.authorizedUserId === props.profile.userId
					? <MyPostsContainer postsElements={postsElements} />
					: <OthersPostsContainer postsElements={postsElements} />}
			</div>
		</div>
	);
};

export default Profile;