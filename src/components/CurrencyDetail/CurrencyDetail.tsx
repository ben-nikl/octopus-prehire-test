import React from 'react'
import TableWrapper from '../Wrappers/TableWrapper';
import CurrencyDetailTableBody from './CurrencyDetailTableBody';
import CurrencyDetailTableHeader from './CurrencyDetailTableHeader';

const CurrencyDetail = ({selectedCurrency}: any) => {
	
	return (
		<TableWrapper>
			<table className='currency-detal__table table'>
			<CurrencyDetailTableHeader />
			<CurrencyDetailTableBody />
			</table>
		</TableWrapper>
	)
}

export default CurrencyDetail;
