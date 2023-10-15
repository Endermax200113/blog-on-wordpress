import React from 'react'
import cl from './RegularButton.module.sass'

type PropsRegularButton = {
	text: string
	white?: boolean
	hoverToBlue?: boolean
	[props: string]: any
}

const RegularButton: React.FC<PropsRegularButton> = 
({text, white, hoverToBlue, ...props}) => {
	const rootClasses: Array<string> = [cl['button']]

	if (white) {
		if (!hoverToBlue) {
			rootClasses.push(cl['button--white'])
		} else {
			rootClasses.push(cl['button--white-hover-blue'])
		}
	}

	return (
		<button type="button" {...props} className={rootClasses.join(' ')}>
			{text}
		</button>
	)
}

export default RegularButton