import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import SignupLayout from "../SignupLayout";

describe("SignupLayout when using default values", () => {
	let mountedSignupComponent;
	function renderSignupLayout() {
		return render(
			<Router>
				<SignupLayout />
			</Router>
		);
	}

	beforeEach(() => {
		mountedSignupComponent = renderSignupLayout();
	});

	it("renders correctly", () => {
		expect(mountedSignupComponent).not.toBeNull();
	});
	it("renders a form to prompt why user has joined", () => {
		const { getByTestId } = mountedSignupComponent;
		getByTestId("getTypeOfUserForm");
	});
	it("renders a disabled createAccountButton", () => {
		const { getByTestId } = mountedSignupComponent;
		expect(getByTestId("createAccountButton")).toBeDisabled();
	});
	it("renders a login message", () => {
		const { getByText } = mountedSignupComponent;
		getByText("Already have an account?");
	});
	it("renders a login link", () => {
		const { getByRole } = mountedSignupComponent;
		expect(getByRole("link", { name: "Log In" }).href).toBe(
			"http://localhost/login/"
		);
	});
});

describe("SignupLayout when user selects a type of user", () => {
	function renderSignupLayout() {
		return render(
			<Router>
				<SignupLayout />
			</Router>
		);
	}

	beforeEach(() => {
		renderSignupLayout();
	});
	it("enables the createAccountButton", () => {
		fireEvent.click(screen.getByText("Im a creator looking for work"));
		expect(screen.getByTestId("createAccountButton")).toBeEnabled();
	});

	it("changes the createAccountButton button text accordingly if user selects creator", () => {
		fireEvent.click(screen.getByText("Im a creator looking for work"));
		expect(screen.getByText("Join as a creator")).not.toBeNull();
	});
	it("changes the createAccountButton button text accordingly if user selects client", () => {
		fireEvent.click(screen.getByText("Im a client to hire"));
		expect(screen.getByText("Join as a client")).not.toBeNull();
	});
});

describe("SignupLayout when user clicks the createAccountButton", () => {
	function renderSignupLayout() {
		return render(
			<Router>
				<SignupLayout />
			</Router>
		);
	}

	beforeEach(() => {
		renderSignupLayout();
	});
	it("displays a signup form", () => {
		fireEvent.click(screen.getByText("Im a creator looking for work"));
		fireEvent.click(screen.getByTestId("createAccountButton"));
		expect(screen.getByTestId("signUpFormBox")).toHaveStyle({
			display: "block",
		});
	});
	it("hides select user type form", () => {
		fireEvent.click(screen.getByText("Im a creator looking for work"));
		fireEvent.click(screen.getByTestId("createAccountButton"));
		expect(screen.getByTestId("getTypeOfUserFormBox")).toHaveStyle({
			display: "none",
		});
	});
});
