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
				justifyContent="center"
				alignItems="center"
				sx={{
					gap: { sm: "122px", xs: "40px" },
					mt: { sm: "32px", xs: "20px" },
					justifyContent: "none",
					p: "0",
				}}
				px="20px"
			>
				<Link to="/">
					<img src={Logo} className="logo" />
				</Link>
				<Stack direction="row" justifyContent="space-between" width="100%">
					<Stack
						direction="row"
						gap="40px"
						fontSize="24px"
						alignItems="flex-end"
					>
						<Link to="#" className="link">
							Find Work
						</Link>
						<Link to="#" className="link">
							Find Talent
						</Link>
					</Stack>
					<Stack
						direction="row"
						gap="40px"
						fontSize="24px"
						alignItems="flex-end"
					>
						<Link to="#" className="link">
							Login
						</Link>
						<Link to="#" className="link">
							<Button variant="contained">Signup</Button>
						</Link>
					</Stack>
				</Stack>
			</Stack>
		</Container>
	);
};

export default Navbar;
