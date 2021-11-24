import React, { ButtonHTMLAttributes } from "react";

// styles
import { Container } from "./styles";

// types
type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ ...props } : IButtonProps) => {
	return (
		<Container {...props}>
			{props.children}
		</Container>
	)
}

export default Button;
