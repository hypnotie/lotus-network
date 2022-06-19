import s from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
	return (
		<div className={s.usersContent}>
			<div className={s.pagination_top}>
				<Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} />
			</div>
			{props.isFetching
				? <div className={s.preloader}><Preloader /></div>
				: <>
					<div className={s.users}>
						{props.users.map(u =>
							<User
								user={u}
								key={u.id}
								followingInProgress={props.followingInProgress}
								follow={props.follow}
								unfollow={props.unfollow}
							/>)}
					</div>
					<div className={s.pagination_bottom}>
						<Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} />
					</div>
				</>
			}
		</div>
	);
}

export default Users;