import { ReactNode } from "react";

export interface IAuthContext {
	logged: boolean;
	signIn(email: string, password: string): void
	signOut(): void
}

export interface IAuthProvider {
	children: ReactNode
}
