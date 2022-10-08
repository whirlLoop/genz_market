import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	Box,
	Stack,
	TextField,
	InputAdornment,
	IconButton,
	Button,
	Typography,
} from "@mui/material";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CountryDropdown } from "react-country-region-selector";
const phoneStyle = {
	"& .MuiOutlinedInput-root": {
		"& input + fieldset": {
			borderColor: "none",
			border: "none",
		},
	},
};
const textFieldStyles = {
	"& .MuiOutlinedInput-root": {
		"& input + fieldset": {
			outline: "none",
		},
		"&:hover fieldset": {
			borderColor: "#bdbdbd",
		},
	},
};
export default function Signup({ userType, setUserType }) {
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword(!showPassword);

	return (
		<Box component="form">
			<Box marginBottom="20px">
				{userType == "creator" ? (
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
						<Button variant="contained" onClick={() => setUserType("client")}>
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
						<Button variant="contained" onClick={() => setUserType("creator")}>
							Or join as a creator
						</Button>
					</Stack>
				)}
			</Box>
			<Stack direction="row" justifyContent="space-between">
				<TextField
					id="firstName"
					type="text"
					name="firstName"
					placeholder="First Name"
					label="First Name"
					sx={{
						width: "45%",
						background: "none",
						...textFieldStyles,
					}}
				/>
				<TextField
					id="lastName"
					type="text"
					name="lastName"
					placeholder="Last Name"
					label="Last Name"
					sx={{
						width: "45%",
						...textFieldStyles,
					}}
				/>
			</Stack>
			<Stack marginTop="20px">
				<TextField
					id="email"
					type="email"
					name="email"
					placeholder="Email Address"
					label="Email"
					fullWidth
					sx={textFieldStyles}
				/>
			</Stack>
			{userType == "creator" ? (
				<Stack direction="row" marginTop="20px" justifyContent="space-between">
					<TextField
						id="phoneNumber"
						type="tel"
						name="phoneNumber"
						label="Phone Number"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">🇰🇪 +254</InputAdornment>
							),
						}}
						fullWidth
						placeholder="Phone Number"
						sx={textFieldStyles}
					/>
				</Stack>
			) : (
				<Stack
					marginTop="20px"
					direction="row"
					sx={{
						border: "solid #bdbdbd 0.02em",
						borderRadius: "4px",
						padding: "1px",
					}}
				>
					<CountryDropdown
						style={{
							padding: "16.5px 14px",
							height: "2",
							outline: "none",
							backgroundColor: "white",
							width: "30%",
							border: "none",
						}}
					/>
					<TextField
						id="phoneNumber"
						type="tel"
						name="phoneNumber"
						placeholder="Phone Number"
						sx={phoneStyle}
						fullWidth
					/>
				</Stack>
			)}

			<Stack marginTop="40px">
				<TextField
					id="password"
					type={showPassword ? "text" : "password"}
					name="password"
					label="Password"
					fullWidth
					placeholder="Password"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									sx={{
										fontSize: "0.8em",
									}}
								>
									{showPassword ? (
										<FontAwesomeIcon icon={faEyeSlash} />
									) : (
										<FontAwesomeIcon icon={faEye} />
									)}
								</IconButton>
							</InputAdornment>
						),
					}}
					sx={textFieldStyles}
				/>
			</Stack>
		</Box>
	);
}

Signup.propTypes = {
	userType: PropTypes.string.isRequired,
	setUserType: PropTypes.func.isRequired,
};
