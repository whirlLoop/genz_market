import React from "react";
import { Grid, Container, Button, Typography, Box } from "@mui/material";
import WorkDoodle from "../assets/work-doodle-icon.jpg";
import MicrosoftIcon from "../assets/logos/microsoft.svg";
import GodaddyIcon from "../assets/logos/godaddy.svg";

export default function Landing() {
	return (
		<Container>
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 4 }}
				sx={{ display: "flex", alignItems: "center" }}
				p
			>
				<Grid item xs={7}>
					<Typography variant="h2" sx={{ fontSize: "3rem" }}>
						Freedom to express your creative self
					</Typography>
					<Typography variant="p" sx={{ fontSize: "2rem", lineHeight: "2rem" }}>
						Forget the old rules. You can have the best people. Right now. Right
						here.
					</Typography>
					<Box sx={{ marginTop: "50px" }}>
						<Button variant="contained" sx={{ marginRight: "10px" }}>
							Find Work
						</Button>
						<Button variant="outlined">Find Talent</Button>
					</Box>
					<Box sx={{ marginTop: "50px" }}>
						<Typography>Trusted by</Typography>
						<Box
							sx={{ marginTop: "10px", display: "flex", alignItems: "center" }}
						>
							<img
								src={MicrosoftIcon}
								alt="Work Doodle"
								style={{ width: "auto", height: "35px", marginRight: "20px" }}
							/>
							<img
								src={GodaddyIcon}
								alt="Work Doodle"
								style={{ width: "auto", height: "25px" }}
							/>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={5}>
					<img
						src={WorkDoodle}
						alt="Work Doodle"
						style={{ width: "100%", height: "300px", borderRadius: "50%" }}
					/>
				</Grid>
			</Grid>
		</Container>
	);
}
