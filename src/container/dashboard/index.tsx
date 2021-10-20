import React from "react";

// temmplates
import Aside from "../../templates/Aside";
import MainHeader from "../../templates/MainHeader";
import Content from "../../templates/Content";

// components
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

// styles
import { Container } from "./styles";
import { Grid } from "../shared/styles";

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
