import React, { useState } from "react";

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

	// states
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	return (
		<Container>
			<Logo>
				<img src={logoImg} alt="Finance Control" />
				<h2>Finance Control</h2>
			</Logo>
			<Form onSubmit={() => signIn(email, password)}>
				<FormTitle>Entrar</FormTitle>
				<Input
					type="email"
					required
					placeholder="e-mail"
					onChange={(event) => setEmail(event.target.value)}
				/>
				<Input
					type="password"
					required
					placeholder="senha"
					onChange={(event) => setPassword(event.target.value)}
				/>

				<Button type="submit">Acessar</Button>
			</Form>
		</Container>
	);
};
