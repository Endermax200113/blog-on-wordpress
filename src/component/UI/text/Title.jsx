import React from 'react'
import cl from './Title.module.sass'

const Title = ({text, white = false, clazz = undefined}) => {
	const rootClasses = !clazz ? [cl['title']] : clazz(cl)

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