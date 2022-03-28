import React from 'react'

const FlexContainer = ({children, className = ''}: any) => {
	return (
		<div className={`${className} flex-container`}>{children}</div>
	)
}

export default FlexContainer