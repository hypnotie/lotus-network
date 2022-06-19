import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import def_profile from "../../img/icons/users/default-profile-picture.png"
import sign_in from "../../img/icons/header/sign-in.svg"

const Header = (props) => {
	return (
		<header className={s.header_top}>
			<div className={s.header_left}>
				{props.isAuth
					? <NavLink to="/profile">
						<img src="https://pbs.twimg.com/media/Cpucd9vWYAAjy-D.png" alt="Lotus Network" />
						<h1>Lotus Network</h1>
					</NavLink>
					: <NavLink to="/login">
						<img src="https://pbs.twimg.com/media/Cpucd9vWYAAjy-D.png" alt="Lotus Network" />
						<h1>Lotus Network</h1>
					</NavLink>
				}
			</div>
			{props.isAuth
				? <div className={s.auth}>
					<NavLink to={"/profile"}>
						<img src={props.currentUserProfile.photos.small || def_profile} alt="Profile" />
						{props.currentUserProfile.fullName}
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