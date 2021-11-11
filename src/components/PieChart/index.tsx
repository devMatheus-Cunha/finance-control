import React from "react";
import {
	PieChart, Pie, ResponsiveContainer,
} from "recharts";

// styles
import {
	Container, LegendContainer, SideLeft, SideRight, Legend,
} from "./styles";

const PieChartComponent = () => {
	return (
		<Container>
			<SideLeft>
				<h2>Relação</h2>
				<LegendContainer>
					<Legend color="#F7931B">
						<div>5%</div>
						<span>Entradas</span>
					</Legend>
					<Legend color="#E44C4E">
						<div>95%</div>
						<span>Saídas</span>
					</Legend>
				</LegendContainer>
			</SideLeft>
			<SideRight>
				<ResponsiveContainer width="100%" height="100%">
					<PieChart width={400} height={400}>
						<Pie
							data={[]}
							labelLine={false}
							dataKey="percent"
							cx="50%"
							cy="50%"
							outerRadius={80}
							fill="#8884d8"
						>
							oi
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</SideRight>
		</Container>
	)
};

export default PieChartComponent;
