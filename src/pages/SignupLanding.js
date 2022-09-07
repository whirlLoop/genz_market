import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Container,
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
	Button,
	Stack,
	Typography,
	Box,
} from "@mui/material";
import "./SignupLanding.css";
import Signup from "../features/authentication/components/Signup";

const SignupLanding = () => {
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
				<Box sx={{ display: hasSetRadioValue ? "none" : "block" }}>
					<FormControl>
						<Typography
							variant="h5"
							sx={{
								textAlign: "center",
								fontWeight: "600",
								marginBottom: "20px",
							}}
						>
							Why Are you joining us?
						</Typography>
						<RadioGroup
							aria-labelledby="demo-controlled-radio-buttons-group"
							name="controlled-radio-buttons-group"
							value={radioValue}
							onChange={(e) => setRadioValue(e.target.value.toLowerCase())}
						>
							<FormControlLabel
								value="creator"
								control={<Radio />}
								label="Im a creator looking for work"
							/>
							<FormControlLabel
								value="client"
								control={<Radio />}
								label="Im a client to hire"
							/>
						</RadioGroup>
					</FormControl>
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
					sx={{ display: hasSetRadioValue ? "block" : "none", width: "100%" }}
				>
					{radioValue == "creator" ? (
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<Typography
								variant="h5"
								sx={{
									textAlign: "center",
									fontWeight: "600",
								}}
							>
								Start creating today!
							</Typography>
							<Button
								variant="contained"
								onClick={() => setRadioValue("client")}
							>
								Or join as a client
							</Button>
						</Stack>
					) : (
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<Typography
								variant="h5"
								sx={{
									textAlign: "center",
									fontWeight: "600",
								}}
							>
								Join to hire incredible talent today!
							</Typography>
							<Button
								variant="contained"
								onClick={() => setRadioValue("creator")}
							>
								Or join as a creator
							</Button>
						</Stack>
					)}
					<Box marginTop="20px">
						<Signup userType={radioValue} />
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default SignupLanding;
