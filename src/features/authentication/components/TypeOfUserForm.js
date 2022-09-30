import React from "react";
import PropTypes from "prop-types";
import {
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
	Typography,
} from "@mui/material";

export default function TypeOfUserForm({ radioValue, setRadioValue }) {
	return (
		<FormControl data-testid="getTypeOfUserForm">
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
	);
}

TypeOfUserForm.propTypes = {
	setRadioValue: PropTypes.func.isRequired,
	radioValue: PropTypes.string.isRequired,
};
