import React from "react";

// container
import { TransactionsContainer } from "../../container/transactions";

// interface
interface IRouteParams {
  match: {
    params: {
      type: string;
    };
  };
}
// -------------------------------------------------
// Export Function
// -------------------------------------------------
const Transactions = ({ match }: IRouteParams) => {
	// get params
	const { type } = match.params;

	return <TransactionsContainer type={type} />;
};

export default Transactions;
