import React from "react";

// components
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

// styles
import { Container } from "./styles";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export const TransactionsContainer: React.FC = () => {
	const options = [
		{
			value: "Matheus",
			label: "Matheus",
		},
	];
	return (
		<Container>
			<ContentHeader title="Lista" lineColor="#4E41F0">
				<SelectInput options={options} />
				<SelectInput options={options} />
				<HistoryFinanceCard />
			</ContentHeader>
		</Container>
	);
};
