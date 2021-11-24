import React from "react";

import { Container } from "./styles";

// interface
interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
}

const SelectInput = ({ options, onChange }: ISelectInputProps) => (
	<Container>
		<select onChange={onChange} defaultValue="10">
			{options.map((option) => (
				<>
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				</>
			))}
		</select>
	</Container>
);

export default SelectInput;
