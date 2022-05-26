import s from "./User.module.css";
import id from "../../img/icons/users/id.svg"
import def_profile from "../../img/icons/users/default-profile-picture.png"
import status from "../../img/icons/users/status.svg"
import { NavLink } from "react-router-dom"

let User = ({ user, followingInProgress, follow, unfollow, authorizedUserId }) => {
	return (
		<div className={s.user} key={user.id}>
			<div className={s.image}>
				<NavLink to={"/users/" + user.id}>
					<img src={user.photos.large != null ? user.photos.large : def_profile} alt={user.name} />
				</NavLink>
			</div>
			<div className={s.info}>
				<ul>
					<li className={s.name}>
						<h5>
							<NavLink to={"/users/" + user.id}>
								{user.name}
							</NavLink>
						</h5>
					</li>
					<li className={s.id}>
						<img className={s.id_icon} src={id} alt="User's ID" />
						<div className={s.id_number}>
							{user.id}
						</div>
					</li>
					{user.status
						? <li className={s.status}>
							<img className={s.status_icon} src={status} alt={"Status"} />
							<div className={s.status_text}>
								{user.status}
							</div>
						</li>
						: ""
					}
				</ul>
			</div>
			{user.id !== authorizedUserId
				? <div>
					{user.followed
						? <button
							className={s.follow}
							disabled={followingInProgress.some(id => id === user.id)}
							onClick={() => { unfollow(user.id); }}>Unfollow</button>
						: <button
							className={s.follow}
							disabled={followingInProgress.some(id => id === user.id)}
							onClick={() => { follow(user.id); }}>Follow</button>
					}
				</div>
				: ""
			}
		</div>
	)
}

export default User;