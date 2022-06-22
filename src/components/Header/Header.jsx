import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import sign_in from "../../img/icons/header/sign-in.svg"
import cap from "../../img/icons/header/cap.png"

const Header = (props) => {
	return (
		<header className={s.header_top}>
			<div className={s.header_left}>
				<NavLink to="/users">
					<img src="https://pbs.twimg.com/media/Cpucd9vWYAAjy-D.png" alt="Lotus Network" />
					<h1>Lotus Network</h1>
				</NavLink>
			</div>
			{props.isAuth && props.profile !== null
				? <div className={s.auth}>
					<NavLink to={"/users/" + props.authorizedUserId}>
						<img src={props.currentUserProfile?.photos.small || cap} alt="Profile" />
						{props.currentUserProfile?.fullName}
					</NavLink>
				</div>
				: <div className={s.not_auth}>
					<NavLink to="/login">
						<img src={sign_in} alt="Sign In" />
						<p>Sign In</p>
					</NavLink>
				</div>
			}
		</header>
	);
}

export default Header;