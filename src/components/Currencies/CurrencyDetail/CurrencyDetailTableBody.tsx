import { AVERAGE_RATE_DECIMALS } from "../../../constants/constants";
import { CurrencyDetail } from "../../../types/CurrencyDetail";

type Props = {
	currencyDetail: CurrencyDetail
}

const CurrencyDetailTableBody: React.FC<Props> = ({currencyDetail}: Props) => {
	const { code = '', country = '', average = 0} = currencyDetail;
	return (
		<tbody className='table__body'>
			<tr>
				<td>{code}</td>
				<td style={{minWidth: '19vw'}}>{country}</td>
				<td>{average.toFixed(AVERAGE_RATE_DECIMALS)} CZK</td>
			</tr>
		</tbody>
	)
}

export default CurrencyDetailTableBody