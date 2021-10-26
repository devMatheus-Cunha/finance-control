import React from "react";

// components
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

// styles
import { Container } from "./styles";

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
			<ContentHeader
				titleConfig={{ title: "Dashboard", lineColor: "#F7931B" }}
			>
				<SelectInput options={options} />
				<SelectInput options={options} />
			</ContentHeader>
		</Container>
	);
};
