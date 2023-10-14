import React from 'react'
import cl from './Title.module.sass'

type PropsTitle = {
	text: string
	white?: boolean
	clazz?: (Function: ({readonly [key: string]: string})) => Array<string>
}

const Title: React.FC<PropsTitle> = 
({text, white, clazz}) => {
	const rootClasses: Array<string> = !clazz ? [cl['title']] : clazz(cl)

	if (white) {
		rootClasses.push(cl['title--white'])
	}

	return (
		<h1 className={rootClasses.join(' ')}>
			{text}
		</h1>
	)
}

export default Title