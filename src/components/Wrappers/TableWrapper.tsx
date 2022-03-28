import React from 'react'

const TableWrapper = ({children, className = ''}: any) => {
	return (
		<div className={`table-container ${className}`}>{children}</div>
	)
}

export default TableWrapper