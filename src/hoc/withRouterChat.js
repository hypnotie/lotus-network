import { useMatch } from "react-router-dom";

const withRouterChat = (Component) => {
	let RouterComponent = (props) => {
		const match = useMatch('/messages/:chatId/');
		return <Component {...props} match={match} />;
	}
	return RouterComponent;
}

export default withRouterChat;