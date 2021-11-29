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

// components
import Toggle from "../../components/Toggle";

// hooks
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";

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
	ThemeToggleFooter,
} from "./styles";

const Aside = () => {
	// hooks
	const { signOut } = useAuth();
	const { toggleTheme, theme } = useTheme();

	// states
	const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
	const [darkTheme, setDarkTheme] = useState<boolean>(
		() => theme.title === "dark",
	);

	// functions
	const handleToggleMenu = () => {
		setToggleMenuIsOpened(!toggleMenuIsOpened);
	};

	const handleChangeTheme = () => {
		setDarkTheme(!darkTheme);
		toggleTheme()
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
			<ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
				<Toggle
					labeLeft="Light"
					labelRight="Dark"
					checked={darkTheme}
					onChange={handleChangeTheme}
				/>
			</ThemeToggleFooter>
		</Container>
	);
};

export default Aside;
