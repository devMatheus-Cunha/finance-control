import React from "react";

// icons
import {
	MdDashboard,
	MdArrowDownward,
	MdArrowUpward,
	MdExitToApp,
} from "react-icons/md";

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
} from "./styles";

const Aside: React.FC = () => {
	return (
		<Container>
			<Header>
				<LogoImg src={logoImg} alt="Logo Finance Control" />
				<Title>Finance Control</Title>
			</Header>
			<MenuContainer>

				<MenuItemLink href="#">
					<MdDashboard />
					Dashboard
				</MenuItemLink>

				<MenuItemLink href="#">

					Novo registro
				</MenuItemLink>

				<MenuItemLink href="#">
					<MdArrowUpward />
					Entradas
				</MenuItemLink>

				<MenuItemLink href="#">
					<MdArrowDownward />
					Saídas
				</MenuItemLink>

				<MenuItemLink href="#">
					<MdExitToApp />
					Sair
				</MenuItemLink>
			</MenuContainer>
		</Container>
	);
};

export default Aside;
