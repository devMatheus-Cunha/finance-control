import React from "react";

// style
import { Container, Tag } from "./styles";

// interface
interface IHistoryFinanceCardProps {
  cardColor?: string;
  tagColor?: string;
  title?: string;
  subtitle?: string;
  amount?: string;
}

const HistoryFinanceCard = ({
	cardColor,
	tagColor,
	title,
	subtitle,
	amount,
}: IHistoryFinanceCardProps) => {
	return (
		<Container color={cardColor}>
			<Tag color={tagColor} />
			<div>
				<span>{title}</span>
				<small>{subtitle}</small>
			</div>
			<h3>{amount}</h3>
		</Container>
	)
};

export default HistoryFinanceCard;
