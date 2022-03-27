import axios from "axios";
import { CURRENCY_LIST } from "../constants/constants";

export const getCurrencyList = async () => {
	try {
		const options = {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    };
		const result = await axios.get(CURRENCY_LIST, options);
		return result?.data;
	} catch (error) {
		console.log('An error occured, #api/getCurrencyList:', error)
	}
}

export const getCurrencyDetail = async (code: string) => {
	try {
		const url = `process.env.PUBLIC_URL${code}.json`
		const options = {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    };
		// TODO insert url into options
		const result = await axios.get(url, options);
		return result?.data;
	} catch (error) {
		console.log('An error occured, #api/getCurrencyDetail:', error)
	}
}