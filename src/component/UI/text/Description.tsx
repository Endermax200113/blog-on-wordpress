import React from 'react'
import cl from './Description.module.sass'

type PropsDescription = {
	children?: string
	clazz?: (Function: ({readonly [key: string]: string})) => Array<string>
}

const Description: React.FC<PropsDescription> = 
({children, clazz}) => {
	const rootClasses = !clazz ? [cl['description']] : clazz(cl)

	return (
		<p className={rootClasses.join(' ')}>
			{children}
		</p>
	)
}

export default Description