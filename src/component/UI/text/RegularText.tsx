import React from 'react'
import { TypeTextTag } from '../../../util/text'
import cl from './RegularText.module.sass'

type PropsRegularText = {
	type: TypeTextTag
	children: string
	clazz?: (Function: ({readonly [key: string]: string})) => Array<string>
}

const RegularText: React.FC<PropsRegularText> = 
({type, children, clazz}) => {
	const rootClasses: Array<string> = !clazz ? [cl['text']] : clazz(cl)

	switch (type) {
		case TypeTextTag.DIV:
			return (
				<div className={rootClasses.join(' ')}>
					{children}
				</div>
			)
		default:
			return (
				<span className={rootClasses.join(' ')}>
					{children}
				</span>
			)
	}
}

export default RegularText