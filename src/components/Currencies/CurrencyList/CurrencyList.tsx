import { Currency } from '../../../types/Currency';
import { sortCurrenciesAlphaBetically } from '../../../utils/currency';
import TableWrapper from '../../Wrappers/TableWrapper';
import CurrencyListTableBody from './CurrencyListTableBody';
import CurrencyListTableHeader from './CurrencyListTableHeader';

// remove any type
type Props = {
	search: string;
	currencies: Currency[];
	handleCurrencySelect: (currencyCode: string) => void;
}
export const CurrencyList = ({currencies, search, handleCurrencySelect}: Props) => {
	const sortedByCountryName = sortCurrenciesAlphaBetically(currencies, 'country');
	// const filteredByQuery = 
	return (
<>
		<TableWrapper className='currency-list'>
			<table className='currencies-list__table table'>
				<CurrencyListTableHeader />
				<CurrencyListTableBody currencies={sortedByCountryName} handleCurrencySelect={handleCurrencySelect} />
			</table>
		</TableWrapper>
</>
	);
}

export default CurrencyList;