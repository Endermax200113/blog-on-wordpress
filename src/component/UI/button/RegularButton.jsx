import React from 'react'
import cl from './RegularButton.module.sass'

const RegularButton = ({text, white, hoverToBlue}) => {
	const rootClasses = [cl['button']]

	if (white && !hoverToBlue) {
		rootClasses.push(cl['button--white'])
	}

	return (
		<button type="button" className={rootClasses.join(' ')}>
			{text}
		</button>
	)
}

export default RegularButton