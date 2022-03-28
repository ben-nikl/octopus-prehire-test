import diacritics from 'diacritics';


import { CURRENT_CENTURY_YEARS, MONTHS } from "../constants/constants";
import { ChartRate } from "../types/ChartRate";
import { CurrenciesMap } from "../types/CurrenciesMap";
import { Currency } from "../types/Currency";

const removeDiacritics = diacritics.remove;

export const roundNumberTwoDecimals = (input: number): number => {
	return Math.round(input * 100) / 100;
}

export const getAverageRate = (rates: number[]): number => {
	if (!rates.length) {
		return 0;
	}
	return rates.reduce((
		prevValue: number,
		currentValue: number
		) => prevValue + currentValue, 0) / rates.length;
}

/**
 * get a list of rates for last 12 months
 * result is a list of Objects, where every Object includes name of month and its rate
 * 
 */
export const getChartData = (rates: number[]): ChartRate[] => {
	const result = [];
	const today = new Date();
	let startMonthIndex = today.getMonth();

	for (let i=0; i<rates.length; i++) {
		const month = MONTHS[startMonthIndex % 12];

		const dateSuffix = (i === rates.length - 1) ? today.getFullYear() % CURRENT_CENTURY_YEARS : '';
		const date = month.slice(0, 3) + dateSuffix;
		const rate = roundNumberTwoDecimals(rates[i]);
		result.push({name: date, value: rate});
		startMonthIndex++;
	}

	return result;
}

export const getCountryNameByCode = (code: string, currencies: Currency[]) => {
	const currency: Currency | undefined = currencies.find((currency: Currency) => currency.code === code);
	const country: string = currency ? currency.country : '';
	return country;
}

export const sortCurrenciesAlphaBetically = (items: Currency[], propName: string) => {
	return items.sort((a: Currency, b: Currency) => a[propName].localeCompare(b[propName]))
}
export const filterCurrencies = (search: string, currenciesMap: CurrenciesMap) => {
	const firstLetterSearch: string = search[0];
	const collection = currenciesMap[firstLetterSearch];
	const result = collection.filter((currency) => {
		const country = removeDiacritics(currency.country).toLowerCase();
		const { code } = currency;

		return country.startsWith(search) || code.toLowerCase().startsWith(search);
	});

	return result;
}