import React, { useEffect, useMemo, useState } from "react";
import { uuid } from "uuidv4";

// components
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

// repositories
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";

// utils
import { formatCurrency, formatDate } from "../../utils/functions";
import listOfMonths from "../../utils/months";

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
	const [monthSelected, setMonthSelected] = useState("10");
	const [yearSelected, setYearSelected] = useState("2021");
	const [selectedFrequency, setSelectedFrequency] = useState([
		"recorrente",
		"eventual",
	]);

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

	const typePageData = useMemo(() => {
		return type === "entry-balance" ? gains : expenses;
	}, [type]);

	const listData = useMemo(() => {
		const formatedDateAndYear = typePageData.filter((item) => {
			const date = new Date(item.date);
			const month = String(date.getMonth() + 1);
			const year = String(date.getFullYear());

			return (
				month === monthSelected
        && year === yearSelected
        && selectedFrequency.includes(item.frequency)
			);
		});

		const formatedMap = formatedDateAndYear.map((data) => {
			return {
				id: uuid(),
				title: data.description,
				amountFormated: formatCurrency(Number(data.amount)),
				frequency: data.frequency,
				date: formatDate(data.date),
				tagColor: data.frequency === "recorrente" ? "#4E41F0" : "#E44C4E",
			};
		});
		return formatedMap;
	}, [monthSelected, selectedFrequency, typePageData, yearSelected]);

	// dropdownoptions
	const years = useMemo(() => {
		const uniqueYears: number[] = [];

		typePageData.forEach((item) => {
			const date = new Date(item.date);
			const year = date.getFullYear();

			if (!uniqueYears.includes(year)) {
				uniqueYears.push(year);
			}
		});

		return uniqueYears.map((year) => {
			return {
				value: year,
				label: year,
			};
		});
	}, [typePageData]);

	const months = useMemo(() => {
		return listOfMonths.map((month, index) => {
			return {
				value: index + 1,
				label: month,
			};
		});
	}, []);

	const handleFrenquencyClick = (frequency: string) => {
		const alreadySelected = selectedFrequency.findIndex(
			(item) => item === frequency,
		);

		if (alreadySelected >= 0) {
			const filtered = selectedFrequency.filter((item) => item !== frequency);
			setSelectedFrequency(filtered);
		} else {
			setSelectedFrequency((prev) => [...prev, frequency]);
		}
	};

	useEffect(() => {
		setData(listData);
	}, [listData]);

	return (
		<Container>
			<ContentHeader titleConfig={titleValidation}>
				<SelectInput
					options={months}
					onChange={(event) => setMonthSelected(event.target.value)}
				/>
				<SelectInput
					options={years}
					onChange={(event) => setYearSelected(event.target.value)}
				/>
			</ContentHeader>
			<Filters>
				<Button
					type="button"
					recurrent
					onClick={() => handleFrenquencyClick("recorrente")}
					styleSelected={!!selectedFrequency.includes("recorrente")}
				>
					Recorrentes
				</Button>
				<Button
					type="button"
					eventual
					styleSelected={!!selectedFrequency.includes("eventual")}
					onClick={() => handleFrenquencyClick("eventual")}
				>
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
