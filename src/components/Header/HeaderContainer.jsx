import React from "react";
import Header from "./Header";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	profile: state.auth.profile
});

export default connect(mapStateToProps, {})(HeaderContainer);