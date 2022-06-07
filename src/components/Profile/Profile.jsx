import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div>
			{/* //* Profile Cover
			<div className={s.cover_block}>
				<img
					src="https://i.ibb.co/BKnPmyQ/image.png"
					alt="Cover"
				/>
			</div> 
			*/}
			<div className={s.content_block}>
				<ProfileInfo
					profile={props.profile}
					status={props.status}
					isAuth={props.isAuth}
					updateStatus={props.updateStatus}
					authorizedUserId={props.authorizedUserId}
					savePhoto={props.savePhoto}
					saveProfile={props.saveProfile}
				/>
				<MyPostsContainer/>
			</div>
		</div>
	);
}

export default Profile;