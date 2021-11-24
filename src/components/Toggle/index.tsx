// styles
import { Container, ToggleLabel, ToggleSelector } from "./styles";

// interface
interface IToglleProps {
  labeLeft: string;
  labelRight: string;
  checked: boolean;
  onChange: () => void;
}

// -------------------------------------------------
// Export Function
// -------------------------------------------------
const Toggle = ({
	labeLeft, labelRight, checked, onChange,
}: IToglleProps) => {
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
