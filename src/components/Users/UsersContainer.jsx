import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from "../../redux/users-reducer";
import {
	getUsers, getPageSize, getTotalItemsCount, getCurrentPage,
	getIsFetching, getFollowingInProgress, getAuthorizedUserId
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
	componentDidMount() {
		const { getUsers, currentPage, pageSize } = this.props;
		getUsers(currentPage, pageSize);
	}
	onPageChanged = (pageNumber) => {
		const { getUsers, pageSize } = this.props;
		getUsers(pageNumber, pageSize);
	};

	render() {
		return <>
			<Users
				users={this.props.users}
				pageSize={this.props.pageSize}
				portionSize={this.props.portionSize}
				totalItemsCount={this.props.totalItemsCount}
				currentPage={this.props.currentPage}
				isFetching={this.props.isFetching}
				followingInProgress={this.props.followingInProgress}
				authorizedUserId={this.props.authorizedUserId}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				onPageChanged={this.onPageChanged}
			/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalItemsCount: getTotalItemsCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
		authorizedUserId: getAuthorizedUserId(state)
	}
};

export default connect(mapStateToProps, {
	follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers
})(UsersContainer);