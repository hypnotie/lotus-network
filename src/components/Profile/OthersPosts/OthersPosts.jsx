import s from "./OthersPosts.module.css";

const OthersPosts = (props) => {
	return (
		<div className={s.posts}>

			<div>
			</div>
			{props.userId === 23279
				? <div>
					<h3 className={s.headerPostsElements}>
						Posts
					</h3>
					<div className={s.postsElements}>{props.postsElements}</div>
				</div>
				: <div>
					<h3 className={s.headerNoPosts}>
						Posts
					</h3>
					<div className={s.noPosts}>
						<div className={s.noPostsMessage}>
							There are no posts yet
						</div>
					</div>
				</div>
			}
		</div>
	);
}

export default OthersPosts;