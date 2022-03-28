import { useCallback, useEffect, useState } from 'react'
import diacritics from 'diacritics';

import { getCurrencyDetail } from '../../api/currency';
import { CurrenciesMap } from '../../types/CurrenciesMap';
import { Currency } from '../../types/Currency';
import { CurrencyDetail as CurrencyDetailType } from '../../types/CurrencyDetail';
import { filterCurrencies } from '../../utils/currency';
import FlexContainer from '../Wrappers/FlexContainer';
import CurrencyDetail from './CurrencyDetail/CurrencyDetail'
import CurrencyList from './CurrencyList/CurrencyList'
import CurrencySearch from './CurrencySearch/CurrencySearch';
import ErrorNitification from '../Helpers/ErrorNitification';

const removeDiacritics = diacritics.remove;

type Props = {
	currencies: Currency[],
	currenciesMap: CurrenciesMap
}
const Currencies: React.FC<Props> = ({currencies = [], currenciesMap = {}}: Props) => {
	const [search, setSearch] = useState('');
	const [selectedCurrency, setSelectedCurrency] = useState('');
	const [currencyDetail, setCurencyDetail] = useState({country: '', code: '', rates: [0], average: 0});
	const [error, setError] = useState(false);

	useEffect(() => {
		getCurrencyDetail(selectedCurrency, currencies)
			.then((data: CurrencyDetailType | undefined) => data && setCurencyDetail(data))
			.catch(() => setError(true));
	}, [selectedCurrency, currencies]);

	
	const handleCurrencySelect = useCallback(
		(currencyCode: string) => {
			setSelectedCurrency(currencyCode);
			setError(false);
		},
		[],
	)
	

	const handleCurrencySearch = useCallback(
		(query = '') => {
			setSearch(removeDiacritics(query).toLowerCase());
		},
		[],
	)
	
	const filteredCurrencies = search ? filterCurrencies(search, currenciesMap) : currencies;
	return (
		<>
			<CurrencySearch handleCurrencySearch={handleCurrencySearch} />
			<FlexContainer className='currencies'>
				<CurrencyList
					search={search}
					currencies={filteredCurrencies}
					handleCurrencySelect={handleCurrencySelect}
				/>
				{!error
				? <CurrencyDetail hidden={!selectedCurrency} currencyDetail={currencyDetail} />
				: <ErrorNitification />
				}
			</FlexContainer>
		</>
	)
}

export default Currencies