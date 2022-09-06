import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Landing from "./pages/Landing";
import "../public/style.css";
import Navbar from "./layouts/Navbar";

export default function App() {
	return (
		<Box m="auto">
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
			</Routes>
		</Box>
	);
}
