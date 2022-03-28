import axios from "axios";
import diacritics from 'diacritics';

import { ALPHABET, CURRENCY_LIST } from "../constants/constants";
import { CurrenciesMap } from "../types/CurrenciesMap";
import { Currency } from "../types/Currency";
import { getAverageRate, getCountryNameByCode, sortCurrenciesAlphaBetically } from "../utils/currency";

const removeDiacritics = diacritics.remove;

export const getCurrencyList = async () => {
	try {
		const options = {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    };
		const result = await axios.get(CURRENCY_LIST, options);
		const currencies = sortCurrenciesAlphaBetically(result.data.currencies, 'country') || [];
		const currenciesMap = getCurrenciesMap(result.data.currencies) || {};
		return {currencies, currenciesMap};
	} catch (error) {
		console.log('An error occured, #api/getCurrencyList:', error);
	}
}

export const getCurrencyDetail = async (code: string, currencies: Currency[]) => {
	if (!code || !currencies) {
		return undefined;
	}
	try {
		const url = `${process.env.PUBLIC_URL}/data/${code.toLowerCase()}.json`
		const options = {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    };

		const result = await axios.get(url, options);

		const { data = {} } = result;
		const { rates = [] } = data;

		const average: number = getAverageRate(rates);
		const country: string = getCountryNameByCode(code, currencies);


		return {code, country, rates, average};
	} catch (error) {
		console.log('An error occured, #api/getCurrencyDetail:', error);
		throw new Error();
	}
}

export const getCurrenciesMap = (currencies: Currency[]) => {
	const currenciesMap: CurrenciesMap = {};
	for (let i=0; i<ALPHABET.length; i++) {
		const key = ALPHABET[i];
		const value: Currency[] = [];
		Object.assign(currenciesMap, {[key]: value})
	}


	for (let i=0; i<currencies.length; i++) {
		const currency = currencies[i];

		const firstLetterCurrencyCode = currency.code[0].toLowerCase();
		const firstLetterCurrencyCountry = removeDiacritics(currency.country)[0].toLowerCase();

		if (currenciesMap.hasOwnProperty(firstLetterCurrencyCode)) {
			currenciesMap[firstLetterCurrencyCode] = [...currenciesMap[firstLetterCurrencyCode], currency];
		}

		if (currenciesMap.hasOwnProperty(firstLetterCurrencyCountry)
		&& firstLetterCurrencyCode !== firstLetterCurrencyCountry) {
			currenciesMap[firstLetterCurrencyCountry] = [...currenciesMap[firstLetterCurrencyCountry], currency];
		}
	}

	return currenciesMap;
}