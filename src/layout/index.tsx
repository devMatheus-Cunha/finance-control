import React, { ReactNode } from "react";

// template
import Aside from "../templates/Aside";
import Content from "../templates/Content";
import MainHeader from "../templates/MainHeader";

// styles
import { Grid } from "./styles";

// interfaces
interface ILayout {
  children : ReactNode
}
// -------------------------------------------------
// Export Function
// -------------------------------------------------
const Layout = ({ children }: ILayout) => {
	return (
		<Grid>
			<MainHeader />
			<Aside />
			<Content>
				{children}
			</Content>
		</Grid>
	);
}

export default Layout;
