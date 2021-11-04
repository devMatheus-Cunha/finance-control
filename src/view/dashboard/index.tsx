import React from "react";

// container
import { DashboardContainer } from "../../container/dashboard";

// interface
interface IRouteParams {
  match: {
    params: {
      type: string;
    };
  };
}

const dashboard = ({ match }: IRouteParams) => {
	// get params
	const { type } = match.params;
	return <DashboardContainer type={type} />;
};

export default dashboard;
