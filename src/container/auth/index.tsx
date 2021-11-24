import React from "react";

// hooks
import { useAuth } from "../../hooks/useAuth";

// images
import logoImg from "../../assets/img/logo.svg";

// components
import Input from "../../components/Input";
import Button from "../../components/Button";

// styles
import {
	Container, Form, FormTitle, Logo,
} from "./styles";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export const Auth = () => {
	// hooks
	const { signIn } = useAuth();
	
	// functions
	const handleSignIn = () => {};

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

				<Button type="submit">Acessar</Button>
			</Form>
		</Container>
	);
};
