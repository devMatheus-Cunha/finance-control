import React from "react";

// styles
import { Container, TitleContainer, Controlers } from "./styles";

// types
type ContentHeaderProps = {
  title: string;
};

// -------------------------------------------------
// Export Function
// -------------------------------------------------
const ContentHeader = ({ title }: ContentHeaderProps) => {
	return (
		<Container>
			<TitleContainer><h2>{title}</h2></TitleContainer>
			<Controlers>
				<button type="button">Botão A</button>
				<button type="button">Botão b</button>
			</Controlers>
		</Container>
	);
};

export default ContentHeader;
