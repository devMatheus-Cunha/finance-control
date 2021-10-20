import React from "react";

// temmplates
import Aside from "../../templates/Aside";
import MainHeader from "../../templates/MainHeader";
import Content from "../../templates/Content";

// components
import ContentHeader from "../../components/ContentHeader";

// styles
import { Container, Grid } from "./styles";
import SelectInput from "../../components/SelectInput";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export const DashboardContainer: React.FC = () => {
	const options = [
		{
			value: "Matheus",
			label: "Matheus",
		},
	];
	return (
		<Container>
			<Grid>
				<MainHeader />
				<Aside />
				<Content>
					<ContentHeader title="Dashboard" lineColor="#F7931B">
						<SelectInput options={options} />
						<SelectInput options={options} />
					</ContentHeader>
				</Content>
			</Grid>
		</Container>
	);
};
