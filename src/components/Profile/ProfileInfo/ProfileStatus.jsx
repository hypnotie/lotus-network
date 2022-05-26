import { useEffect, useState } from "react";
import s from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	const activateEditMode = () => {
		setEditMode(true);
	};

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	};

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	};

	return (
		<div>
			<div className={s.status}>
				{props.id === props.authorizedUserId
					? <div className={s.myStatus}>
						{!editMode
							? <div onClick={activateEditMode}>
								<span>{props.status || "Set status"}</span>
							</div>
							: <div>
								<input
									className={s.editStatus}
									onChange={onStatusChange}
									autoFocus={true}
									onBlur={deactivateEditMode}
									value={status}
								/>
							</div>
						}
					</div>
					: <div className={s.userStatus}>
						{props.status}
					</div>
				}
			</div>
			<div className={s.line}></div>
		</div>
	);
}

export default ProfileStatusWithHooks;