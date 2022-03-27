import CurrencyListTableRow from './CurrencyListTableRow';

const CurrencyListTableBody = ({currencies = []}) => {
	return (
		<tbody className='table__body'>
			{ currencies.map(currency => <CurrencyListTableRow currency={currency} />)}
		</tbody>
	);
};

export default CurrencyListTableBody;