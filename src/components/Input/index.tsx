import React, { InputHTMLAttributes } from "react";

// styles
import { Container } from "./styles";

// types
type IInputProps = InputHTMLAttributes<HTMLInputElement>

const Input = ({ ...props } : IInputProps) => {
	return (
		<Container {...props} />
	)
}

export default Input;
