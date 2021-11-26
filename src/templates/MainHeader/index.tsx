import React, { useCallback, useMemo, useState } from "react";

// hooks
import { useTheme } from "../../hooks/useTheme";

// utils
import emojis from "../../utils/emojis";

// styles
import {
	Container, Profile, UserName, Welcome, Toggle,
} from "./styles";

const MainHeader = () => {
	// hooks
	const { theme, toggleTheme } = useTheme();

	// state
	const [darkTheme, setDarkTheme] = useState<boolean>(
		() => theme.title === "dark",
	);

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
				labeLeft="Light"
				labelRight="Dark"
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
