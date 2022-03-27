import { AMOUNT_COLUMN, CURRENCY_CODE_COLUMN, CURRENCY_RATE_COLUMN } from "../constants/constants";

type CurrencyRatesMap = {
	[index: string]: number
};

export const ConvertTextToJson = (data: string) => data.split('\n');

export const getCurrencyRatesHeaders = (items: string[]) => items[1].split('|');

export const convertToNumber = (value: string) => {
	return typeof value === 'string' ? Number(value.replace(/,/, '.')) : value;
}

export const getCurrencyData = (textData: string) => {

	const items = ConvertTextToJson(textData);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [ _info, headers, ...values] = items;
	let currencyRatesMap: CurrencyRatesMap = {};

	const currencyTableHeaders = headers.split('|');
	const currencyTableRows = values.filter(item => !!item).map(valueArr => valueArr.split('|'));
	currencyTableRows.forEach(row => {
		const amount = +row[AMOUNT_COLUMN];
		const currencyCode = row[CURRENCY_CODE_COLUMN];
		const currencyRate = Number(row[CURRENCY_RATE_COLUMN].replace(/,/, '.'));
		if (!currencyRatesMap.hasOwnProperty(currencyCode)) {
			currencyRatesMap[currencyCode] = currencyRate / amount;
		}
	})

	return { currencyTableHeaders, currencyTableRows, currencyRatesMap };
}