import { compose } from "redux";
import s from "./App.module.css";
import { Component } from "react";
import { connect } from "react-redux";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import { initializeApp } from "./redux/app-reducer";
import UsersContainer from "./components/Users/UsersContainer"
import Preloader from "./components/common/Preloader/Preloader";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import ChatContainer from "./components/Dialogues/Dialogue/ChatContainer";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";

class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<div>
				<div className={s.bg_header} />
				<div className={s.app_wrapper}>
					<HeaderContainer />
					<NavbarContainer />
					<div className={s.content}>
						<Routes>
							<Route path="/"
								element={<ProfileContainer key={"main"} />} />
							<Route path="/profile"
								element={<ProfileContainer key={"me"} />} />
							<Route path="/messages"
								element={<DialoguesContainer />} />
							<Route path="/messages/*"
								element={<ChatContainer />} />
							<Route path="/users"
								element={<UsersContainer />} />
							<Route path="/users/*"
								element={<ProfileContainer key={"user"} />} />
							<Route path="/login"
								element={<Login />} />
						</Routes>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});

export default compose(
	connect(mapStateToProps, { initializeApp }))(App);