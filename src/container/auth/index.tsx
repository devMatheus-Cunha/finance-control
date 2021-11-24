import React from "react";

// images
import logoImg from "../../assets/img/logo.svg";

// styles
import {
	Container, Form, FormTitle, Logo,
} from "./styles";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export const Auth: React.FC = () => {
	return (
		<Container>
			<Logo>
				<img src={logoImg} alt="Finance Control" />
				<h2>Finance Control</h2>
			</Logo>
			<Form>
				<FormTitle>Entrar</FormTitle>
				<input type="text" />
				<input type="text" />

				<button type="submit">Acessar</button>
			</Form>
		</Container>
	);
};
