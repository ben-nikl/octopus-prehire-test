import React from 'react'

const CurrencyDetailTableHeader: React.FC = () => {
	return (
		<thead className='table__header'>
			<tr>
				<th>Code</th>
				<th>Country</th>
				<th>Average rate</th>
			</tr>
		</thead>
	)
}

export default CurrencyDetailTableHeader