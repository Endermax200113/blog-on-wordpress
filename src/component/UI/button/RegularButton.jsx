import React from 'react'
import cl from './RegularButton.module.sass'

const RegularButton = ({text, white = false, hoverToBlue = false, ...props}) => {
	const rootClasses = [cl['button']]

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