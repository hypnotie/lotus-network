import { useMatch } from "react-router-dom";

const withRouter = (Component) => {
	let RouterComponent = (props) => {
		const match = useMatch('/users/:userId/');
		return <Component {...props} match={match} />;
	}
	return RouterComponent;
}

export default withRouter;