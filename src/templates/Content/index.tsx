import React, { ReactNode } from "react";

// styles
import { Container } from "./styles";

type ContentProps = {
	children: ReactNode
}

const Content = ({ children }: ContentProps) => {
	return (
		<Container>{children}</Container>
	);
};

export default Content;
