import React from "react";
import {
	ResponsiveContainer,
	LineChart,
	CartesianGrid,
	XAxis,
	Tooltip,
	Line,
} from "recharts";

// utils
import { formatCurrency } from "../../utils/functions";

// styles
import {
	Container, ChartContainer, Header, LegendContainer, Legend,
} from "./styles";

interface IHistoryBox {
  data: {
    month: string;
    amountEntry: number;
    amountOutput: number;
  }[];
  lineColorAmoutEntry: string;
  lineColorAmoutOutput: string;
}

const HistoryBox = ({
	data,
	lineColorAmoutEntry,
	lineColorAmoutOutput,
}: IHistoryBox) => {
	return (
		<Container>
			<Header>
				<h2>Histórico de saldo</h2>
				<LegendContainer>
					<Legend color="#F7931B">
						<div />
						<span>Entradas</span>
					</Legend>
					<Legend color="#E44C4E">
						<div />
						<span>Saídas</span>
					</Legend>
				</LegendContainer>
			</Header>
			<ChartContainer>
				<ResponsiveContainer>
					<LineChart
						data={data}
						margin={{
							top: 5,
							right: 5,
							left: 5,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" stroke="#434d85" />
						<XAxis dataKey="month" stroke="#cccc" />
						<Tooltip formatter={(value: string) => formatCurrency(Number(value))} />
						<Line
							type="monotone"
							dataKey="amountEntry"
							name="Entradas"
							stroke={lineColorAmoutEntry}
							strokeWidth={5}
							dot={{ r: 5 }}
							activeDot={{ r: 8 }}
						/>
						<Line
							type="monotone"
							dataKey="amountOutput"
							name="Saídas"
							stroke={lineColorAmoutOutput}
							strokeWidth={5}
							dot={{ r: 5 }}
							activeDot={{ r: 8 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</ChartContainer>
		</Container>
	);
};

export default HistoryBox;
