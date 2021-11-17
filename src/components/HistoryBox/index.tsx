import React from "react";
import {
	ResponsiveContainer,
	LineChart,
	CartesianGrid,
	XAxis,
	Tooltip,
	Line,
} from "recharts";

// styles
import { Container } from "./styles";

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
			<h2>Histórico de saldo</h2>
			<ResponsiveContainer>
				<LineChart data={data}>
					<CartesianGrid strokeDasharray="3 3" stroke="#cccc" />
					<XAxis dataKey="month" stroke="#cccc" />
					<Tooltip />
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
		</Container>
	);
};

export default HistoryBox;
