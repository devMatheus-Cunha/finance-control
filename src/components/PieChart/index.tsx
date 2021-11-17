import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

// styles
import {
	Container,
	LegendContainer,
	SideLeft,
	SideRight,
	Legend,
} from "./styles";

const PieChartComponent = ({ data } : any) => {
	return (
		<Container>
			<SideLeft>
				<h2>Relação</h2>
				<LegendContainer>
					{
						data.map((indicator: any) => (
							<>
								<Legend key={indicator.name} color={indicator.color}>
									<div>
										{indicator.percent}
										%
									</div>
									<span>{indicator.name}</span>
								</Legend>
							</>
						))
					}
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
	);
};

export default PieChartComponent;
