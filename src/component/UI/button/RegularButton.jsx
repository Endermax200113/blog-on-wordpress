import React from 'react'
import cl from './RegularButton.module.sass'

const RegularButton = ({text, white, hoverToBlue, ...props}) => {
	const rootClasses = [cl['button']]

	if (white && !hoverToBlue) {
		rootClasses.push(cl['button--white'])
	}

	return (
		<button type="button" {...props} className={rootClasses.join(' ')}>
			{text}
		</button>
	)
}

export default RegularButton