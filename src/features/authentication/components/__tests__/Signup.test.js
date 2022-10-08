import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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
	it("toggles password on click", () => {
		expect(screen.getByPlaceholderText("Password")).toHaveAttribute(
			"type",
			"password"
		);
		fireEvent.click(screen.getByLabelText("toggle password visibility"));
		expect(screen.getByPlaceholderText("Password")).toHaveAttribute(
			"type",
			"text"
		);
	});
});

describe("Signup when user selects to join as a creator", () => {
	let mountedSignupComponent;
	beforeEach(() => {
		mountedSignupComponent = render(
			<Signup setUserType={jest.fn()} userType={"creator"} />
		);
	});
	it("renders a message for creators", () => {
		const { getByText } = mountedSignupComponent;
		getByText("Start creating today!");
	});
	it("renders a button to switch registration to client", () => {
		const { getByText } = mountedSignupComponent;
		getByText("Or join as a client");
	});
	it("renders the basic creator fields", () => {
		expect(
			screen.getByRole("textbox", { name: /First Name/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("textbox", { name: /Last Name/i })
		).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: /Email/i })).toBeInTheDocument();
		expect(
			screen.getByRole("textbox", { name: /Phone Number/i })
		).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
	});
});

describe("Signup when user selects to join as a client", () => {
	let mountedSignupComponent;
	beforeEach(() => {
		mountedSignupComponent = render(
			<Signup setUserType={jest.fn()} userType={"client"} />
		);
	});
	it("renders a message for creators", () => {
		const { getByText } = mountedSignupComponent;
		getByText("Join to hire incredible talent today!");
	});
	it("renders a button to switch registration to client", () => {
		const { getByText } = mountedSignupComponent;
		getByText("Or join as a creator");
	});
	it("renders the basic client fields", () => {
		expect(
			screen.getByRole("textbox", { name: /First Name/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("textbox", { name: /Last Name/i })
		).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: /Email/i })).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Phone Number")).toBeInTheDocument();
	});
});
