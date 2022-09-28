import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Header", () => {
	let mountedNavbar;
	beforeEach(() => {
		mountedNavbar = render(
			<Router>
				<Navbar />
			</Router>
		);
	});
	it("renders correctly", () => {
		expect(mountedNavbar).not.toBeNull();
	});
	it("renders a Logo", () => {
		const { getByAltText } = mountedNavbar;
		getByAltText("Logo");
	});
	it("renders a Find work link", () => {
		const { getByRole } = mountedNavbar;

		expect(getByRole("link", { name: "Find Work" }).href).toBe(
			"http://localhost/"
		);
	});
	it("renders a Find talent link", () => {
		const { getByRole } = mountedNavbar;

		expect(getByRole("link", { name: "Find Talent" }).href).toBe(
			"http://localhost/"
		);
	});
	it("renders a Login link", () => {
		const { getByRole } = mountedNavbar;

		expect(getByRole("link", { name: "Login" }).href).toBe("http://localhost/");
	});
	it("renders a Signup link", () => {
		const { getByRole } = mountedNavbar;

		expect(getByRole("link", { name: "Signup" }).href).toBe(
			"http://localhost/signup/landing/"
		);
	});
});
