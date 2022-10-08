import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Stack, Typography, Box } from "@mui/material";
import "./SignupLayout.css";
import Signup from "../components/Signup";
import TypeOfUserForm from "../components/TypeOfUserForm";

function SignupLayout() {
	const [radioValue, setRadioValue] = useState("");
	const [hasSetRadioValue, setHasSetRadioValue] = useState(false);

	return (
		<Container
			sx={{
				paddingTop: "100px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					padding: "30px",
					width: "60%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					border: 1,
					borderColor: "primary.main",
					borderRadius: 1,
				}}
			>
				<Box
					sx={{ display: hasSetRadioValue ? "none" : "block" }}
					data-testid="getTypeOfUserFormBox"
				>
					<TypeOfUserForm
						radioValue={radioValue}
						setRadioValue={setRadioValue}
					/>
					<Stack
						justifyContent="center"
						alignItems="center"
						sx={{
							marginTop: "40px",
						}}
					>
						<Button
							variant="contained"
							disabled={radioValue ? false : true}
							sx={{ width: "200px", padding: "6px" }}
							onClick={() => setHasSetRadioValue(true)}
							data-testid="createAccountButton"
						>
							{radioValue ? `Join as a ${radioValue}` : "Create Account"}
						</Button>
						<Stack
							direction="row"
							alignItems="center"
							justifyContent="center"
							spacing={2}
							mt="20px"
						>
							<Typography>Already have an account?</Typography>
							<Link to="/login/" sx={{ width: "200px" }} className="link">
								Log In
							</Link>
						</Stack>
					</Stack>
				</Box>
				<Box
					marginTop="20px"
					sx={{ display: hasSetRadioValue ? "block" : "none", width: "100%" }}
					data-testid="signUpFormBox"
				>
					<Signup userType={radioValue} setUserType={setRadioValue} />
				</Box>
			</Box>
		</Container>
	);
}

export default SignupLayout;
