import React, { useState } from "react";

// icons
import {
	MdDashboard,
	MdArrowDownward,
	MdArrowUpward,
	MdExitToApp,
	MdClose,
	MdMenu,
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
	ToggleMenu,
} from "./styles";

const Aside = () => {
	// hooks
	const { signOut } = useAuth();

	// states
	const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);

	// functions
	const handleToggleMenu = () => {
		setToggleMenuIsOpened(!toggleMenuIsOpened);
	};

	return (
		<Container menuIsOpen={toggleMenuIsOpened}>
			<Header>
				<ToggleMenu onClick={handleToggleMenu} type="button">
					{toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
				</ToggleMenu>

				<LogoImg src={logoImg} alt="Logo Finance Control" />
				<Title>Finance Control</Title>
			</Header>
			<MenuContainer>
				<MenuItemLink href="/">
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
