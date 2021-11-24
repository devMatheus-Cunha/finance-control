import React, { useCallback, useMemo, useState } from "react";

// components
import Toggle from "../../components/Toggle";

// hooks
import { useTheme } from "../../hooks/useTheme";

// utils
import emojis from "../../utils/emojis";

// styles
import {
	Container, Profile, UserName, Welcome,
} from "./styles";

const MainHeader: React.FC = () => {
	// hooks
	const { toggleTheme } = useTheme();

	// state
	const [darkTheme, setDarkTheme] = useState<boolean>(false);

	const emoji = useMemo(() => {
		const indice = Math.floor(Math.random() * emojis.length);
		return emojis[indice];
	}, []);

	// functions
	const handleChangeTheme = useCallback(() => {
		setDarkTheme(!darkTheme);
		toggleTheme();
	}, [darkTheme, toggleTheme]);

	return (
		<Container>
			<Toggle
				labeLeft="Dark"
				labelRight="Light"
				checked={darkTheme}
				onChange={handleChangeTheme}
			/>
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
