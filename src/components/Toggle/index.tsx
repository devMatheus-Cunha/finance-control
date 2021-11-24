// styles
import { Container, ToggleLabel, ToggleSelector } from "./styles";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
const Toggle = ({
	labeLeft, labelRight, checked, onChange,
}: any) => {
	return (
		<Container>
			<ToggleLabel>{labeLeft}</ToggleLabel>
			<ToggleSelector
				uncheckedIcon={false}
				checkedIcon={false}
				checked={checked}
				onChange={onChange}
			/>
			<ToggleLabel>{labelRight}</ToggleLabel>
		</Container>
	);
};

export default Toggle;
