import React, { useMemo } from "react";

// components
import Toggle from "../../components/Toggle";

// utils
import emojis from "../../utils/emojis";

// styles
import {
	Container, Profile, UserName, Welcome,
} from "./styles";

const MainHeader: React.FC = () => {
	const emoji = useMemo(() => {
		const indice = Math.floor(Math.random() * emojis.length);
		return emojis[indice];
	}, []);

	return (
		<Container>
			<Toggle />
			<Profile>
				<Welcome>
					Olá,
					{" "}
					{emoji}
				</Welcome>
				<UserName> Matheus Cunha</UserName>
			</Profile>
		</Container>
	);
};

export default MainHeader;
