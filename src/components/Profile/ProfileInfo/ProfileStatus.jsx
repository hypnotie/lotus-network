import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
	componentDidUpdate(prevProps) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			});
		}
	}

	state = {
		editMode: false,
		status: this.props.status
	};

	activateEditMode = () => {
		this.setState({
			editMode: true
		});
	};

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		});
		this.props.updateStatus(this.state.status);
	};

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		})
	};

	// onFocus = (e) => {
	// 	e.target.select();
	// };

	render() {
		return (
			<div>
				<div className={s.status}>
					{this.props.id === this.props.authorizedUserId
						? <div className={s.myStatus}>
							{!this.state.editMode
								? <div onClick={this.activateEditMode}>
									<span>{this.props.status || "Set status"}</span>
								</div>
								: <div>
									<input
										className={s.editStatus}
										onChange={this.onStatusChange}
										autoFocus={true}
										onBlur={this.deactivateEditMode}
										value={this.state.status}
									// onFocus={this.onFocus}
									/>
								</div>
							}
						</div>
						: <div className={s.userStatus}>
							{this.props.status}
						</div>
					}
				</div>
				<div className={s.line}></div>
			</div>
		);
	}
}

export default ProfileStatus;