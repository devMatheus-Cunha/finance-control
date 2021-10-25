import React from "react";

// style
import { Container, Tag } from "./styles";

// interface
interface IHistoryFinanceCardProps {
  tagColor?: string;
  title?: string;
  subtitle?: string;
  amount?: number;
}

const HistoryFinanceCard = ({
	tagColor,
	title,
	subtitle,
	amount,
}: IHistoryFinanceCardProps) => {
	return (
		<Container>
			<Tag color={tagColor} />
			<div>
				<span>{title}</span>
				<small>{subtitle}</small>
			</div>
			<h3>
				{new Intl.NumberFormat("pt-BR", {
					style: "currency",
					currency: "BRL",
				}).format((amount?.toFixed(2) || 0) as number)}

			</h3>
		</Container>
	)
};

export default HistoryFinanceCard;
