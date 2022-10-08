import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { render } from "@testing-library/react";
import Hero from "../Hero";

function shallowRenderHeroComponent() {
	const renderer = new ShallowRenderer();
	return renderer.render(<Hero />);
}

describe("Hero", () => {
	it("renders without crashing", () => {
		shallowRenderHeroComponent();
	});
	it("renders a header", () => {
		const { getByText } = render(<Hero />);
		getByText("Freedom to express your creative self");
	});
	it("renders a splash message", () => {
		const { getByText } = render(<Hero />);
		getByText(
			"Forget the old rules. You can have the best people. Right now. Right here."
		);
	});
	it("renders a Find Work button", () => {
		const { getByText } = render(<Hero />);
		getByText("Find Work");
	});
	it("renders a Find Talent button", () => {
		const { getByText } = render(<Hero />);
		getByText("Find Talent");
	});
	it("renders a Microsoft Icon", () => {
		const { getByAltText } = render(<Hero />);
		getByAltText("Microsoft Icon");
	});
	it("renders a Godaddy Icon", () => {
		const { getByAltText } = render(<Hero />);
		getByAltText("Godaddy Icon");
	});
	it("renders a Work Doodle Icon", () => {
		const { getByAltText } = render(<Hero />);
		getByAltText("Work Doodle");
	});
});
