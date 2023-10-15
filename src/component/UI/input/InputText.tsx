import React from 'react'
import cl from './InputText.module.sass'
import { TypeInputText } from '../../../util/inputtext'

type PropsInputText = {
	type: TypeInputText
	text?: string
	hint?: string
	clazz?: (Function: ({readonly [key: string]: string})) => Array<string>
	[props: string]: any
}

const InputText: React.FC<PropsInputText> = 
({type, text, hint, clazz, ...props}) => {
	const rootClasses: Array<string> = !clazz ? [cl['input-text']] : clazz(cl)

	return (
		<input type={type} className={rootClasses.join(' ')} placeholder={hint} value={text} {...props} />
	)
}

export default InputText