import s from "./Users.module.css";
import id from "../../img/icons/users/id.svg"
import def_profile from "../../img/icons/users/default-profile-picture.png"
import status from "../../img/icons/users/status.svg"
import Preloader from "../common/Preloader/Preloader"
import { NavLink } from "react-router-dom"

let Users = (props) => {
	let pages = [];
	for (let i = 1; i <= 20; i++) {
		pages.push(i);
	}

	return (
		<div className={s.usersContent}>
			<div className={s.pagination_top}>
				{pages.map(p => {
					return (
						<span
							className={props.currentPage === p && s.selectedPage}
							onClick={() => { props.onPageChanged(p); }}>{p}
						</span>
					)
				})
				}
			</div>
			{props.isFetching
				? <div className={s.preloader}><Preloader /></div>
				: <div>
					<div className={s.users}>
						{props.users.map(u => <div className={s.user} key={u.id}>
							<div className={s.image}>
								<NavLink to={"/users/" + u.id}>
									<img src={u.photos.large != null ? u.photos.large : def_profile} alt={u.name} />
								</NavLink>
							</div>
							<div className={s.info}>
								<ul>
									<li className={s.name}>
										<h5>
											<NavLink to={"/users/" + u.id}>
												{u.name}
											</NavLink>
										</h5>
									</li>
									<li className={s.id}>
										<img className={s.id_icon} src={id} alt="User's ID" />
										<div className={s.id_number}>
											{u.id}
										</div>
									</li>
									{u.status
										? <li className={s.status}>
											<img className={s.status_icon} src={status} alt={"Status"} />
											<div className={s.status_text}>
												{u.status}
											</div>
										</li>
										: ""
									}
								</ul>
							</div>
							{u.id !== props.authorizedUserId
								? <div>
									{u.followed
										? <button
											className={s.follow}
											disabled={props.followingInProgress.some(id => id === u.id)}
											onClick={() => { props.unfollow(u.id); }}>Unfollow</button>
										: <button
											className={s.follow}
											disabled={props.followingInProgress.some(id => id === u.id)}
											onClick={() => { props.follow(u.id); }}>Follow</button>
									}
								</div>
								: ""
							}
						</div>)
						}
					</div>
					<div className={s.pagination_bottom}>
						{pages.map(p => {
							return (
								<span
									className={props.currentPage === p && s.selectedPage}
									onClick={() => { props.onPageChanged(p); }}>{p}
								</span>
							)
						})
						}
					</div>
				</div>
			}
		</div>
	);
}

export default Users;