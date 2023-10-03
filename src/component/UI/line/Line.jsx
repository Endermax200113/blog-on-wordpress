import React from 'react'
import cl from './Line.module.sass'

const Line = ({clazz = undefined}) => {
	const rootClasses = !clazz ? [cl['line']] : clazz(cl)

	return (
		<hr className={rootClasses.join(' ')} />
	)
}

export default Line