import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import OthersPosts from "./OthersPosts/OthersPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { useEffect } from "react";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
	useEffect(() => {
		document.getElementById("content").scrollTo(0, 0);
	}, []);
	console.log(props.profile);

	if (!props.profile) {
		return <Preloader />
	}

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
				{props.authorizedUserId === props.profile.userId ? <MyPostsContainer /> : <OthersPosts />}
			</div>
		</div>
	);
};

export default Profile;