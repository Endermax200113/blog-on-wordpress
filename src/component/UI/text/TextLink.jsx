import React from 'react'
import cl from './TextLink.module.sass'

const TextLink = ({link, children, clazz = undefined, ...props}) => {
	const rootClasses = !clazz ? [cl['text-link']] : clazz(cl)
	
	return (
		<a className={rootClasses.join(' ')} href={link} {...props}>
			{children}
		</a>
	)
}

export default TextLink