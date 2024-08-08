import React, { FunctionComponent, SVGProps } from 'react'
import cl from './NormalButton.module.sass'
import { SvgAndPosition, SvgPosition } from '../../../util/svg'

type PropsNormalButton = {
	text: string
	svg?: SvgAndPosition
	clazz?: (Function: ({readonly [key: string]: string})) => Array<string>
	[props: string]: any
}

const NormalButton: React.FC<PropsNormalButton> =
({text, svg, clazz, ...props}) => {
	const rootClasses: 
		Array<string> = 
		!clazz ? [cl['button']] : clazz(cl)

	const rootClassesSvg:
		Array<string> | undefined =
		!svg?.clazz ? [cl['button__el'], cl['svg']] : svg?.clazz(cl)
	
	const SvgElement: 
		FunctionComponent<SVGProps<SVGSVGElement>> = 
		!svg ? React.createElement("svg") as any : svg.svg

	return (
		<button type="button" className={rootClasses.join(' ')} {...props}>
			{
				(svg?.position === SvgPosition.LEFT) &&
				<SvgElement className={rootClassesSvg.join(' ')} />
			}
			<span className={cl['button__el']}>{text}</span>
			{
				(svg?.position === SvgPosition.RIGHT) &&
				<SvgElement className={rootClassesSvg.join(' ')} />
			}
		</button>
	)
}

export default NormalButton