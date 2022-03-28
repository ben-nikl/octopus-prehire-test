import React, { useState } from 'react'

type Props = {
	handleCurrencySearch: (value: string) => void
}

const CurrencySearch = ({handleCurrencySearch}: Props) => {
	const [searchQuery, setSearchQuery] = useState('');
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value = '' } = e.currentTarget;
		setSearchQuery(value)
		handleCurrencySearch(value);
	}
	return (
		<div className='currency-search'>
			<form action="">
				<label htmlFor="currency-search">
					<input
						value={searchQuery}
						type="text"
						name='currency-search'
						placeholder='Search currency'
						onChange={handleInputChange}
					/>
				</label>
			</form>
		</div>
	)
}

export default CurrencySearch