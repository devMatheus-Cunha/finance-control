export const formatCurrency = (currency: number): string => {
	const currencyFormated = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format((currency || 0) as number);

	return currencyFormated;
};

export const formatDate = (date: string): string => {
	const dateFormated = new Date(date);
	const day = dateFormated.getDate() >= 9
    	? dateFormated.getDate() + 1
    	: `0${dateFormated.getDate() + 1}`;

	const month = dateFormated.getMonth() + 1 <= 9
    	? `0${dateFormated.getMonth() + 1}`
    	: dateFormated.getMonth() + 1;

	const year = dateFormated.getFullYear();

	return `${day}/${month}/${year}`;
};
