import React from "react";
import {
	ResponsiveContainer, BarChart, Bar, Cell, Tooltip,
} from "recharts";

// utils
import { formatCurrency } from "../../utils/functions";

// styles
import { Container, SideLeft, SideRight } from "./styles";

interface IBarChartProps {
  title: string;
  data: {
    amout: number;
    color: string;
    name: string;
    percent: number;
  }[];
}

const BarChartBox = ({ title, data }: IBarChartProps) => {
	return (
		<Container>
			<SideLeft>
				<h2>{title}</h2>
			</SideLeft>

			<SideRight>
				<ResponsiveContainer>
					<BarChart data={data}>
						<Bar dataKey="amout">
							{data.map((indicator) => (
								<Cell
									key={indicator.name}
									fill={indicator.color}
								/>
							))}
						</Bar>
						<Tooltip
							formatter={(value: string) => formatCurrency(Number(value))}
						/>
					</BarChart>
				</ResponsiveContainer>
			</SideRight>
		</Container>
	);
};

export default BarChartBox;
