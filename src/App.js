import React, { Component, Suspense } from "react";
import { compose } from "redux";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initializeApp } from "./redux/app-reducer";
import store from "./redux/redux-store";
import s from "./App.module.css";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ChatContainer from "./components/Dialogues/Dialogue/ChatContainer";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialoguesContainer = React.lazy(() => import("./components/Dialogues/DialoguesContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));

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
						<Suspense fallback={""}>
							<Routes>
								<Route path="/"
									element={<ProfileContainer key={"mainOne"} />} />
								<Route path="/lotus-network"
									element={<ProfileContainer key={"mainTwo"} />} />
								<Route path="/profile"
									element={<ProfileContainer key={"me"} />} />
								<Route path="/messages"
									element={<DialoguesContainer key={"dialogues"} />} />
								<Route path="/messages/*"
									element={<ChatContainer key={"chat"} />} />
								<Route path="/users"
									element={<UsersContainer key={"users"} />} />
								<Route path="/users/*"
									element={<ProfileContainer key={"user"} />} />
								<Route path="/login"
									element={<Login key={"login"} />} />
							</Routes>
						</Suspense>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});

let AppContainer = compose(
	connect(mapStateToProps, { initializeApp }))(App);

const LotusNetworkApp = () => {
	return <BrowserRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</BrowserRouter>
};

export default LotusNetworkApp;