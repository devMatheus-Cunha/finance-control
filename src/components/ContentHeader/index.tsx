import React, { ReactNode } from "react";
// styles
import { Container, TitleContainer, Controlers } from "./styles";

// interface
interface IContentHeaderProps {
  titleConfig: {
    title: string;
    lineColor: string;
  };
  children?: ReactNode;
}

// -------------------------------------------------
// Export Function
// -------------------------------------------------
const ContentHeader = ({ titleConfig, children }: IContentHeaderProps) => (
	<Container>
		<TitleContainer lineColor={titleConfig.lineColor}>
			<h2>{titleConfig.title}</h2>
		</TitleContainer>
		<Controlers>{children}</Controlers>
	</Container>
);

export default ContentHeader;
