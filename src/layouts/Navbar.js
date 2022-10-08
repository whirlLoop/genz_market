import React from "react";
import { Link } from "react-router-dom";
import { Stack, Container, Button } from "@mui/material";
import Logo from "../assets/logos/logo.png";
import "./Navbar.css";

const Navbar = () => {
	return (
		<Container>
			<Stack
				direction="row"
				alignItems="center"
				sx={{
					gap: { sm: "122px", xs: "40px" },
				}}
				py="10px"
			>
				<Link to="/">
					<img src={Logo} className="logo" alt="Logo" />
				</Link>
				<Stack direction="row" justifyContent="space-between" width="100%">
					<Stack
						direction="row"
						gap="40px"
						fontSize="24px"
						alignItems="flex-end"
					>
						<Link to="#" className="link nav-text">
							Find Work
						</Link>
						<Link to="#" className="link nav-text">
							Find Talent
						</Link>
					</Stack>
					<Stack
						direction="row"
						gap="40px"
						fontSize="24px"
						alignItems="flex-end"
					>
						<Link to="#" className="link nav-text">
							Login
						</Link>
						<Link to="/signup/landing/" className="link nav-text">
							<Button variant="contained">Signup</Button>
						</Link>
					</Stack>
				</Stack>
			</Stack>
		</Container>
	);
};

export default Navbar;
