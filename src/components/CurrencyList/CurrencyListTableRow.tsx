import styled from 'styled-components';

const ColumnStyled = styled.td`
padding: 20px;
text-align: left;
border-bottom: 0.1px dashed white;
cursor: pointer;
`

// TODO replace any type
const CurrencyListTableRow = ({currency}: any) => {
	return (
		<tr>
			<td >{currency.country}</td>
			<td >{currency.code}</td>
		</tr>
	);
};

export default CurrencyListTableRow;