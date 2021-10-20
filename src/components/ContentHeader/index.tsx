import React, { ReactNode } from "react";
// styles
import { Container, TitleContainer, Controlers } from "./styles";

// interface
interface IContentHeaderProps {
  title: string;
  lineColor?: string;
  children?: ReactNode;
}

// -------------------------------------------------
// Export Function
// -------------------------------------------------
const ContentHeader = ({
	title,
	children,
	lineColor,
}: IContentHeaderProps) => {
	return (
		<Container>
			<TitleContainer lineColor={lineColor}>
				<h2>{title}</h2>
			</TitleContainer>
			<Controlers>{children}</Controlers>
		</Container>
	);
};

export default ContentHeader;
