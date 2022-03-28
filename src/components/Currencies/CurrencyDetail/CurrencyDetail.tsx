import { CurrencyDetail as CurrencyDetailType } from '../../../types/CurrencyDetail';
import TableWrapper from '../../Wrappers/TableWrapper';
import CurrencyDetailTableBody from './CurrencyDetailTableBody';
import CurrencyDetailTableHeader from './CurrencyDetailTableHeader';
import RatesChart from './RatesChart';

type Props = {
	currencyDetail: CurrencyDetailType,
	hidden: boolean
}

const CurrencyDetail: React.FC<Props> = ({ currencyDetail, hidden }: Props) => {
	return (
		<TableWrapper className={`currency-detail ${hidden ? 'visually-hidden' : ''}`}>
			<table className='currency-detal__table table'>
				<CurrencyDetailTableHeader />
				<CurrencyDetailTableBody currencyDetail={currencyDetail} />
			</table>
			<RatesChart rates={currencyDetail.rates} />
		</TableWrapper>
	)
}

export default CurrencyDetail;
