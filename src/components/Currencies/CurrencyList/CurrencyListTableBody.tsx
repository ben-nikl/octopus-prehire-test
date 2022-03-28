import { Currency } from '../../../types/Currency';
import CurrencyListTableRow from './CurrencyListTableRow';

type Props = {
	currencies: Currency[];
	handleCurrencySelect: (currencyCode: string) => void;
}

const CurrencyListTableBody: React.FC<Props> = ({currencies = [], handleCurrencySelect}: Props) => {
	return (
		<tbody className='table__body'>
			{currencies.map(
				(currency: Currency)=> {
					return <CurrencyListTableRow
										key={currency.code}
										handleCurrencySelect={handleCurrencySelect}
										currency={currency}
									/>
				}
			)}
		</tbody>
	);
};

export default CurrencyListTableBody;