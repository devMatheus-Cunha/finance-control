import React, { createContext, useState } from "react";

// interface
import { IAuthContext, IAuthProvider } from "./interface";

// create context
export const AuthContext = createContext({} as IAuthContext);

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export const AuthProvider = ({ children }: IAuthProvider) => {
	// states
	const [logged, setLogged] = useState<boolean>(() => {
		const isLogged = localStorage.getItem("@finance-control:logged");

		return !!isLogged;
	});

	const signIn = (email: string, password: string) => {
		if (email === "matheus.cunha@seidor.com.br" && password === "Matheus123!") {
			localStorage.setItem("@finance-control:logged", "true");
			setLogged(true)
		} else {
			// eslint-disable-next-line no-alert
			alert("Senha ou E-mail inválidos")
		}
	};

	const signOut = () => {
		localStorage.removeItem("@finance-control:logged")
		setLogged(false)
	};

	return (
		<AuthContext.Provider value={{ logged, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};
