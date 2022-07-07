import React, { Component, Suspense } from "react";
import { compose } from "redux";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initializeApp } from "./redux/app-reducer";
import store from "./redux/redux-store";
import s from "./App.module.css";
import Login from "./components/Login/Login";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ChatContainer from "./components/Dialogues/Dialogue/ChatContainer";
import Error404 from "./components/Error404/Error404";
import { logout } from "./redux/auth-reducer";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialoguesContainer = React.lazy(() => import("./components/Dialogues/DialoguesContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));

class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	componentDidUpdate() {
		if (this.props.authorizedUserId !== null && this.props.authorizedUserId !== 23279) {
			this.props.logout();
		}
	}

	render() {
		if (!this.props.initialized) {
			return <div />
		}

		return (
			<div>
				<div className={s.bg_header} />
				<div className={s.app_wrapper}>
					<HeaderContainer />
					<NavbarContainer />
					<div className={s.content} id={"content"}>
						<Suspense fallback={""}>
							<Routes>
								<Route path="/"
									element={<Login key={"login1stRedirect"} />} />

								<Route path="/lotus-network"
									element={<Login key={"login2ndRedirect"} />} />

								<Route path={`/users/` + this.props.authorizedUserId}
									element={<ProfileContainer key={"me"} />} />

								<Route path="/users/*"
									element={<ProfileContainer key={"user"} />} />

								<Route path="/messages"
									element={<DialoguesContainer key={"dialogues"} />} />

								<Route path="/messages/*"
									element={<ChatContainer key={"chat"} />} />

								<Route path="/users"
									element={<UsersContainer key={"users"} />} />

								<Route path="/login"
									element={<Login key={"login"} />} />

								<Route path="*"
									element={<Error404 key={"error404"} />} />
							</Routes>
						</Suspense>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
	authorizedUserId: state.auth.id
});

let AppContainer = compose(
	connect(mapStateToProps, { initializeApp, logout }))(App);

const LotusNetworkApp = () => {
	return <BrowserRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</BrowserRouter>
};

export default LotusNetworkApp;