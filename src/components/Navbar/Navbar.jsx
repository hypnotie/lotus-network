import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import profile from "../../img/icons/navbar/profile.svg";
import messages from "../../img/icons/navbar/messages.svg";
import users from "../../img/icons/navbar/users.svg";
import log_out from "../../img/icons/navbar/log-out.svg";
// import news from "../../img/icons/navbar/news.svg";
// import music from "../../img/icons/navbar/music.svg";
// import settings from "../../img/icons/navbar/settings.svg";

// let logOut = () => {
// 	let wnd = window.open("https://social-network.samuraijs.com/Auth/Auth/LogOut");
// 	setTimeout(function () {
// 		wnd.close();
// 	}, 10);
// 	return false;
// };

const Navbar = (props) => {
	return (
		<nav className={s.nav}>
			<div className={s.nav_top}>
				{props.isAuth
					? <div>
						<NavLink to={"/users/" + props.authorizedUserId} className={s.nav_profile}>
							<img src={profile} alt="Profile" />
							<div>Profile</div>
						</NavLink>
						<NavLink to="/messages" className={s.nav_messages}>
							<img src={messages} alt="Messages" />
							<div>Messages</div>
						</NavLink>
					</div>
					: ""
				}
				<NavLink to="/users" className={s.nav_users}>
					<img src={users} alt="Users" />
					<div>Users</div>
				</NavLink>
				{/* <NavLink to="/news" className={s.nav_news}>
					<img src={news} alt="News" />
					<div>News</div>
				</NavLink>
				<NavLink to="/music" className={s.nav_music}>
					<img src={music} alt="Music" />
					<div>Music</div>
				</NavLink> */}
			</div>
			<div className={s.nav_bottom}>
				{/* <NavLink to="/settings" className={s.nav_settings}>
					<img src={settings} alt="Settings" />
					<div>Settings</div>
				</NavLink> */}
				{props.isAuth
					? <div className={s.nav_logOut} onClick={
						// () => {
						// 	logOut();
						// 	setTimeout(function () {
						// 		window.location.reload();
						// 	}, 10);
						// }
						props.logout
					}>
						<img src={log_out} alt="Log Out" />
						<div>Log Out</div>
					</div>
					: ""
				}
			</div>
		</nav >
	);
}

export default Navbar;