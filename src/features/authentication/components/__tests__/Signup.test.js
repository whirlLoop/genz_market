import React from "react";
import { render } from "@testing-library/react";
import Signup from "../Signup";

describe("Signup", () => {
	let mountedSignupComponent;
	beforeEach(() => {
		mountedSignupComponent = render(
			<Signup setUserType={jest.fn()} userType={""} />
		);
	});
	it("renders correctly", () => {
		expect(mountedSignupComponent).not.toBeNull();
	});
});
