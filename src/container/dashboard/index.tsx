import React, { useMemo, useState } from "react";

// components
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

// styles
import { Container } from "./styles";

// utils
import listOfMonths from "../../utils/months";

// repositories
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";

// inrerfaces
import { ITransactionsContainer } from "../transactions/interface";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export const DashboardContainer = ({
	type: movimentType,
}: ITransactionsContainer) => {
	// states
	const [monthSelected, setMonthSelected] = useState<number>(
		new Date().getMonth(),
	);
	const [yearSelected, setYearSelected] = useState<number>(
		new Date().getFullYear(),
	);

	// dropdownoptions
	const years = useMemo(() => {
		const uniqueYears: number[] = [];
		const reducer = [expenses, gains].reduce((current, actual) => [
			...current,
			...actual,
		]);

		reducer.forEach((item) => {
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
	}, []);

	const months = useMemo(() => {
		return listOfMonths.map((month, index) => {
			return {
				value: index + 1,
				label: month,
			};
		});
	}, []);
	return (
		<Container>
			<ContentHeader titleConfig={{ title: "Dashboard", lineColor: "#F7931B" }}>
				<SelectInput
					options={months}
					onChange={(event) => setMonthSelected(Number(event.target.value))}
				/>
				<SelectInput
					options={years}
					onChange={(event) => setYearSelected(Number(event.target.value))}
				/>
			</ContentHeader>
		</Container>
	);
};
