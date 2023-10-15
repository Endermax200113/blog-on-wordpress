import React from 'react'
import cl from './TextLink.module.sass'

type PropsTextLink = {
	link: string
	children: string
	clazz?: (Function: ({readonly [key: string]: string})) => Array<string>
	[props: string]: any
}

const TextLink: React.FC<PropsTextLink> = 
({link, children, clazz, ...props}) => {
	const rootClasses: Array<string> = !clazz ? [cl['text-link']] : clazz(cl)
	
	return (
		<a className={rootClasses.join(' ')} href={link} {...props}>
			{children}
		</a>
	)
}

export default TextLink