import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Landing from "./pages/Landing";
import "../public/style.css";
import "../public/common.css";
import Navbar from "./layouts/Navbar";
import SignupLanding from "./pages/SignupLanding";

export default function App() {
	return (
		<Box m="auto">
			<Box sx={{ borderBottom: 1, borderColor: "secondary.main", marginBottom:"10px", borderWidth:"0.01em" }}>
				<Navbar />
			</Box>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/signup/landing/" element={<SignupLanding />} />
			</Routes>
		</Box>
	);
}
