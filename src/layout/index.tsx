import React, { ReactNode } from "react";

// template
import Aside from "../templates/Aside";
import Content from "../templates/Content";
import MainHeader from "../templates/MainHeader";

// styles
import { Grid } from "../container/shared/styles";

// interfaces
interface ILayout {
  children : ReactNode
}

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
