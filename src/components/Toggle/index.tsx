import React from "react";

// hooks
import { useTheme } from "../../hooks/useTheme";

// styles
import { Container, ToggleLabel, ToggleSelector } from "./styles";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
const Toggle = () => {
	const { toggleTheme } = useTheme();
	return (
		<Container>
			<ToggleLabel>Dark</ToggleLabel>
			<ToggleSelector
				uncheckedIcon={false}
				checkedIcon={false}
				checked={false}
				onChange={() => toggleTheme()}
			/>
			<ToggleLabel>Light</ToggleLabel>
		</Container>
	);
};

export default Toggle;
