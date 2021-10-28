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
  id: string;
  title: string;
  amountFormated: string;
  frequency: string;
  date: string;
  tagColor: string;
}

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export const TransactionsContainer = ({ type }: ITransactionsContainer) => {
	// states
	const [data, setData] = useState<IData[]>([]);
	const [monthSelected, setMonthSelected] = useState<string>(
		String(new Date().getMonth() + 1),
	);
	const [yearSelected, setYearSelected] = useState<string>(
		String(new Date().getFullYear()),
	);

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

	// dropdownoptions
	const months = [
		{
			value: 4,
			label: "Abril",
		},
		{
			value: 5,
			label: "Maio",
		},
		{
			value: 6,
			label: "Junho",
		},
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
		{
			value: 10,
			label: "Outubro",
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

		const formatedDateAndYear = validationList.filter((item) => {
			const date = new Date(item.date);
			const month = String(date.getMonth() + 1);
			const year = String(date.getFullYear());

			return month === monthSelected && year === yearSelected
		})

		const formatedMap = formatedDateAndYear.map((data) => {
			return {
				id: String(Math.random()),
				title: data.description,
				amountFormated: formatCurrency(Number(data.amount)),
				frequency: data.frequency,
				date: formatDate(data.date),
				tagColor: data.frequency === "recorrente" ? "#4E41F0" : "#E44C4E",
			}
		})

		return formatedMap
	}, [monthSelected, type, yearSelected]);

	useEffect(() => {
		setData(listData);
	}, [listData]);

	return (
		<Container>
			<ContentHeader titleConfig={titleValidation}>
				<SelectInput
					options={months}
					onChange={(event) => setMonthSelected(event.target.value)}
					defaultValue={monthSelected}
				/>
				<SelectInput
					options={years}
					onChange={(event) => setYearSelected(event.target.value)}
					defaultValue={yearSelected}
				/>
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
				{data.map((data) => (
					<>
						<HistoryFinanceCard
							key={data.id}
							tagColor={data.tagColor}
							title={data.title}
							subtitle={data.date}
							amount={data.amountFormated}
						/>
					</>
				))}
			</Content>
		</Container>
	);
};
