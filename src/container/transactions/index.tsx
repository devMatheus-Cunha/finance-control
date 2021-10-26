import React, { useMemo } from "react";
// components
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

// styles
import {
	Container, Content, Filters, Button,
} from "./styles";

// interface
interface ITransactionsContainer {
  type: string;
}

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export const TransactionsContainer = ({ type }: ITransactionsContainer) => {
	// hooks
	const titleValidation = useMemo(() => {
		return type === "entry-balance" ? {
			title: "Entradas",
			lineColor: "#4E41F0",
		} : {
			title: "Saídas",
			lineColor: "#E44C4E",
		};
	}, [type]);

	const months = [
		{
			value: 7,
			label: "Julho",
		},
		{
			value: 8,
			label: "Agosto",
		},
		{
			value: 9,
			label: "Setembro",
		},
	];

	const years = [
		{
			value: 2021,
			label: 2021,
		},
		{
			value: 2020,
			label: 2020,
		},
		{
			value: 2019,
			label: 2019,
		},
	];

	return (
		<Container>
			<ContentHeader titleConfig={titleValidation}>
				<SelectInput options={months} />
				<SelectInput options={years} />
			</ContentHeader>
			<Filters>
				<Button type="button" recurrent>
					Recorrentes
				</Button>
				<Button type="button" eventual>
					Eventuais
				</Button>
			</Filters>
			<Content>
				<HistoryFinanceCard
					tagColor="#E44C4E"
					title="Conta de luz"
					subtitle="17/02/2021"
					amount={103}
				/>
			</Content>
		</Container>
	);
};
