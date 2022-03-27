const CurrencyListTableHeader = () => {
	return (
		<thead className='table__header'>
			<tr>
				<th key='countryName' >Country</th>
				<th key='currencyCode' >Code</th>
			</tr>
		</thead>
	);
};

export default CurrencyListTableHeader;