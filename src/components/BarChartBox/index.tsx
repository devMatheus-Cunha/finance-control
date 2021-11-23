import React from "react";
import {
	ResponsiveContainer, BarChart, Bar, Cell, Tooltip,
} from "recharts";

// utils
import { formatCurrency } from "../../utils/functions";

// styles
import {
	Container, LegendContainer, SideLeft, SideRight, Legend,
} from "./styles";

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
				<LegendContainer>
					{
						data.map((indicator) => (
							<Legend key={indicator.name} color={indicator.color}>
								<div>
									{indicator.percent}
									%
								</div>
								<span>{indicator.name}</span>
							</Legend>
						))
					}
				</LegendContainer>
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
					</BarChart>
				</ResponsiveContainer>
			</SideRight>
		</Container>
	);
};

export default BarChartBox;
