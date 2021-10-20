import React from "react";

// components
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

// styles
import { Container, Content } from "./styles";

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
			<ContentHeader title="Saída" lineColor="#E44C4E">
				<SelectInput options={options} />
				<SelectInput options={options} />
			</ContentHeader>
			<Content>
				<HistoryFinanceCard
					cardColor="#313862"
					tagColor="#E44C4E"
					title="Conta de luz"
					subtitle="17/02/2021"
					amount="123"
				/>
				<HistoryFinanceCard
					cardColor="#313862"
					tagColor="#E44C4E"
					title="Conta de luz"
					subtitle="17/02/2021"
					amount="123"
				/>
				<HistoryFinanceCard
					cardColor="#313862"
					tagColor="#E44C4E"
					title="Conta de luz"
					subtitle="17/02/2021"
					amount="123"
				/>
				<HistoryFinanceCard
					cardColor="#313862"
					tagColor="#E44C4E"
					title="Conta de luz"
					subtitle="17/02/2021"
					amount="123"
				/>
				<HistoryFinanceCard
					cardColor="#313862"
					tagColor="#E44C4E"
					title="Conta de luz"
					subtitle="17/02/2021"
					amount="123"
				/>
				<HistoryFinanceCard
					cardColor="#313862"
					tagColor="#E44C4E"
					title="Conta de luz"
					subtitle="17/02/2021"
					amount="123"
				/>
				<HistoryFinanceCard
					cardColor="#313862"
					tagColor="#E44C4E"
					title="Conta de luz"
					subtitle="17/02/2021"
					amount="123"
				/>
				<HistoryFinanceCard
					cardColor="#313862"
					tagColor="#E44C4E"
					title="Conta de luz"
					subtitle="17/02/2021"
					amount="123"
				/>
				<HistoryFinanceCard
					cardColor="#313862"
					tagColor="#E44C4E"
					title="Conta de luz"
					subtitle="17/02/2021"
					amount="123"
				/>
				<HistoryFinanceCard
					cardColor="#313862"
					tagColor="#E44C4E"
					title="Conta de luz"
					subtitle="17/02/2021"
					amount="123"
				/>
			</Content>
		</Container>
	);
};
