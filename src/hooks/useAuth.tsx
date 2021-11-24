import { useContext } from "react";

// context
import { AuthContext } from "../context/auth";
import { IAuthContext } from "../context/auth/interface";

// -------------------------------------------------
// Export Function
// -------------------------------------------------
export function useAuth(): IAuthContext {
	const context = useContext(AuthContext);

	return context;
}
