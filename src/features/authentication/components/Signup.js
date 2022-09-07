import React from "react";
import PropTypes from "prop-types";
import { Box, Stack, TextField } from "@mui/material";
import { CountryDropdown } from "react-country-region-selector";
const style = {
	"& .MuiOutlinedInput-root": {
		"& input + fieldset": {
			borderColor: "none",
			border: "none",
		},
	},
};
export default function Signup({ userType }) {
	return (
		<Box component="form">
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
				/>
			</Stack>
			{userType == "creator" ? (
				<Stack direction="row" marginTop="20px" justifyContent="space-between">
					<TextField
						id="phoneNumber"
						type="tel"
						name="phoneNumber"
						label="🇰🇪 +254"
						fullWidth
						placeholder="Phone Number"
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
						sx={style}
						fullWidth
					/>
				</Stack>
			)}

			<Stack marginTop="40px">
				<TextField
					id="password"
					type="password"
					name="password"
					label="Password"
					fullWidth
					placeholder="Password"
				/>
			</Stack>
		</Box>
	);
}

Signup.propTypes = {
	userType: PropTypes.string.isRequired,
};
