import React from "react";

// styles
import { Container, ToggleLabel, ToggleSelector } from "./styles";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
const Toggle = () => (
	<Container>
		<ToggleLabel>
			Light
		</ToggleLabel>
		<ToggleSelector
			uncheckedIcon={false}
			checkedIcon={false}
			checked={false}
			onChange={() => {}}
		/>
		<ToggleLabel>
			Dark
		</ToggleLabel>
	</Container>
);

export default Toggle;
