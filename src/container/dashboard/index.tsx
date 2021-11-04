import React, { useMemo, useState } from "react";

// components
import ContentHeader from "../../components/ContentHeader";
import WalletBox from "../../components/WalletBox";
import SelectInput from "../../components/SelectInput";

// utils
import listOfMonths from "../../utils/months";

// repositories
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";

// interfaces
import { ITransactionsContainer } from "../transactions/interface";

// styles
import { Container, Content } from "./styles";

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
			<Content>
				<WalletBox
					title="saldo"
					color="#4E41F0"
					amount={4000}
					icon="dolar"
					footerLabel="atualizado com base nas entradas e saídas"
				/>
				<WalletBox
					title="entradas"
					amount={5000}
					color="#F7931B"
					icon="arrowUp"
					footerLabel="última movimentação em 18/07/2020 às 11h40"
				/>
				<WalletBox
					color="#E44C4E"
					amount={1000}
					title="saídas"
					icon="arrowDown"
					footerLabel="última movimentação em 18/07/2020 às 11h40"
				/>
			</Content>
		</Container>
	);
};
