import React, { useMemo, useState } from "react";

// components
import ContentHeader from "../../components/ContentHeader";
import WalletBox from "../../components/WalletBox";
import SelectInput from "../../components/SelectInput";
import MessageBox from "../../components/MessageBox";
import PieChartComponent from "../../components/PieChart";
import HistoryBox from "../../components/HistoryBox";

// utils
import listOfMonths from "../../utils/months";

// repositories
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";

// interfaces
import { ITransactionsContainer } from "../transactions/interface";

// images
import emojiHappyImg from "../../assets/img/emoji-happy.svg";
import emojiSadImg from "../../assets/img/emoji-sad.svg";
import emojiGrinningImg from "../../assets/img/grinning.svg";

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

	const totalExpenses = useMemo(() => {
		let total = 0;

		expenses.forEach((item) => {
			const date = new Date(item.date);
			const year = date.getFullYear();
			const month = date.getMonth() + 1;

			if (month === monthSelected && year === yearSelected) {
				try {
					total += Number(item.amount);
				} catch {
					throw new Error("Invalid Amout");
				}
			}
		});

		return total;
	}, [monthSelected, yearSelected]);

	const totalGains = useMemo(() => {
		let total = 0;

		gains.forEach((item) => {
			const date = new Date(item.date);
			const year = date.getFullYear();
			const month = date.getMonth() + 1;

			if (month === monthSelected && year === yearSelected) {
				try {
					total += Number(item.amount);
				} catch {
					throw new Error("Invalid Amout");
				}
			}
		});

		return total;
	}, [monthSelected, yearSelected]);

	const totalBalance = useMemo(() => {
		return totalGains - totalExpenses;
	}, [totalExpenses, totalGains]);

	const message = useMemo(() => {
		if (totalBalance < 0) {
			return {
				title: "Que triste!",
				description: "Neste mês, você gastou mais do que deveria.",
				icon: emojiSadImg,
				footerText:
          "Verifique seus gastos e tente cortar algumas coisas desnecessárias",
			};
		}
		if (totalBalance > 0) {
			return {
				title: "Muito bem!",
				description: "Sua carteira está positiva!",
				icon: emojiHappyImg,
				footerText: "Continue assim. Considere investir o seu saldo.",
			};
		}
		return {
			title: "Ufaaa!",
			description: "Neste mês, você gastou a mesma coisa que ganhou.",
			icon: emojiGrinningImg,
			footerText: "Tenha cuidado. No proximo mês tente poupar seu dinheiro",
		};
	}, [totalBalance]);

	const relationExpensesVersusGains = useMemo(() => {
		const total = totalGains + totalExpenses;

		const percentGains = (totalGains / total) * 100;
		const percentExpenses = (totalExpenses / total) * 100;

		const data = [
			{
				name: "Entradas",
				totalValue: totalGains,
				color: "#F7931B",
				percent: Number(percentGains.toFixed(1)),
			},
			{
				name: "Saídas",
				totalValue: totalExpenses,
				color: "#E44C4E",
				percent: Number(percentExpenses.toFixed(1)),
			},
		];
		return data;
	}, [totalExpenses, totalGains]);

	const historyData = useMemo(() => {
		return listOfMonths
			.map((_, month) => {
				let amountEntry = 0;
				gains.forEach((gain) => {
					const date = new Date(gain.date);
					const gainMonth = date.getMonth();
					const gainYear = date.getFullYear();

					if (gainMonth === month && gainYear === yearSelected) {
						try {
							amountEntry += Number(gain.amount);
						} catch {
							throw new Error(
								"amountEntry is invalid. amountEntry must be valid number",
							);
						}
					}
				});

				let amountOutput = 0;
				expenses.forEach((expenses) => {
					const date = new Date(expenses.date);
					const expensesMonth = date.getMonth();
					const expensesYear = date.getFullYear();

					if (expensesMonth === month && expensesYear === yearSelected) {
						try {
							amountOutput += Number(expenses.amount);
						} catch {
							throw new Error(
								"amountOutput is invalid. amountOutput must be valid number",
							);
						}
					}
				});

				return {
					monthNumber: month,
					month: listOfMonths[month].substr(0, 3),
					amountEntry: Number(amountEntry),
					amountOutput: Number(amountOutput),
				};
			})
			.filter((item) => {
				const currentMonth = new Date().getMonth();
				const currentYear = new Date().getFullYear();

				return (
					(yearSelected === currentYear && item.monthNumber <= currentMonth)
          || yearSelected < currentYear
				);
			});
	}, [yearSelected]);

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
					amount={totalBalance}
					icon="dolar"
					footerLabel="atualizado com base nas entradas e saídas"
				/>
				<WalletBox
					title="entradas"
					amount={totalGains}
					color="#F7931B"
					icon="arrowUp"
					footerLabel="última movimentação em 18/07/2020 às 11h40"
				/>
				<WalletBox
					color="#E44C4E"
					amount={totalExpenses}
					title="saídas"
					icon="arrowDown"
					footerLabel="última movimentação em 18/07/2020 às 11h40"
				/>
				<MessageBox
					title={message.title}
					description={message.description}
					icon={message.icon}
					footerText={message.footerText}
				/>
				<PieChartComponent data={relationExpensesVersusGains} />
				<HistoryBox
					data={historyData}
					lineColorAmoutEntry="#F7931B"
					lineColorAmoutOutput="#E44C4E"
				/>
			</Content>
		</Container>
	);
};
