import React from "react";

// temmplates
import Aside from "../../templates/Aside";
import MainHeader from "../../templates/MainHeader";
import Content from "../../templates/Content";

// styles
import { Grid } from "./styles";

const DashboardContainer: React.FC = () => {
	return (
		<Grid>
			<MainHeader />
			<Aside />
			<Content />
		</Grid>
	);
}

export default DashboardContainer;
