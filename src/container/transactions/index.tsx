import React, { useEffect, useMemo, useState } from "react";
// components
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

// repositories
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";

// utils
import { formatCurrency, formatDate } from "../../utils/functions";

// styles
import {
	Container, Content, Filters, Button,
} from "./styles";

// interface
interface ITransactionsContainer {
  type: string;
}

interface IData {
	id: string
  title: string;
  amountFormated: string;
  frequency: string;
  date: string;
	tagColor: string
}

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export const TransactionsContainer = ({ type }: ITransactionsContainer) => {
	// states
	const [data, setData] = useState<IData[]>([]);
	// memo
	const titleValidation = useMemo(() => {
		return type === "entry-balance"
			? {
				title: "Entradas",
				lineColor: "#4E41F0",
			}
			: {
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

	const listData = useMemo(() => {
		const validationList = type === "entry-balance" ? gains : expenses;

		const formated = validationList.map((item) => {
			return {
				id: String(Math.random() * data.length),
				title: item.description,
				amountFormated: formatCurrency(Number(item.amount)),
				frequency: item.frequency,
				date: formatDate(item.date),
				tagColor: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E",
			};
		});
		return formated
	}, [data.length, type]);

	useEffect(() => {
		setData(listData);
	}, [listData]);

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
				{
					data.map((data) => (
						<>
							<HistoryFinanceCard
								key={data.id}
								tagColor={data.tagColor}
								title={data.title}
								subtitle={data.date}
								amount={data.amountFormated}
							/>
						</>
					))
				}
			</Content>
		</Container>
	);
};
