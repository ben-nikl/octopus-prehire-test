import TableWrapper from '../Wrappers/TableWrapper';
import CurrencyListTableBody from './CurrencyListTableBody';

import CurrencyListTableHeader from './CurrencyListTableHeader';

// remove any type
export const CurrencyList = ({currencies}: any) => {

	return (
		<TableWrapper className='currency-list'>
			<table className='currencies-list__table table'>
				<CurrencyListTableHeader />
				<CurrencyListTableBody currencies={currencies} />
			</table>
		</TableWrapper>
	);
}

export default CurrencyList;