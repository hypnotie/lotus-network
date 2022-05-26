import ReactDOM from "react-dom";
import LotusNetworkApp from "./App";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<LotusNetworkApp />, div);
	ReactDOM.unmountComponentAtNode(div);
});