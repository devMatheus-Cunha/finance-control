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

// interface
import { IData, ITransactionsContainer } from "./interface";

// styles
import {
	Container, Content, Filters, Button,
} from "./styles";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export const TransactionsContainer = ({ type: movimentType }: ITransactionsContainer) => {
	// states
	const [data, setData] = useState<IData[]>([]);
	const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth());
	const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
	const [frequencyFilterSelected, setFrequencyFilterSelected] = useState([
		"recorrente",
		"eventual",
	]);

	// memo
	const titleValidation = useMemo(() => {
		return movimentType === "entry-balance"
			? {
				title: "Entradas",
				lineColor: "#4E41F0",
			}
			: {
				title: "Saídas",
				lineColor: "#E44C4E",
			};
	}, [movimentType]);

	const typePageData = useMemo(() => {
		return movimentType === "entry-balance" ? gains : expenses;
	}, [movimentType]);

	const listData = useMemo(() => {
		const formatedDateAndYear = typePageData.filter((item) => {
			const date = new Date(item.date);
			const month = date.getMonth() + 1;
			const year = date.getFullYear();

			return (
				month === monthSelected
        && year === yearSelected
        && frequencyFilterSelected.includes(item.frequency)
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
	}, [monthSelected, frequencyFilterSelected, typePageData, yearSelected]);

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
		const alreadySelected = frequencyFilterSelected.findIndex(
			(item) => item === frequency,
		);

		if (alreadySelected >= 0) {
			const filtered = frequencyFilterSelected.filter((item) => item !== frequency);
			setFrequencyFilterSelected(filtered);
		} else {
			setFrequencyFilterSelected((prev) => [...prev, frequency]);
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
					onChange={(event) => setMonthSelected(Number(event.target.value))}
				/>
				<SelectInput
					options={years}
					onChange={(event) => setYearSelected(Number(event.target.value))}
				/>
			</ContentHeader>
			<Filters>
				<Button
					type="button"
					recurrent
					onClick={() => handleFrenquencyClick("recorrente")}
					styleSelected={!!frequencyFilterSelected.includes("recorrente")}
				>
					Recorrente
				</Button>
				<Button
					type="button"
					eventual
					styleSelected={!!frequencyFilterSelected.includes("eventual")}
					onClick={() => handleFrenquencyClick("eventual")}
				>
					Event
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
