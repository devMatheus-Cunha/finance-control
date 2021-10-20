import React from "react";

import { Container } from "./styles";

// interface
interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  // onChange: () => void
}

const SelectInput = ({ options }: ISelectInputProps) => {
	return (
		<Container>
			<select name="" id="">
				{options.map((option) => (
					<>
						<option value={option.value}>{option.label}</option>
					</>
				))}
			</select>
		</Container>
	);
};

export default SelectInput;
