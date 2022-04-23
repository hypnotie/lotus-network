import React from "react";
// import { withProfileRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import Login from "./Login";

class ProfileContainer extends React.Component {
	render() {
		return (
			<Login />
		);
	}
}

export default compose(
	// withProfileRedirect
)(ProfileContainer);