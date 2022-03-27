import { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import CurrencyDetail from '../CurrencyDetail/CurrencyDetail'
import CurrencyList from '../CurrencyList/CurrencyList'

const Currencies = ({currencies}: any) => {
	const [selectedCurrency, setSelectedCurrency] = useState('');
	useEffect(() => {

	}, [selectedCurrency])
	
	const handleCurrencySelect = (currencyCode: string) => {
		setSelectedCurrency(currencyCode);
	}
	const selectedDetail = {
		country: '',
		code: '',
		ratesLast12M: []
	};
	return (
		<>
			<CurrencyList
				currencies={currencies}
				handleCurrencySelect={handleCurrencySelect}
			/>
			<CurrencyDetail selectedDetail={selectedDetail} />
		</>
	)
}

export default Currencies