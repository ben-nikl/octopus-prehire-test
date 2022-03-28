import { Currency } from "../../../types/Currency";

type Props = {
	currency: Currency;
	handleCurrencySelect: (currencyCode: string) => void;
}

const CurrencyListTableRow = ({currency, handleCurrencySelect}: Props) => {
	const handleRowClick = () => {
		handleCurrencySelect(currency.code)
	}
	return (
		<tr onClick={handleRowClick}>
			<td >{currency.country}</td>
			<td >{currency.code}</td>
		</tr>
	);
};

export default CurrencyListTableRow;