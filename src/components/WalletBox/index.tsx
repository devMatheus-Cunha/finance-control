import React from "react";
import CountUp from "react-countup";

// styles
import { Container } from "./styles";

// icons
import DolarImg from "../../assets/img/dolar.svg";
import ArrowUpImg from "../../assets/img/arrow-up.svg";
import ArrowDownImg from "../../assets/img/arrow-down.svg";

// interface
interface IWalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon: "dolar" | "arrowUp" | "arrowDown";
  color: string;
}

const WalletBox = ({
	title,
	amount,
	footerLabel,
	icon,
	color,
}: IWalletBoxProps) => {
	function chakeIcon() {
		switch (icon) {
		case "dolar":
			return DolarImg;
		case "arrowUp":
			return ArrowUpImg;
		case "arrowDown":
			return ArrowDownImg;
		default:
			return undefined;
		}
	}
	return (
		<Container color={color}>
			<span>{title}</span>
			<h1>
				<CountUp
					start={0}
					end={amount}
					prefix="R$ "
					separator="."
					duration={1.5}
					decimal=","
					decimals={2}
				/>
			</h1>
			<small>{footerLabel}</small>
			<img src={chakeIcon()} alt={title} />
		</Container>
	);
};

export default WalletBox;
