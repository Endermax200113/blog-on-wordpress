import React from 'react'
import cl from './Line.module.sass'

type PropsLine = {
	clazz?: (Function: ({readonly [key: string]: string})) => Array<string>
}

const Line: React.FC<PropsLine> = 
({clazz}) => {
	const rootClasses: Array<string> = !clazz ? [cl['line']] : clazz(cl)

	return (
		<hr className={rootClasses.join(' ')} />
	)
}

export default Line