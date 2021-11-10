import React from "react";

// styles
import { Container } from "./styles";

// interface
interface IMessageBoxProps {
  title: string;
  icon: string;
  description: string;
  footerText: string;
}

const MessageBox = ({
	title,
	icon,
	description,
	footerText,

}: IMessageBoxProps) => {
	return (
		<Container>
			<header>
				<h1>
					{title}
					{" "}
					<img src={icon} alt={title} />
					{" "}
				</h1>
				<p>{description}</p>
			</header>

			<footer>{footerText}</footer>
		</Container>
	);
};

export default MessageBox;
