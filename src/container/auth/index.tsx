import React from "react";

// images
import logoImg from "../../assets/img/logo.svg";

// components
import Input from "../../components/Input";

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
			<Form onSubmit={() => null}>
				<FormTitle>Entrar</FormTitle>
				<Input type="email" required placeholder="e-mail" />
				<Input type="password" required placeholder="senha" />

				<button type="submit">Acessar</button>
			</Form>
		</Container>
	);
};
