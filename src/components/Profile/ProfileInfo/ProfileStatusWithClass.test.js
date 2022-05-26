import { create } from "react-test-renderer";
import ProfileStatusWithClass from "./ProfileStatusWithClass";

describe("ProfileStatus Component", () => {
	test("status from props should be in state", () => {
		const component = create(<ProfileStatusWithClass status="Lotus Network user" />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("Lotus Network user");
	});
	test("<span> should be displayed", () => {
		const component = create(<ProfileStatusWithClass />);
		const root = component.root;
		let span = root.findByType("span");
		expect(span).not.toBeNull();
	});
	test("<span> should be displayed with correct status after creation", () => {
		const component = create(<ProfileStatusWithClass status="Lotus Network user" />);
		const root = component.root;
		let span = root.findByType("span");
		expect(span.children[0]).toBe("Lotus Network user");
	});
	test("<input> should not be displayed", () => {
		const component = create(<ProfileStatusWithClass />);
		const root = component.root;
		expect(() => { root.findByType("input"); }).toThrow();
	});
	test(`<input> should be displayed in "editMode" instead of span and contain current status after clicking`, () => {
		const component = create(<ProfileStatusWithClass status="Lotus Network user" />);
		const root = component.root;
		let div = root.findByProps({ className: "statusClicker" });
		div.props.onClick();
		let input = root.findByType("input");
		expect(() => { root.findByType("span"); }).toThrow();
		expect(input).not.toBeNull();
		expect(input.props.value).toBe("Lotus Network user");
	});
	test("callback should be called", () => {
		const mockCallback = jest.fn();
		const component = create(<ProfileStatusWithClass status="Lotus Network user" updateStatus={mockCallback} />);
		const instance = component.getInstance();
		instance.deactivateEditMode();
		expect(mockCallback.mock.calls.length).toBe(1);
	});
});