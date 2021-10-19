import React from "react";

// temmplates
import Aside from "../../templates/Aside";
import MainHeader from "../../templates/MainHeader";
import Content from "../../templates/Content";

// components
import ContentHeader from "../../components/ContentHeader";

// styles
import { Container, Grid } from "./styles";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export const DashboardContainer: React.FC = () => {
	return (
		<Container>
			<Grid>
				<MainHeader />
				<Aside />
				<Content>
					<ContentHeader title="Dashboard" />
				</Content>
			</Grid>
		</Container>
	);
};
