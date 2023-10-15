import React, { FunctionComponent, SVGProps } from 'react'
import cl from './NormalButton.module.sass'

type PropsNormalButton = {
	text: string
	svg?: FunctionComponent<SVGProps<SVGSVGElement>>
	clazz?: (Function: ({readonly [key: string]: string})) => Array<string>
	[props: string]: any
}

const NormalButton: React.FC<PropsNormalButton> =
({text, svg, clazz, ...props}) => {
	const rootClasses: 
		Array<string> = 
		!clazz ? [cl['button']] : clazz(cl)
	const SvgElement: 
		FunctionComponent<SVGProps<SVGSVGElement>> = 
		!svg ? React.createElement("svg") as any : svg

	return (
		<button className={rootClasses.join(' ')} {...props}>
			<span className={cl['button__el']}>{text}</span>
			{
				svg &&
				<SvgElement className={[cl['button__el'], cl['svg']].join(' ')} />
			}
		</button>
	)
}

export default NormalButton