import React, { FunctionComponent, SVGProps } from 'react'
import cl from './TextLink.module.sass'
import { SvgAndPosition, SvgPosition } from '../../../util/svg'

type PropsTextLink = {
	link: string
	children: string
	svg?: SvgAndPosition
	clazz?: (Function: ({readonly [key: string]: string})) => Array<string>
	[props: string]: any
}

const TextLink: React.FC<PropsTextLink> = 
({link, children, svg, clazz, ...props}) => {
	const rootClasses: 
		Array<string> = 
		!clazz ? [cl['text-link']] : clazz(cl)

	const rootClassesSvg: 
		Array<string> = 
		!svg?.clazz ? [cl['text-link__el'], cl['svg']] : svg.clazz(cl)

	const SvgElement: 
		FunctionComponent<SVGProps<SVGSVGElement>> =
		!svg ? React.createElement("svg") as any : svg.svg

	return (
		<a 
			className={rootClasses.join(' ')} 
			href={link}
			{...props}
		>
			{
				svg?.position === SvgPosition.LEFT &&
				<SvgElement className={rootClassesSvg.join(' ')} />
			}
			{
				!svg
				? children
				: <span className={cl['text-link__el']}>{children}</span>
			}
			{
				svg?.position === SvgPosition.RIGHT &&
				<SvgElement className={rootClassesSvg.join(' ')} />
			}
		</a>
	)
}

export default TextLink