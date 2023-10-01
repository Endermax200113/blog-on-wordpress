import React from 'react'
import cl from './Description.module.sass'

const Description = ({children, clazz = undefined}) => {
	const rootClasses = !clazz ? [cl['description']] : clazz(cl)

	return (
		<p className={rootClasses.join(' ')}>
			{children}
		</p>
	)
}

export default Description