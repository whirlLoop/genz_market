import React from "react";
import Hero from "../Hero";
import renderer from "react-test-renderer";

it("Renders correctly", () => {
	const tree = renderer.create(<Hero onMessageSubmit={jest.fn()} />);
	expect(tree).toMatchSnapshot();
});
