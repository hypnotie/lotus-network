import s from "./OthersPosts.module.css";

const OthersPosts = () => {
	return (
		<div className={s.posts}>
			<h3 className={s.header}>
				Posts
			</h3>
			<div>
			</div>
			<div className={s.noPosts}>
				<div className={s.noPostsMessage}>
					There are no posts yet
				</div>
			</div>
		</div>
	);
}

export default OthersPosts;