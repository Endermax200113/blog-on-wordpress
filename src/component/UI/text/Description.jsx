import React from 'react'
import cl from './Description.module.sass'

const Description = ({children}) => {
	return (
		<p className={cl['description']}>
			{children}
		</p>
	)
}

export default Description