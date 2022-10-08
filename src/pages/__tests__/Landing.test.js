import React from "react";
import { render } from "@testing-library/react";
import Landing from "../Landing";

describe("Landing page", () => {
	it("renders without crashing", () => {
		render(<Landing />);
	});
	it("renders a Hero component", () => {
		const { getByTestId } = render(<Landing />);
		getByTestId("landing-component");
	});
});
