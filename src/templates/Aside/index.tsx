import React from "react";

// icons
import {
	MdDashboard,
	MdArrowDownward,
	MdArrowUpward,
	MdExitToApp,
} from "react-icons/md";

// hooks
import { useAuth } from "../../hooks/useAuth";

// images
import logoImg from "../../assets/img/logo.svg";

// styles
import {
	Container,
	Header,
	LogoImg,
	MenuContainer,
	MenuItemLink,
	Title,
	MenuItemButton,
} from "./styles";

const Aside = () => {
	// hooks
	const { signOut } = useAuth()

	return (
		<Container>
			<Header>
				<LogoImg src={logoImg} alt="Logo Finance Control" />
				<Title>Finance Control</Title>
			</Header>
			<MenuContainer>
				<MenuItemLink href="/dashboard">
					<MdDashboard />
					Dashboard
				</MenuItemLink>

				<MenuItemLink href="#">Novo registro</MenuItemLink>

				<MenuItemLink href="/transactions/entry-balance">
					<MdArrowUpward />
					Entradas
				</MenuItemLink>

				<MenuItemLink href="/transactions/exit-balance">
					<MdArrowDownward />
					Saídas
				</MenuItemLink>

				<MenuItemButton type="submit" onClick={() => signOut()}>
					<MdExitToApp />
					Sair
				</MenuItemButton>
			</MenuContainer>
		</Container>
	);
};

export default Aside;
