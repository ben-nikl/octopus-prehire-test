import { useNavigate  } from "react-router-dom";

import { Currency } from "../../../types/Currency";

type Props = {
	currency: Currency;
	handleCurrencySelect: (currencyCode: string) => void;
}

const CurrencyListTableRow = ({ currency, handleCurrencySelect }: Props) => {
	let navigate = useNavigate ();
	const handleRowClick = () => {
		handleCurrencySelect(currency.code)
		navigate(`/currency/detail/${currency.code}`)
	}
	return (
		<tr onClick={handleRowClick}>
			<td >{currency.country}</td>
			<td >{currency.code}</td>
		</tr>


	);
};

export default CurrencyListTableRow;