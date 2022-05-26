import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";

let state = {
	posts: [
		{ id: 4, likes: 127, text: "Everything gets caught in the light. There’s no escaping. In the traces of the flesh of the land everything swells in the glow of our orbiting star. A garden is a place of focus and growth. Undulating in the soil of the earth things transform and birth. Things get made by the hands of undefined forms. The roots of wonder wander the expectations of life’s intuition. The kinds of things that can be made are up to imaginations and esteemed focus. The world spins forward full of its happenstance and coincidence." },
		{ id: 3, likes: 21, text: "I was different then, I don’t need them to be cool." },
		{ id: 2, likes: 15, text: "It’s just a cigarette like you always used to do." },
		{ id: 1, likes: 15, text: "Honey, don’t you love me and you know it makes me sad?" },
		{ id: 0, likes: 19, text: "It’s just a cigarette and it cannot be that bad." }
	]
};

it("length of posts should be incremented", () => {
	let action = addPostCreator("it-kamasutra.com");
	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(6);
});

it("new post text should be correct", () => {
	let action = addPostCreator("it-kamasutra.com");
	let newState = profileReducer(state, action);
	expect(newState.posts[0].text).toBe("it-kamasutra.com");
});

it("length of posts should be decremented after deleting", () => {
	let action = deletePost(1);
	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(4);
});

it(`length shouldn't be decremented after deleting if id is incorrect`, () => {
	let action = deletePost(1000);
	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(5);
});